from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#142b36")
CORAL = colors.HexColor("#f8755d")
CREAM = colors.HexColor("#f5f0e7")
MINT = colors.HexColor("#9dcdb8")
YELLOW = colors.HexColor("#f5c84b")
INK = colors.HexColor("#172e38")
MUTED = colors.HexColor("#53636a")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=28, leading=32, textColor=NAVY, alignment=TA_LEFT, spaceAfter=10))
styles.add(ParagraphStyle(name="CoverSub", parent=styles["BodyText"], fontName="Helvetica", fontSize=12, leading=18, textColor=MUTED, spaceAfter=18))
styles.add(ParagraphStyle(name="SectionTitle", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=18, leading=22, textColor=NAVY, spaceBefore=8, spaceAfter=10))
styles.add(ParagraphStyle(name="Small", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="BodyDE", parent=styles["BodyText"], fontName="Helvetica", fontSize=10, leading=15, textColor=INK, spaceAfter=8))
styles.add(ParagraphStyle(name="Prompt", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=NAVY, spaceAfter=5))
styles.add(ParagraphStyle(name="Answer", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.6, leading=14, textColor=INK))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, A4[0], 13 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(18 * mm, 5 * mm, "Deutsch-Sprint by Berlinagile")
    canvas.drawRightString(A4[0] - 18 * mm, 5 * mm, str(doc.page))
    canvas.restoreState()


def build_pdf(filename, story, title):
    doc = SimpleDocTemplate(
        str(OUT / filename), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=20 * mm, title=title, author="Masih Adavoodi"
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def cover(title, subtitle, label):
    return [
        Spacer(1, 18 * mm),
        Table([[label]], colWidths=[45 * mm], style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), CORAL), ("TEXTCOLOR", (0, 0), (-1, -1), NAVY),
            ("FONTNAME", (0, 0), (-1, -1), "Helvetica-Bold"), ("FONTSIZE", (0, 0), (-1, -1), 9),
            ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("TOPPADDING", (0, 0), (-1, -1), 7),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 7)
        ])),
        Spacer(1, 12 * mm), Paragraph(title, styles["CoverTitle"]), Paragraph(subtitle, styles["CoverSub"]),
        Spacer(1, 8 * mm), Paragraph("Ein Arbeitsmaterial von Masih Adavoodi", styles["BodyDE"]),
        Paragraph("Stand: 9. August 2026", styles["Small"]), PageBreak()
    ]


roadmap_rows = [
    ("1", "A1", "Aussprache, Begrüßung, Zahlen, Kernverben", "7 bis 9", "Erstes Gespräch über Person und Alltag"),
    ("2", "A1", "Satzbau, Fragen, Termine und Wege", "7 bis 9", "Alltagstermine selbst organisieren"),
    ("3", "A1", "Hören, kurze Texte und A1-Aufgaben", "8 bis 10", "A1-Standortbestimmung"),
    ("4", "A2", "Vergangenheit, Modalverben und Arbeit", "8 bis 10", "Kurzer Bericht über Erfahrungen"),
    ("5", "A2", "Wohnung, Behörden, Gesundheit und Schreiben", "8 bis 10", "Formelle Nachricht sicher verfassen"),
    ("6", "A2", "Längere Gespräche und A2-Aufgaben", "9 bis 11", "A2-Standortbestimmung"),
    ("7", "B1", "Meinungen, Begründungen und Textaufbau", "9 bis 12", "Fünf-Minuten-Präsentation"),
    ("8", "B1", "Lesen, Hören und Prüfungstempo", "10 bis 12", "Vollständiger B1-Probetest"),
    ("9", "B1", "Mündliche Prüfung und Fehlerkorrektur", "10 bis 12", "B1-Prüfung oder belastbare Prognose"),
    ("10", "B2", "Komplexere Texte und berufliche Themen", "12 bis 15", "Strukturierte Stellungnahme"),
    ("11", "B2", "Diskussion, Präzision und Fachwortschatz", "12 bis 15", "B2-Prüfungssimulation"),
    ("12", "B2", "Lücken schließen und Prüfungstempo", "12 bis 15", "B2 nur bei stabilen Probetests")
]

roadmap_story = cover("Der 12-Monats-Fahrplan", "Ein realistischer Plan von null auf B1. Der intensive Pfad führt bei passenden Voraussetzungen weiter in Richtung B2.", "FAHRPLAN")
roadmap_story += [Paragraph("So lesen Sie den Plan", styles["SectionTitle"]), Paragraph("Die Wochenstunden enthalten Unterricht, geführte Aufgaben und selbstständige Übung. Sie sind ein Planungsrahmen und keine Garantie. B1 in zwölf Monaten ist der ruhigere Weg. Für B2 ist die obere Grenze der Stunden nötig, ergänzt durch tägliche Anwendung.", styles["BodyDE"]), Spacer(1, 5 * mm)]
table_data = [[Paragraph(f"<b>{cell}</b>", styles["Small"]) for cell in ["Monat", "Niveau", "Fokus", "Std./Woche", "Meilenstein"]]]
table_data += [[Paragraph(str(cell), styles["Small"]) for cell in row] for row in roadmap_rows]
roadmap_table = Table(table_data, repeatRows=1, colWidths=[13 * mm, 16 * mm, 52 * mm, 27 * mm, 56 * mm])
roadmap_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"), ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
    ("FONTSIZE", (0, 0), (-1, -1), 7.5), ("LEADING", (0, 0), (-1, -1), 10),
    ("VALIGN", (0, 0), (-1, -1), "TOP"), ("GRID", (0, 0), (-1, -1), .35, colors.HexColor("#c9c4bb")),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, CREAM]),
    ("TEXTCOLOR", (0, 1), (0, -1), CORAL), ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
    ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)
]))
roadmap_story += [roadmap_table, Spacer(1, 8 * mm), Paragraph("Planungswerte", styles["SectionTitle"]), Paragraph("Die Wochenstunden sind interne Planungswerte für das Coaching. Sie kombinieren Unterricht, Korrektur, geführte Aufgaben und selbstständige Übung. Der tatsächliche Bedarf hängt von Vorkenntnissen, Lernbedingungen und täglicher Anwendung ab.", styles["BodyDE"]), Paragraph("Hinweis: Berlinagile ist ein unabhängiges Coaching-Angebot und nicht mit Prüfungsanbietern wie dem Goethe-Institut oder telc verbunden.", styles["Small"])]
build_pdf("deutsch-sprint-12-monats-fahrplan.pdf", roadmap_story, "Deutsch-Sprint 12-Monats-Fahrplan")


word_groups = {
    "Person und Alltag": "der Alltag, die Person, der Name, das Alter, die Adresse, die Familie, der Freund, die Freundin, der Nachbar, die Nachbarin, leben, wohnen, heißen, geboren, ledig, verheiratet, gemeinsam, allein, täglich, normalerweise, morgens, mittags, abends, gestern, heute, morgen, früh, spät, pünktlich, beschäftigt, frei, wichtig, möglich, persönlich, freundlich, zufrieden, müde, wach, beginnen, enden",
    "Wohnen": "die Wohnung, das Zimmer, die Küche, das Bad, der Balkon, der Keller, der Schlüssel, die Miete, der Vermieter, die Vermieterin, der Umzug, die Möbel, der Tisch, der Stuhl, das Bett, der Schrank, die Lampe, die Heizung, der Strom, das Wasser, mieten, umziehen, renovieren, reparieren, öffnen, schließen, sauber, schmutzig, hell, dunkel, ruhig, laut, bequem, kaputt, zentral, besetzt, neben, zwischen, gegenüber, innerhalb",
    "Arbeit": "die Arbeit, der Beruf, die Stelle, die Firma, das Büro, der Kollege, die Kollegin, der Chef, die Chefin, die Aufgabe, das Projekt, die Erfahrung, die Bewerbung, der Lebenslauf, das Gehalt, die Pause, die Schicht, der Vertrag, die Kündigung, die Besprechung, arbeiten, planen, entscheiden, bearbeiten, organisieren, verdienen, sich bewerben, unterschreiben, kündigen, teilnehmen, verantwortlich, beruflich, selbstständig, arbeitslos, produktiv, erfolgreich, kooperativ, angestellt, flexibel, zuverlässig",
    "Lernen": "die Schule, der Kurs, die Prüfung, das Thema, die Lösung, der Fehler, die Sprache, das Wort, der Satz, die Grammatik, die Aussprache, das Beispiel, die Bedeutung, die Notiz, das Ergebnis, der Fortschritt, der Plan, das Niveau, die Übung, die Wiederholung, lernen, üben, verstehen, sprechen, lesen, schreiben, hören, wiederholen, verbessern, korrigieren, bestehen, lösen, merken, vergessen, deutlich, richtig, falsch, aufmerksam, mündlich, konzentriert",
    "Behörden": "das Amt, die Behörde, der Antrag, das Formular, die Anmeldung, die Erlaubnis, der Termin, das Dokument, der Ausweis, der Pass, die Bescheinigung, die Unterschrift, die Gebühr, die Frist, der Brief, die Nummer, die Information, der Schalter, die Kopie, das Original, beantragen, anmelden, ausfüllen, abgeben, vorlegen, bestätigen, verlängern, überweisen, erhalten, fehlen, gültig, ungültig, notwendig, vollständig, offiziell, erforderlich, rechtzeitig, amtlich, verfügbar, öffentlich",
    "Gesundheit": "die Gesundheit, der Arzt, die Ärztin, die Praxis, das Krankenhaus, die Apotheke, das Medikament, die Krankheit, der Schmerz, das Fieber, der Husten, die Erkältung, die Untersuchung, die Behandlung, die Versicherung, der Notfall, der Kopf, der Rücken, der Bauch, die Hand, krank, gesund, weh tun, sich fühlen, untersuchen, behandeln, verschreiben, einnehmen, warten, sich erholen, schlimm, besser, plötzlich, vorsorglich, vorsichtig, ärztlich, nüchtern, verletzt, fit, schwindlig",
    "Einkaufen": "das Geschäft, der Supermarkt, der Markt, das Produkt, der Preis, das Angebot, die Kasse, die Rechnung, das Geld, die Karte, der Rabatt, die Größe, die Farbe, die Qualität, die Tüte, das Stück, das Kilo, die Flasche, die Packung, der Kunde, kaufen, verkaufen, kosten, bezahlen, bestellen, umtauschen, passen, brauchen, wählen, empfehlen, teuer, billig, günstig, frisch, leer, voll, bar, zusammen, einzeln, geöffnet",
    "Essen": "das Essen, das Frühstück, das Mittagessen, das Abendessen, das Brot, das Gemüse, das Obst, das Fleisch, der Fisch, der Käse, die Milch, der Saft, der Kaffee, der Tee, das Restaurant, die Speisekarte, die Bestellung, der Hunger, der Durst, der Geschmack, essen, trinken, kochen, backen, schneiden, zubereiten, schmecken, reservieren, zahlen, mitbringen, lecker, süß, salzig, scharf, vegetarisch, warm, kalt, genug, hungrig, durstig",
    "Reisen und Verkehr": "die Reise, der Urlaub, der Bahnhof, der Flughafen, der Zug, der Bus, die Bahn, das Fahrrad, das Auto, die Haltestelle, die Fahrkarte, der Fahrplan, die Verspätung, die Richtung, der Weg, die Kreuzung, die Straße, die Ankunft, das Gepäck, die Unterkunft, fahren, fliegen, reisen, umsteigen, abfahren, ankommen, aussteigen, einsteigen, buchen, sich verspäten, direkt, einfach, zurück, unterwegs, links, rechts, geradeaus, nah, weit, erreichbar",
    "Kommunikation": "das Gespräch, die Nachricht, die E-Mail, der Anruf, das Handy, das Internet, die Meinung, die Idee, das Argument, der Grund, die Erklärung, die Bitte, die Einladung, die Absage, die Zustimmung, der Vorschlag, das Problem, die Rückfrage, die Rückmeldung, das Missverständnis, sagen, erzählen, fragen, antworten, anrufen, schicken, zustimmen, ablehnen, vorschlagen, bitten, meinen, glauben, begründen, beschreiben, vergleichen, höflich, ehrlich, klar, verständlich, ausführlich"
}
words = []
for theme, raw in word_groups.items():
    group = [item.strip() for item in raw.split(",")]
    assert len(group) == 40, (theme, len(group))
    words.extend((theme, item) for item in group)
assert len(words) == 400

word_story = cover("400 wichtige Wörter für B1", "Eine thematische Arbeitsliste für Alltag, Behörden, Arbeit und typische Prüfungssituationen.", "WORTSCHATZ")
word_story += [Paragraph("So arbeiten Sie mit der Liste", styles["SectionTitle"]), Paragraph("Markieren Sie zuerst Wörter, die Sie verstehen, aber noch nicht aktiv verwenden. Schreiben Sie dann zu jedem neuen Wort einen persönlichen Beispielsatz. Wiederholen Sie höchstens 20 neue Wörter pro Woche und prüfen Sie sie in kurzen Sprechaufgaben.", styles["BodyDE"])]
for group_index, (theme, raw) in enumerate(word_groups.items()):
    group = [item.strip() for item in raw.split(",")]
    if group_index:
        word_story.append(PageBreak())
    data = [[Paragraph(f"<b>{i + 1 + group_index * 40}</b>  {word}", styles["BodyDE"]), Paragraph(f"<b>{i + 21 + group_index * 40}</b>  {group[i + 20]}", styles["BodyDE"])] for i, word in enumerate(group[:20])]
    word_story += [Paragraph(theme, styles["SectionTitle"]), Table(data, colWidths=[82 * mm, 82 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("ROWBACKGROUNDS", (0, 0), (-1, -1), [colors.white, CREAM]), ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)])), Spacer(1, 5 * mm)]
build_pdf("deutsch-sprint-400-woerter-b1.pdf", word_story, "Deutsch-Sprint 400 wichtige Wörter für B1")


samples = [
    ("Sich vorstellen", "Stellen Sie sich kurz vor.", "Guten Tag, ich heiße Amir Rahmani und bin 34 Jahre alt. Ich komme aus dem Iran und lebe seit vier Jahren in Berlin. Ich arbeite als Projektkoordinator in einer Softwarefirma. In meiner Freizeit fahre ich gern Fahrrad und koche mit Freunden."),
    ("Wohnort", "Beschreiben Sie Ihren Wohnort.", "Ich wohne in Berlin-Friedrichshain. Mein Viertel ist lebendig und gut mit öffentlichen Verkehrsmitteln erreichbar. In der Nähe gibt es einen Park, mehrere Supermärkte und eine Bibliothek. Am Wochenende ist es manchmal laut, aber insgesamt wohne ich gern dort."),
    ("Arbeit", "Sprechen Sie über Ihren Arbeitsalltag.", "Mein Arbeitstag beginnt normalerweise um neun Uhr. Zuerst prüfe ich meine E-Mails und plane die wichtigsten Aufgaben. Danach habe ich oft Besprechungen mit meinem Team. Mir gefällt besonders, dass meine Arbeit abwechslungsreich ist und ich gemeinsam mit anderen Lösungen finde."),
    ("Deutsch lernen", "Warum lernen Sie Deutsch?", "Ich lerne Deutsch, weil ich mich im Alltag sicherer fühlen und beruflich mehr Verantwortung übernehmen möchte. Außerdem plane ich die B1-Prüfung. Ich übe jeden Tag etwa eine Stunde und spreche möglichst oft mit Kolleginnen und Kollegen."),
    ("Freizeit", "Was machen Sie in Ihrer Freizeit?", "In meiner Freizeit gehe ich gern spazieren und höre Podcasts. Einmal pro Woche treffe ich Freunde zum Kochen. Wenn das Wetter gut ist, fahre ich mit dem Fahrrad an einen See. Diese Aktivitäten helfen mir, nach der Arbeit abzuschalten."),
    ("Reise", "Erzählen Sie von einer Reise.", "Letztes Jahr bin ich mit dem Zug nach Hamburg gefahren. Die Fahrt dauerte ungefähr zwei Stunden. Dort habe ich den Hafen besucht und bin an der Elbe spazieren gegangen. Besonders gut hat mir gefallen, dass man viele Orte ohne Auto erreichen konnte."),
    ("Gesund leben", "Was tun Sie für Ihre Gesundheit?", "Ich versuche, regelmäßig zu schlafen und mich ausgewogen zu ernähren. An drei Tagen pro Woche mache ich Sport. Während der Arbeit stehe ich jede Stunde kurz auf. Wenn ich krank bin, ruhe ich mich aus und frage bei Bedarf meine Ärztin um Rat."),
    ("Einkaufen", "Wo kaufen Sie Lebensmittel ein?", "Meistens kaufe ich in einem Supermarkt in meiner Nähe ein. Obst und Gemüse hole ich gern auf dem Wochenmarkt, weil die Produkte dort oft frisch sind. Ich schreibe vorher eine Liste, damit ich nur das kaufe, was ich wirklich brauche."),
    ("Öffentliche Verkehrsmittel", "Wie bewegen Sie sich in der Stadt?", "Für den Arbeitsweg benutze ich meistens die U-Bahn. Sie ist schnell und ich muss keinen Parkplatz suchen. Bei kurzen Wegen nehme ich das Fahrrad. Wenn es spät ist oder ich viel Gepäck habe, fahre ich manchmal mit einem Taxi."),
    ("Wohnen", "Was ist Ihnen bei einer Wohnung wichtig?", "Eine Wohnung sollte für mich ruhig und hell sein. Eine gute Verbindung zur Arbeit ist ebenfalls wichtig. Ich brauche kein großes Wohnzimmer, aber einen kleinen Arbeitsplatz. Außerdem achte ich auf die Miete und die Nebenkosten."),
    ("Gemeinsam planen", "Planen Sie mit einer anderen Person ein Picknick.", "Ich schlage vor, dass wir uns am Samstag um elf Uhr im Stadtpark treffen. Ich kann Brot, Käse und Wasser mitbringen. Könnten Sie Obst und eine Decke besorgen? Falls es regnet, könnten wir stattdessen zu mir nach Hause gehen."),
    ("Einladung", "Laden Sie jemanden zu einer Feier ein.", "Hallo Sara, ich feiere am Freitag ab 18 Uhr meinen Geburtstag und möchte dich gern einladen. Wir treffen uns bei mir zu Hause. Es gibt Abendessen und Musik. Bitte sag mir bis Mittwoch Bescheid, ob du kommen kannst."),
    ("Absage", "Sagen Sie höflich einen Termin ab.", "Guten Tag Frau Klein, leider kann ich den Termin am Dienstag nicht wahrnehmen, weil ich an diesem Tag arbeiten muss. Könnten wir einen neuen Termin am Donnerstagvormittag vereinbaren? Ich entschuldige mich für die kurzfristige Änderung."),
    ("Beschwerde", "Beschweren Sie sich über ein defektes Produkt.", "Sehr geehrte Damen und Herren, vor einer Woche habe ich bei Ihnen einen Wasserkocher gekauft. Seit gestern funktioniert das Gerät nicht mehr. Ich möchte es deshalb umtauschen oder reparieren lassen. Die Rechnung habe ich noch."),
    ("Bitte um Information", "Fragen Sie nach einem Sprachkurs.", "Sehr geehrte Damen und Herren, ich interessiere mich für Ihren B1-Kurs. Bitte teilen Sie mir mit, wann der nächste Kurs beginnt, wie viele Stunden er umfasst und was er kostet. Außerdem möchte ich wissen, ob der Unterricht online stattfindet."),
    ("Meinung", "Sollten Innenstädte autofrei sein?", "Meiner Meinung nach sollten weniger Autos in Innenstädten fahren. Dadurch gäbe es weniger Lärm und bessere Luft. Allerdings müssen Busse und Bahnen zuverlässig sein. Menschen mit eingeschränkter Mobilität brauchen außerdem passende Ausnahmen."),
    ("Homeoffice", "Welche Vor- und Nachteile hat Homeoffice?", "Homeoffice spart Zeit, weil der Arbeitsweg wegfällt. Viele Menschen können sich zu Hause besser konzentrieren. Ein Nachteil ist, dass der persönliche Austausch fehlt. Deshalb finde ich eine Mischung aus Büro und Homeoffice sinnvoll."),
    ("Soziale Medien", "Wie nutzen Sie soziale Medien?", "Ich nutze soziale Medien vor allem, um mit Freunden in Kontakt zu bleiben und Nachrichten zu lesen. Dabei prüfe ich, ob eine Quelle zuverlässig ist. Benachrichtigungen habe ich ausgeschaltet, damit ich mich bei der Arbeit besser konzentrieren kann."),
    ("Umweltschutz", "Was kann man im Alltag für die Umwelt tun?", "Man kann häufiger öffentliche Verkehrsmittel nutzen, weniger Lebensmittel wegwerfen und Produkte reparieren lassen. Auch kleine Schritte sind sinnvoll, wenn man sie regelmäßig macht. Wichtig ist für mich, dass die Lösung zum eigenen Alltag passt."),
    ("Lernplan", "Wie planen Sie eine Prüfungsvorbereitung?", "Zuerst prüfe ich, welche Aufgaben mir noch schwerfallen. Dann plane ich feste Übungszeiten für jede Woche. Einmal pro Woche mache ich einen kurzen Test. Wenn ein Thema noch unsicher ist, wiederhole ich es im nächsten Lernabschnitt.")
]
assert len(samples) == 20
sample_story = cover("20 Musterantworten für B1", "Beispiele für den mündlichen Teil. Nutzen Sie die Strukturen, aber formulieren Sie Ihre eigene Antwort.", "SPRECHEN")
sample_story += [Paragraph("So üben Sie", styles["SectionTitle"]), Paragraph("Lesen Sie die Aufgabe, sprechen Sie zunächst ohne Vorlage und nehmen Sie sich auf. Vergleichen Sie danach Aufbau, Begründungen und Verbindungen mit dem Muster. Lernen Sie die Antwort nicht auswendig. Passen Sie Inhalt und Wörter an Ihre eigene Situation an.", styles["BodyDE"])]
for index, (topic, prompt, answer) in enumerate(samples, 1):
    block = KeepTogether([Paragraph(f"{index:02d}  {topic}", styles["SectionTitle"]), Paragraph(f"<b>Aufgabe:</b> {prompt}", styles["Prompt"]), Table([[Paragraph(answer, styles["Answer"])]], colWidths=[164 * mm], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), CREAM), ("BOX", (0, 0), (-1, -1), .6, CORAL), ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9)])), Spacer(1, 4 * mm)])
    sample_story.append(block)
    if index % 4 == 0 and index != len(samples):
        sample_story.append(PageBreak())
build_pdf("deutsch-sprint-20-musterantworten-b1.pdf", sample_story, "Deutsch-Sprint 20 Musterantworten für B1")
