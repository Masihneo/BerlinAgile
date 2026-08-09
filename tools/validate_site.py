from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import re

ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(ROOT.glob("*.html"))
PAIR_MAP = {
    "index.html": "index-de.html",
    "roadmap.html": "fahrplan-de.html",
    "materials.html": "lernmaterial-de.html",
    "pricing.html": "preise-de.html",
    "about.html": "about-de.html",
    "research.html": "research-de.html",
}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.resources = []
        self.text = []
        self.lang = None
        self.title = ""
        self.in_title = False
        self.in_script = False
        self.in_style = False
        self.metas = {}
        self.consent_checked = False
        self.has_consent = False

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "html":
            self.lang = values.get("lang")
        if "id" in values:
            self.ids.add(values["id"])
        if tag == "a" and values.get("href"):
            self.links.append(values["href"])
        if tag in {"img", "script", "video", "source"} and values.get("src"):
            self.resources.append(values["src"])
        if tag == "link" and values.get("href"):
            self.resources.append(values["href"])
        if tag == "meta":
            key = values.get("name") or values.get("property")
            if key:
                self.metas[key] = values.get("content", "")
        if tag == "input" and values.get("name") == "consent":
            self.has_consent = True
            if "checked" in values:
                self.consent_checked = True
        if tag == "title":
            self.in_title = True
        if tag == "script":
            self.in_script = True
        if tag == "style":
            self.in_style = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script":
            self.in_script = False
        if tag == "style":
            self.in_style = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if not self.in_script and not self.in_style:
            self.text.append(data)


def parse(path):
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


parsed = {page.name: parse(page) for page in PAGES}
errors = []

for page in PAGES:
    doc = parsed[page.name]
    visible = " ".join(doc.text)
    expected_lang = "de" if page.name.endswith("-de.html") or page.name in {"impressum.html", "datenschutz.html"} else "en"
    if doc.lang != expected_lang:
        errors.append(f"{page.name}: expected lang={expected_lang}, found {doc.lang}")
    if not doc.title.strip() or not doc.metas.get("description"):
        errors.append(f"{page.name}: missing title or description")
    for key in ["og:title", "og:description", "og:image", "twitter:title", "twitter:description", "twitter:image"]:
        if not doc.metas.get(key):
            errors.append(f"{page.name}: missing {key}")
    if "impressum.html" not in doc.links or "datenschutz.html" not in doc.links:
        errors.append(f"{page.name}: legal footer links missing")
    if "—" in visible or " - " in visible:
        errors.append(f"{page.name}: forbidden dash punctuation in visible copy")
    if "!" in visible:
        errors.append(f"{page.name}: exclamation mark in visible copy")
    if doc.consent_checked:
        errors.append(f"{page.name}: consent checkbox is preselected")

    for target in doc.resources:
        parts = urlsplit(target)
        if parts.scheme in {"http", "https"}:
            errors.append(f"{page.name}: external resource {target}")
            continue
        local_path = parts.path
        if not local_path or local_path.startswith("data:"):
            continue
        if not (ROOT / local_path).exists():
            errors.append(f"{page.name}: missing resource {local_path}")

    for target in doc.links:
        parts = urlsplit(target)
        if parts.scheme in {"mailto", "tel", "http", "https"}:
            continue
        target_file = parts.path or page.name
        resolved = ROOT / target_file
        if not resolved.exists():
            errors.append(f"{page.name}: missing link target {target}")
            continue
        if parts.fragment and target_file.endswith(".html"):
            target_doc = parsed.get(Path(target_file).name)
            if target_doc and parts.fragment not in target_doc.ids:
                errors.append(f"{page.name}: missing anchor {target}")

for english, german in PAIR_MAP.items():
    if english not in parsed or german not in parsed:
        errors.append(f"missing language pair {english} and {german}")
        continue
    english_link_paths = {urlsplit(link).path for link in parsed[english].links}
    german_link_paths = {urlsplit(link).path for link in parsed[german].links}
    if german not in english_link_paths or english not in german_link_paths:
        errors.append(f"language switch does not pair {english} and {german}")

for required in [
    ROOT / "output/pdf/deutsch-sprint-12-monats-fahrplan.pdf",
    ROOT / "output/pdf/deutsch-sprint-400-woerter-b1.pdf",
    ROOT / "output/pdf/deutsch-sprint-20-musterantworten-b1.pdf",
]:
    if not required.exists() or required.stat().st_size == 0:
        errors.append(f"missing download {required.relative_to(ROOT)}")

placeholders = sorted(set(re.findall(r"\{\{[^}]+\}\}", "\n".join(page.read_text(encoding="utf-8") for page in PAGES))))

if errors:
    print("VALIDATION FAILED")
    for error in errors:
        print(f"  {error}")
    raise SystemExit(1)

print(f"VALIDATION PASSED: {len(PAGES)} HTML pages")
print("PLACEHOLDERS:")
for placeholder in placeholders:
    print(f"  {placeholder}")
