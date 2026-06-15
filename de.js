(() => {
  const translations = new Map(Object.entries({
    "Research": "Forschung",
    "About Me": "Über mich",
    "Services": "Leistungen",
    "Approach": "Ansatz",
    "Results": "Ergebnisse",
    "Coaching": "Coaching",
    "Let's talk": "Kontakt",
    "Let’s talk": "Kontakt",
    "Agile coaching for teams ready to move": "Agile Coaching für Teams, die etwas bewegen wollen",
    "Less process.": "Weniger Prozess.",
    "More progress.": "Mehr Fortschritt.",
    "I help leaders and teams cut through the noise, work better together, and turn ambitious plans into outcomes that matter.": "Ich unterstütze Führungskräfte und Teams dabei, Klarheit zu schaffen, besser zusammenzuarbeiten und ambitionierte Vorhaben in wirksame Ergebnisse zu verwandeln.",
    "Book a discovery call": "Kennenlerngespräch buchen",
    "See how it works": "So funktioniert es",
    "Trusted by teams at": "Erfahrung mit Teams bei",
    "Clarity": "Klarheit",
    "Alignment": "Ausrichtung",
    "Momentum": "Dynamik",
    "From stuck\nto moving.": "Vom Stillstand\nzur Bewegung.",
    "Build clarity": "Klarheit schaffen",
    "Strengthen teams": "Teams stärken",
    "Deliver value": "Wert schaffen",
    "Lead change": "Veränderung führen",
    "Where I help": "Wobei ich unterstütze",
    "Change that sticks,": "Veränderung, die bleibt,",
    "not theatre.": "keine Inszenierung.",
    "Practical coaching shaped around your real challenges, not a one-size-fits-all playbook.": "Praktisches Coaching, ausgerichtet an Ihren tatsächlichen Herausforderungen statt an einem Standardrezept.",
    "Team coaching": "Teamcoaching",
    "Turn a group of talented people into a team that trusts, decides, and delivers together.": "Aus talentierten Einzelpersonen wird ein Team, das einander vertraut, gemeinsam entscheidet und Ergebnisse liefert.",
    "Leadership coaching": "Führungskräfte-Coaching",
    "Lead with more clarity, create the conditions for ownership, and navigate change confidently.": "Führen Sie klarer, schaffen Sie Raum für Eigenverantwortung und gestalten Sie Veränderung sicher.",
    "Organizational agility": "Organisationale Agilität",
    "Connect strategy to delivery and build a system that can learn, adapt, and keep moving.": "Verbinden Sie Strategie mit Umsetzung und entwickeln Sie ein System, das lernt, sich anpasst und handlungsfähig bleibt.",
    "Book your Free Consulting session": "Kostenloses Beratungsgespräch buchen",
    "The approach": "Der Ansatz",
    "No grand": "Keine große",
    "transformation.": "Transformation.",
    "Just real change.": "Nur echte Veränderung.",
    "We start where you are, focus on what matters now, and build your capability as we go.": "Wir beginnen dort, wo Sie stehen, konzentrieren uns auf das, was jetzt zählt, und bauen dabei Ihre eigenen Fähigkeiten aus.",
    "Listen deeply": "Aufmerksam zuhören",
    "Understand the system, the people, and the real work behind the symptoms.": "Das System, die Menschen und die tatsächliche Arbeit hinter den sichtbaren Symptomen verstehen.",
    "Find the leverage": "Den wirksamen Hebel finden",
    "Choose the smallest meaningful shift that can unlock visible progress.": "Die kleinste sinnvolle Veränderung wählen, die sichtbaren Fortschritt ermöglicht.",
    "Learn by doing": "Durch Handeln lernen",
    "Experiment in the work, inspect honestly, and adapt without the ceremony.": "In der realen Arbeit experimentieren, ehrlich reflektieren und ohne unnötige Rituale anpassen.",
    "Make it yours": "Eigenständig weiterführen",
    "Build lasting internal skill so progress continues long after coaching ends.": "Dauerhafte interne Kompetenz aufbauen, damit der Fortschritt auch nach dem Coaching weitergeht.",
    "What changes": "Was sich verändert",
    "Better work.": "Bessere Arbeit.",
    "Better outcomes.": "Bessere Ergebnisse.",
    "Agility is not the goal. It is how your team gets better at solving hard problems together.": "Agilität ist nicht das Ziel. Sie hilft Ihrem Team, anspruchsvolle Probleme gemeinsam besser zu lösen.",
    "shorter lead time": "kürzere Durchlaufzeit",
    "faster decisions": "schnellere Entscheidungen",
    "engagement lift": "mehr Engagement",
    "Start a conversation": "Gespräch beginnen",
    "Ready to get": "Bereit, wieder",
    "unstuck?": "voranzukommen?",
    "Tell me what you're working through. No pitch, no pressure—just a useful first conversation.": "Erzählen Sie mir, woran Sie gerade arbeiten. Kein Verkaufsgespräch, kein Druck – nur ein hilfreicher erster Austausch.",
    "Your name": "Ihr Name",
    "Work email": "Geschäftliche E-Mail",
    "What would you like to change?": "Was möchten Sie verändern?",
    "Your details will be carried into Calendly.": "Ihre Angaben werden zu Calendly übernommen.",
    "Coaching teams toward work that works.": "Teams zu einer Arbeitsweise begleiten, die wirklich funktioniert.",
    "Email": "E-Mail",

    "About me": "Über mich",
    "My Path: Finding Meaning Through": "Mein Weg: Sinn finden durch",
    "People, Work, and Change": "Menschen, Arbeit und Veränderung",
    "By Masih Adavoodi": "Von Masih Adavoodi",
    "People": "Menschen",
    "Sustainable work": "Nachhaltige Arbeit",
    "Eastern sustainability": "Östliche Nachhaltigkeit",
    "Architecture": "Architektur",
    "Communication architecture": "Kommunikationsarchitektur",
    "Sustainable structures": "Nachhaltige Strukturen",
    "Travel": "Reisen",
    "Different temperaments": "Unterschiedliche Temperamente",
    "Business communication": "Unternehmenskommunikation",
    "Human connection": "Menschliche Verbindung",
    "Work psychology": "Arbeitspsychologie",
    "With Prof. Ducki": "Mit Prof. Ducki",
    "Mentorship": "Mentoring",
    "Ideas into practice": "Ideen in die Praxis",
    "Guidance along the way": "Begleitung auf meinem Weg",
    "Mentors who helped shape my thinking": "Mentorinnen und Mentoren, die mein Denken geprägt haben",
    "Professor of Work and Organizational Psychology at BHT, with research spanning healthy work design, stress and resource management, digital work, and psychosocial safety climate.": "Professorin für Arbeits- und Organisationspsychologie an der BHT. Ihre Forschung umfasst gesundheitsgerechte Arbeitsgestaltung, Stress- und Ressourcenmanagement, digitale Arbeit und psychosoziales Sicherheitsklima.",
    "Head of DIN Solutions": "Leiter von DIN Solutions",
    "Founder of TRIoptics and Head of DGAO": "Gründerin von TRIoptics und Leiterin der DGAO",
    "My journey": "Mein Weg",
    "Sustainability": "Nachhaltigkeit",
    "Communication": "Kommunikation",
    "Human experience": "Menschliche Erfahrung",
    "My story began in Iran, where curiosity shaped much of how I saw the world. As a child, I was fascinated by books, poetry, and ideas. I was often the serious kid in the room, always asking questions and searching for understanding. Looking back, I realize that feeling different became a recurring theme throughout my life - at school, at university, and later as an immigrant.": "Meine Geschichte begann im Iran, wo Neugier meine Sicht auf die Welt stark prägte. Als Kind faszinierten mich Bücher, Poesie und Ideen. Ich war oft das ernste Kind im Raum, stellte Fragen und suchte nach Verständnis. Rückblickend erkenne ich, dass das Gefühl, anders zu sein, zu einem wiederkehrenden Thema meines Lebens wurde – in der Schule, an der Universität und später als Einwanderer.",
    "I first studied Architecture, where Eastern approaches to sustainability taught me how systems, structures, and environments influence human experiences. This led me to the idea of communication architecture: how the structures through which people exchange ideas can become more sustainable. Over time, I became increasingly interested in a different question: what shapes the way people connect, communicate, and work together?": "Zunächst studierte ich Architektur. Östliche Ansätze der Nachhaltigkeit zeigten mir, wie Systeme, Strukturen und Umgebungen menschliche Erfahrungen beeinflussen. Daraus entstand für mich die Idee einer Kommunikationsarchitektur: Wie können die Strukturen, in denen Menschen Gedanken austauschen, nachhaltiger gestaltet werden? Mit der Zeit interessierte mich zunehmend eine andere Frage: Was prägt die Art, wie Menschen Beziehungen aufbauen, kommunizieren und zusammenarbeiten?",
    "This question followed me as I traveled and lived in different countries. Along the way, I met people from diverse cultures, languages, and backgrounds. Despite our differences, I was repeatedly struck by the kindness, generosity, and openness I encountered. These experiences challenged many assumptions and helped me develop a deep appreciation for cultural diversity and human connection.": "Diese Frage begleitete mich auf Reisen und während meines Lebens in verschiedenen Ländern. Dabei begegnete ich Menschen mit unterschiedlichen Kulturen, Sprachen und Hintergründen. Trotz aller Unterschiede beeindruckten mich immer wieder ihre Freundlichkeit, Großzügigkeit und Offenheit. Diese Erfahrungen stellten viele Annahmen infrage und vertieften meine Wertschätzung für kulturelle Vielfalt und menschliche Verbundenheit.",
    "My journey was not always straightforward. Before settling in Germany, I worked in demanding environments and experienced periods of uncertainty, long working hours, and significant personal challenges. These experiences taught me resilience, but they also revealed the importance of dignity, support, and psychological well-being in the workplace.": "Mein Weg verlief nicht immer geradlinig. Bevor ich mich in Deutschland niederließ, arbeitete ich in anspruchsvollen Umgebungen und erlebte Phasen der Unsicherheit, lange Arbeitszeiten und große persönliche Herausforderungen. Diese Erfahrungen lehrten mich Widerstandskraft, zeigten mir aber auch, wie wichtig Würde, Unterstützung und psychisches Wohlbefinden am Arbeitsplatz sind.",
    "In March 2020, I moved to Germany just as the COVID-19 pandemic began reshaping the world. Starting a new life in a new country during a global crisis was both challenging and transformative. Suddenly, communication, education, and work shifted into digital spaces. Like many others, I had to learn how to build relationships, collaborate, and create a sense of belonging through screens and digital platforms.": "Im März 2020 zog ich nach Deutschland, genau als die COVID-19-Pandemie begann, die Welt neu zu gestalten. Während einer globalen Krise ein neues Leben in einem neuen Land zu beginnen, war herausfordernd und prägend zugleich. Kommunikation, Bildung und Arbeit verlagerten sich plötzlich in digitale Räume. Wie viele andere musste ich lernen, über Bildschirme und digitale Plattformen Beziehungen aufzubauen, zusammenzuarbeiten und Zugehörigkeit zu schaffen.",
    "During this time, I worked in customer service roles while continuing my studies. Communicating daily in German with customers from different backgrounds taught me valuable lessons about empathy, problem-solving, and the human side of work. It also strengthened my belief that people perform best when they feel respected, supported, and heard.": "In dieser Zeit arbeitete ich im Kundenservice und setzte gleichzeitig mein Studium fort. Die tägliche Kommunikation auf Deutsch mit Kundinnen und Kunden unterschiedlicher Herkunft vermittelte mir wertvolle Erkenntnisse über Empathie, Problemlösung und die menschliche Seite der Arbeit. Sie bestärkte mich in der Überzeugung, dass Menschen ihr Bestes geben, wenn sie sich respektiert, unterstützt und gehört fühlen.",
    "These experiences, together with my studies in business communication and work psychology with Prof. Dr. Antje Ducki, eventually led me away from architecture and toward the fields of organizational behavior, Agile work, and employee well-being. Her work on healthy work design, stress and resource management, digital work, and psychosocial safety climate gave me an important scientific foundation. Along this path, mentors including Sven Bargender, Head of DIN Solutions, and Ricarda Kafka, founder of TRIoptics and Head of DGAO, helped me connect ideas with practice. I became particularly interested in how organizations can create environments where people feel psychologically safe enough to contribute ideas, ask questions, learn from mistakes, and grow together.": "Diese Erfahrungen und mein Studium der Unternehmenskommunikation und Arbeitspsychologie bei Prof. Dr. Antje Ducki führten mich schließlich von der Architektur zu Organisationsverhalten, agiler Arbeit und dem Wohlbefinden von Beschäftigten. Ihre Arbeit zu gesundheitsgerechter Arbeitsgestaltung, Stress- und Ressourcenmanagement, digitaler Arbeit und psychosozialem Sicherheitsklima gab mir eine wichtige wissenschaftliche Grundlage. Auf diesem Weg halfen mir Mentoren wie Sven Bargender, Leiter von DIN Solutions, und Ricarda Kafka, Gründerin von TRIoptics und Leiterin der DGAO, Ideen mit der Praxis zu verbinden. Besonders interessierte mich, wie Organisationen Umgebungen schaffen können, in denen Menschen sich psychologisch sicher genug fühlen, um Ideen einzubringen, Fragen zu stellen, aus Fehlern zu lernen und gemeinsam zu wachsen.",
    "This passion ultimately inspired my Master's research on Psychosocial Safety Climate (PSC) in Agile work environments. My work explores how trust, communication, leadership, and organizational culture influence both employee well-being and organizational performance. I believe that sustainable organizations are not built solely through technology, processes, or efficiency. They are built through people.": "Diese Leidenschaft inspirierte schließlich meine Masterforschung zum Psychosocial Safety Climate (PSC) in agilen Arbeitsumgebungen. Meine Arbeit untersucht, wie Vertrauen, Kommunikation, Führung und Organisationskultur sowohl das Wohlbefinden der Beschäftigten als auch die Leistung einer Organisation beeinflussen. Nachhaltige Organisationen entstehen meiner Überzeugung nach nicht allein durch Technologie, Prozesse oder Effizienz. Sie entstehen durch Menschen.",
    "Today, my goal is to contribute to a future of work where innovation and well-being are not competing priorities but complementary ones. Through research, continuous learning, and dialogue, I hope to help organizations create workplaces where people can thrive, collaborate, and find meaning in what they do.": "Heute möchte ich zu einer Zukunft der Arbeit beitragen, in der Innovation und Wohlbefinden keine Gegensätze, sondern sich ergänzende Prioritäten sind. Durch Forschung, kontinuierliches Lernen und Dialog möchte ich Organisationen dabei unterstützen, Arbeitsplätze zu schaffen, an denen Menschen sich entfalten, zusammenarbeiten und Sinn in ihrem Tun finden können.",
    "Because in the end, every system, every organization, and every innovation is ultimately about people.": "Denn am Ende geht es bei jedem System, jeder Organisation und jeder Innovation um Menschen.",
    "Continue the conversation": "Im Gespräch bleiben",
    "Better work begins with": "Bessere Arbeit beginnt mit",
    "listening.": "Zuhören.",
    "Explore my research": "Meine Forschung entdecken",
    "Work with me": "Mit mir arbeiten",

    "berlinagile research": "Berlinagile Forschung",
    "Learning in public about": "Öffentlich lernen,",
    "how teams belong.": "wie Zugehörigkeit in Teams entsteht.",
    "Field notes, evidence, and practical experiments for people building diverse Agile teams. Written to be read, questioned, and used.": "Feldnotizen, Forschungsergebnisse und praktische Experimente für Menschen, die vielfältige agile Teams gestalten. Zum Lesen, Hinterfragen und Anwenden.",
    "Read the latest": "Neueste Beiträge lesen",
    "Follow the diversity research tree": "Dem Forschungsbaum zur Vielfalt folgen",
    "Latest research": "Aktuelle Forschung",
    "Notes from the work": "Notizen aus der Praxis",
    "Short, useful reads. No jargon required.": "Kurze, nützliche Texte. Ohne unnötigen Fachjargon.",
    "All": "Alle",
    "Agile foundations": "Agile Grundlagen",
    "New Work": "Neue Arbeit",
    "Technology & Innovation": "Technologie & Innovation",
    "Diversity": "Vielfalt",
    "Remote work": "Remote-Arbeit",
    "Language": "Sprache",
    "Inclusion": "Inklusion",
    "Agile Work Environments": "Agile Arbeitsumgebungen",
    "Psychosocial Safety in Digital Agile Communities and Remote Work": "Psychosoziale Sicherheit in digitalen agilen Gemeinschaften und bei Remote-Arbeit",
    "Moderating Factors: Gender, Job Type, Age, and Culture": "Moderierende Faktoren: Geschlecht, Tätigkeit, Alter und Kultur",
    "Key Findings: Psychosocial Safety Climate in Agile Work Environments": "Zentrale Ergebnisse: Psychosoziales Sicherheitsklima in agilen Arbeitsumgebungen",
    "Introduction to New Work: Rethinking How We Work": "Einführung in New Work: Arbeit neu denken",
    "Scrum Connect 2026: Technology Creates Value Through Communities": "Scrum Connect 2026: Technologie schafft Wert durch Gemeinschaften",
    "Read the introduction": "Einführung lesen",
    "Read the article": "Artikel lesen",
    "Read the findings": "Ergebnisse lesen",
    "Read the event insights": "Veranstaltungsanalyse lesen",
    "Research map": "Forschungslandkarte",
    "The path toward more inclusive Agile teams": "Der Weg zu inklusiveren agilen Teams",
    "What we understand, what remains uncertain, and what we are testing next.": "Was wir verstehen, was noch unklar ist und was wir als Nächstes untersuchen.",
    "What we know": "Was wir wissen",
    "What we are learning": "Was wir lernen",
    "What we are testing": "Was wir erproben",
    "Contribute to the research": "Zur Forschung beitragen",
    "Working on one of these challenges?": "Arbeiten Sie an einer dieser Herausforderungen?",
    "I am looking for teams willing to share experiences or test small changes in their real work.": "Ich suche Teams, die Erfahrungen teilen oder kleine Veränderungen in ihrer tatsächlichen Arbeit erproben möchten.",
    "Start a conversation": "Gespräch beginnen",
    "Sources": "Quellen",
    "Credits": "Danksagung",
    "Article summary": "Artikelzusammenfassung",
    "Based on": "Basierend auf",
    "Original article": "Originalartikel",

    "Agile is a project management and work organization approach that emerged as an alternative to traditional, plan-driven development methods. It emphasizes flexibility, continuous improvement, collaboration, and rapid adaptation to changing requirements. Rather than relying on extensive upfront planning and rigid processes, Agile promotes iterative development cycles in which teams regularly review progress, gather feedback, and adjust their work accordingly.": "Agile ist ein Ansatz für Projektmanagement und Arbeitsorganisation, der als Alternative zu traditionellen, plangetriebenen Entwicklungsmethoden entstand. Im Mittelpunkt stehen Flexibilität, kontinuierliche Verbesserung, Zusammenarbeit und die schnelle Anpassung an veränderte Anforderungen. Statt auf umfangreiche Vorabplanung und starre Prozesse zu setzen, fördert Agile iterative Entwicklungszyklen, in denen Teams regelmäßig den Fortschritt prüfen, Feedback einholen und ihre Arbeit entsprechend anpassen.",
    "In contemporary organizations, particularly within the information technology sector, Agile methodologies have become widely adopted due to their ability to support innovation and responsiveness in dynamic business environments. Frameworks such as Scrum and Kanban enable teams to organize work into short cycles, prioritize customer value, and maintain continuous communication among stakeholders. These approaches encourage self-management, shared responsibility, and cross-functional collaboration, allowing organizations to respond more effectively to evolving market demands.": "In modernen Organisationen, insbesondere in der Informationstechnologie, sind agile Methoden weit verbreitet, da sie Innovation und Reaktionsfähigkeit in dynamischen Geschäftsumgebungen unterstützen. Frameworks wie Scrum und Kanban ermöglichen es Teams, Arbeit in kurzen Zyklen zu organisieren, Kundennutzen zu priorisieren und kontinuierlich mit Stakeholdern zu kommunizieren. Diese Ansätze fördern Selbstorganisation, gemeinsame Verantwortung und funktionsübergreifende Zusammenarbeit.",
    "A defining characteristic of Agile work is its focus on people and interactions. Agile teams typically operate with greater autonomy than traditional hierarchical structures and are expected to make decisions collectively while maintaining high levels of transparency and accountability. Regular meetings, feedback sessions, and collaborative problem-solving activities are integral components of Agile practice. These mechanisms can enhance knowledge sharing, team cohesion, and productivity while fostering a culture of continuous learning.": "Ein prägendes Merkmal agiler Arbeit ist der Fokus auf Menschen und Interaktionen. Agile Teams arbeiten meist autonomer als in traditionellen hierarchischen Strukturen und treffen Entscheidungen gemeinsam, während sie Transparenz und Verantwortlichkeit wahren. Regelmäßige Meetings, Feedbackrunden und gemeinsames Problemlösen gehören zur agilen Praxis. Sie können Wissensaustausch, Teamzusammenhalt und Produktivität stärken und eine Kultur kontinuierlichen Lernens fördern.",
    "Despite its numerous advantages, Agile work environments also introduce unique challenges. The emphasis on rapid delivery, frequent feedback, and continuous adaptation can create substantial psychological and emotional demands for employees. Team members often experience pressure to meet short iteration deadlines, manage changing priorities, and engage in ongoing communication with colleagues and stakeholders. As a result, researchers have increasingly examined the implications of Agile work for employee well-being, psychological safety, and organizational sustainability.": "Trotz vieler Vorteile bringen agile Arbeitsumgebungen besondere Herausforderungen mit sich. Der Schwerpunkt auf schneller Lieferung, häufigem Feedback und fortlaufender Anpassung kann erhebliche psychische und emotionale Anforderungen erzeugen. Teammitglieder erleben Druck durch kurze Iterationen, wechselnde Prioritäten und ständige Kommunikation. Deshalb untersucht die Forschung zunehmend die Auswirkungen agiler Arbeit auf Wohlbefinden, psychologische Sicherheit und organisationale Nachhaltigkeit.",
    "Given the growing prevalence of Agile methodologies across industries, understanding the organizational factors that support both performance and employee well-being has become increasingly important. This has led scholars to explore concepts such as psychological safety and Psychosocial Safety Climate (PSC), which may help organizations create healthier and more sustainable Agile work environments.": "Mit der zunehmenden Verbreitung agiler Methoden wird es wichtiger zu verstehen, welche organisationalen Faktoren sowohl Leistung als auch Wohlbefinden unterstützen. Daher untersucht die Forschung Konzepte wie psychologische Sicherheit und Psychosocial Safety Climate (PSC), die Organisationen beim Aufbau gesünderer und nachhaltigerer agiler Arbeitsumgebungen helfen können.",

    "Psychosocial safety is a critical foundation for successful Agile teams, especially in digital and remote work environments. Beyond formal project teams, Agile organizations rely on Communities of Practice (CoPs), informal networks where professionals share knowledge, learn from each other, and develop best practices. These communities thrive when individuals feel safe to express ideas, ask questions, challenge existing approaches, and discuss mistakes without fear of negative consequences.": "Psychosoziale Sicherheit ist eine wesentliche Grundlage erfolgreicher agiler Teams, besonders in digitalen und dezentralen Arbeitsumgebungen. Neben formalen Projektteams stützen sich agile Organisationen auf Communities of Practice (CoPs): informelle Netzwerke, in denen Fachleute Wissen teilen, voneinander lernen und bewährte Praktiken entwickeln. Diese Gemeinschaften gedeihen, wenn Menschen Ideen äußern, Fragen stellen, bestehende Ansätze hinterfragen und Fehler ohne Angst vor negativen Folgen besprechen können.",
    "In digital environments, maintaining psychological safety becomes more challenging. Virtual Communities of Practice often experience lower levels of participation, reduced willingness to voice opinions, and increased risks of exclusion or group fragmentation. To address these challenges, organizations should establish clear community guidelines, inclusive moderation practices, and structured facilitation that encourages diverse perspectives and open dialogue.": "In digitalen Umgebungen ist psychologische Sicherheit schwieriger aufrechtzuerhalten. Virtuelle Communities of Practice erleben häufig geringere Beteiligung, weniger Bereitschaft zur Meinungsäußerung sowie ein höheres Risiko von Ausgrenzung und Fragmentierung. Klare Gemeinschaftsregeln, inklusive Moderation und strukturierte Facilitation können vielfältige Perspektiven und offenen Dialog fördern.",
    "The rise of remote and hybrid work has introduced additional psychosocial challenges. Constant digital communication, virtual meetings, and expectations of continuous availability can increase stress and blur the boundaries between work and personal life. A strong Psychosocial Safety Climate (PSC) helps organizations reduce these pressures by creating clear communication expectations, supporting healthy work-life boundaries, and promoting employee well-being.": "Remote- und Hybridarbeit bringen zusätzliche psychosoziale Herausforderungen mit sich. Ständige digitale Kommunikation, virtuelle Meetings und die Erwartung permanenter Erreichbarkeit können Stress erhöhen und Grenzen zwischen Arbeit und Privatleben verwischen. Ein starkes Psychosocial Safety Climate (PSC) hilft, diese Belastungen durch klare Kommunikationserwartungen, gesunde Grenzen und die Förderung des Wohlbefindens zu reduzieren.",
    "For Agile teams, practical PSC-based measures include setting communication norms, limiting after-hours expectations, scheduling focused work periods, and incorporating regular well-being check-ins during Agile ceremonies. These practices help maintain psychological health while supporting collaboration, learning, and innovation.": "Praktische PSC-Maßnahmen für agile Teams umfassen Kommunikationsnormen, begrenzte Erwartungen außerhalb der Arbeitszeit, feste Fokuszeiten und regelmäßige Wohlbefindens-Check-ins in agilen Formaten. Diese Praktiken schützen die psychische Gesundheit und unterstützen zugleich Zusammenarbeit, Lernen und Innovation.",
    "As work becomes increasingly digital, organizations must actively create environments where psychological safety is supported. By integrating PSC principles into remote work and digital communities, Agile organizations can strengthen collaboration, improve knowledge sharing, foster innovation, and protect employee well-being.": "Mit zunehmender Digitalisierung müssen Organisationen aktiv Umgebungen schaffen, die psychologische Sicherheit fördern. Durch die Integration von PSC-Prinzipien in Remote-Arbeit und digitale Gemeinschaften können agile Organisationen Zusammenarbeit, Wissensaustausch und Innovation stärken und zugleich das Wohlbefinden schützen.",

    "The effectiveness of a Psychosocial Safety Climate (PSC) is influenced by several demographic and cultural factors. While PSC promotes trust, open communication, and employee well-being across organizations, individuals may experience its benefits differently depending on their background and work context.": "Die Wirksamkeit eines Psychosocial Safety Climate (PSC) wird von demografischen und kulturellen Faktoren beeinflusst. Obwohl PSC Vertrauen, offene Kommunikation und Wohlbefinden fördert, können Menschen die Vorteile abhängig von Hintergrund und Arbeitskontext unterschiedlich erleben.",
    "Research shows that strong PSC environments encourage employees to report concerns, share ideas, and learn from mistakes without fear of blame. These qualities are particularly important in Agile teams, where collaboration, continuous learning, and adaptability are essential for success.": "Forschung zeigt, dass ein starkes PSC Beschäftigte ermutigt, Bedenken anzusprechen, Ideen zu teilen und ohne Angst vor Schuldzuweisungen aus Fehlern zu lernen. Gerade in agilen Teams sind diese Qualitäten entscheidend, da Zusammenarbeit, kontinuierliches Lernen und Anpassungsfähigkeit den Erfolg prägen.",
    "Gender can influence how employees experience PSC. Studies suggest that women may benefit more strongly from PSC in terms of reduced emotional exhaustion and improved well-being. Job type also plays a role, with PSC having a stronger impact on safety-related behaviors in high-pressure or frontline roles compared to more administrative positions.": "Geschlecht kann beeinflussen, wie Beschäftigte PSC erleben. Studien deuten darauf hin, dass Frauen hinsichtlich geringerer emotionaler Erschöpfung und besseren Wohlbefindens stärker profitieren können. Auch die Tätigkeit spielt eine Rolle: In belastungsintensiven oder operativen Rollen wirkt PSC stärker auf sicherheitsbezogenes Verhalten als in administrativen Positionen.",
    "Age is another important factor. Younger employees often benefit from PSC through increased engagement and learning opportunities, while older employees may require more structured communication and consistent leadership support to maintain psychological well-being in rapidly changing work environments.": "Auch das Alter ist bedeutsam. Jüngere Beschäftigte profitieren häufig durch mehr Engagement und Lernmöglichkeiten, während ältere Beschäftigte in schnell veränderlichen Umgebungen stärker auf strukturierte Kommunikation und verlässliche Unterstützung durch Führung angewiesen sein können.",
    "Cultural differences further shape how PSC is perceived and implemented. In collectivist cultures, visible leadership support and shared responsibility strengthen perceptions of safety. In more individualistic cultures, fairness, autonomy, and transparent decision-making are often more important. As a result, organizations should adapt PSC initiatives to reflect the cultural and demographic diversity of their workforce.": "Kulturelle Unterschiede prägen Wahrnehmung und Umsetzung von PSC. In kollektivistischen Kulturen stärken sichtbare Unterstützung durch Führung und gemeinsame Verantwortung das Sicherheitsgefühl. In individualistischeren Kulturen sind Fairness, Autonomie und transparente Entscheidungen oft wichtiger. PSC-Initiativen sollten daher die kulturelle und demografische Vielfalt der Belegschaft berücksichtigen.",
    "For Agile and distributed IT teams, understanding these moderating factors is essential. Tailoring PSC practices to the needs of different employees can improve collaboration, strengthen psychological safety, and enhance team performance across diverse work environments.": "Für agile und verteilte IT-Teams ist das Verständnis dieser moderierenden Faktoren wesentlich. An unterschiedliche Bedürfnisse angepasste PSC-Praktiken können Zusammenarbeit, psychologische Sicherheit und Teamleistung in vielfältigen Arbeitsumgebungen verbessern.",

    "M. Adavoodi's 2025 survey examined the Psychosocial Safety Climate (PSC) across Agile IT, Non-Agile IT, and Non-IT work environments. The findings demonstrate that Agile IT teams consistently reported the highest levels of psychological safety, management support, communication, and employee participation.": "Die Erhebung von M. Adavoodi aus dem Jahr 2025 untersuchte das Psychosocial Safety Climate (PSC) in agilen IT-, nicht-agilen IT- und Nicht-IT-Arbeitsumgebungen. Agile IT-Teams berichteten durchgehend die höchsten Werte bei psychologischer Sicherheit, Unterstützung durch das Management, Kommunikation und Beteiligung.",
    "The results showed that Agile work environments create significantly stronger psychosocial safety climates than both traditional IT and non-IT workplaces. Agile teams benefited from collaborative work practices, transparent communication, continuous feedback, and inclusive decision-making processes, all of which contribute to a healthier and more supportive work environment.": "Die Ergebnisse zeigten, dass agile Arbeitsumgebungen ein deutlich stärkeres psychosoziales Sicherheitsklima schaffen als traditionelle IT- und Nicht-IT-Arbeitsplätze. Agile Teams profitierten von kooperativen Praktiken, transparenter Kommunikation, kontinuierlichem Feedback und inklusiven Entscheidungsprozessen.",
    "Statistical analysis identified Agile work structures as the strongest predictor of positive PSC perceptions. In contrast, working in a traditional IT environment did not provide a significant advantage over non-IT workplaces. These findings suggest that organizational culture and work practices have a greater impact on psychological safety than industry sector alone.": "Die statistische Analyse identifizierte agile Arbeitsstrukturen als stärksten Prädiktor einer positiven PSC-Wahrnehmung. Eine traditionelle IT-Umgebung bot dagegen keinen signifikanten Vorteil gegenüber Nicht-IT-Arbeitsplätzen. Organisationskultur und Arbeitspraktiken wirken demnach stärker auf psychologische Sicherheit als der Sektor allein.",
    "The study found no significant differences in PSC perceptions based on gender. Both male and female participants reported similar experiences regarding management commitment, communication quality, and participation opportunities. Likewise, age-related differences were limited, although Agile environments appeared to support psychological safety across a wider range of age groups than traditional workplaces.": "Die Studie fand keine signifikanten geschlechtsbezogenen Unterschiede in der PSC-Wahrnehmung. Teilnehmerinnen und Teilnehmer berichteten ähnliche Erfahrungen hinsichtlich Management-Engagement, Kommunikationsqualität und Beteiligungsmöglichkeiten. Altersunterschiede waren ebenfalls begrenzt, wobei agile Umgebungen psychologische Sicherheit über mehr Altersgruppen hinweg zu unterstützen schienen.",
    "Based on these findings, organizations seeking to improve psychological safety should prioritize leadership commitment to employee well-being, open communication, participatory decision-making, regular psychological safety assessments, and targeted training for Agile leaders and Scrum Masters. The results indicate that adopting Agile principles can contribute not only to organizational performance but also to employee well-being, engagement, and long-term sustainability.": "Organisationen, die psychologische Sicherheit verbessern wollen, sollten das Engagement der Führung für das Wohlbefinden, offene Kommunikation, partizipative Entscheidungen, regelmäßige Bewertungen und gezielte Schulungen für agile Führungskräfte und Scrum Master priorisieren. Agile Prinzipien können sowohl zur Leistung als auch zu Wohlbefinden, Engagement und langfristiger Nachhaltigkeit beitragen.",
    "Overall, the study highlights the importance of organizational design in shaping psychological safety and demonstrates that Agile environments can serve as a model for creating healthier and more supportive workplaces.": "Insgesamt unterstreicht die Studie die Bedeutung der Organisationsgestaltung für psychologische Sicherheit und zeigt, dass agile Umgebungen als Modell für gesündere und unterstützendere Arbeitsplätze dienen können.",

    "New Work represents a shift away from traditional hierarchical structures toward more flexible, collaborative, and human-centered ways of working. Both the Deutsche Telekom documentary Geht doch! Arbeit. Neu. Gestalten. and the Fraunhofer Institute's research highlight that successful modern workplaces place people at the center of organizational change.": "New Work steht für den Wandel von traditionellen Hierarchien hin zu flexibleren, kooperativen und menschenzentrierten Arbeitsweisen. Sowohl die Dokumentation der Deutschen Telekom „Geht doch! Arbeit. Neu. Gestalten.“ als auch die Forschung des Fraunhofer-Instituts zeigen, dass erfolgreiche moderne Arbeitsplätze den Menschen in den Mittelpunkt organisationaler Veränderung stellen.",
    "The concept of New Work is built on trust, autonomy, participation, and meaningful work. Employees are encouraged to contribute ideas, take responsibility, and actively participate in decision-making processes. Open communication, continuous learning, and psychological safety are considered essential prerequisites for innovation and sustainable performance.": "New Work basiert auf Vertrauen, Autonomie, Beteiligung und sinnvoller Arbeit. Beschäftigte werden ermutigt, Ideen einzubringen, Verantwortung zu übernehmen und aktiv an Entscheidungen mitzuwirken. Offene Kommunikation, kontinuierliches Lernen und psychologische Sicherheit gelten als Voraussetzungen für Innovation und nachhaltige Leistung.",
    "The Deutsche Telekom documentary demonstrates how organizations from different industries have implemented New Work practices by reducing traditional hierarchies, strengthening self-organization, and creating environments where employees can openly share feedback and learn from mistakes. The film emphasizes that there is no universal recipe for New Work; instead, organizations must develop approaches that fit their culture and people.": "Die Dokumentation der Deutschen Telekom zeigt, wie Organisationen verschiedener Branchen New Work durch weniger Hierarchie, stärkere Selbstorganisation und offene Feedback- und Lernräume umgesetzt haben. Sie betont, dass es kein universelles Rezept gibt; Organisationen müssen Ansätze entwickeln, die zu ihrer Kultur und ihren Menschen passen.",
    "The Fraunhofer Institute's research supports these observations by showing that successful New Work environments combine flexible work arrangements, agile collaboration, digital technologies, and employee empowerment. At the same time, the study highlights potential risks such as work intensification, blurred work-life boundaries, and the need for strong leadership support to ensure employee well-being.": "Die Forschung des Fraunhofer-Instituts bestätigt diese Beobachtungen: Erfolgreiche New-Work-Umgebungen verbinden flexible Arbeitsmodelle, agile Zusammenarbeit, digitale Technologien und Empowerment. Zugleich bestehen Risiken wie Arbeitsverdichtung, verschwimmende Grenzen zwischen Arbeit und Privatleben und ein erhöhter Bedarf an unterstützender Führung.",
    "A central message from both sources is that New Work is not primarily about technology or remote work. Rather, it is about creating organizational cultures based on trust, transparency, participation, and continuous development. Organizations that successfully implement these principles can improve employee engagement, innovation, collaboration, and overall workplace well-being.": "Eine zentrale Botschaft beider Quellen lautet: Bei New Work geht es nicht primär um Technologie oder Remote-Arbeit, sondern um Organisationskulturen, die auf Vertrauen, Transparenz, Beteiligung und kontinuierlicher Entwicklung beruhen. Eine gelungene Umsetzung kann Engagement, Innovation, Zusammenarbeit und Wohlbefinden verbessern.",
    "Ultimately, New Work requires a shift in leadership, mindset, and organizational culture. When employees are given autonomy, psychological safety, and opportunities to contribute meaningfully, organizations become more adaptable, resilient, and prepared for the future of work.": "New Work erfordert letztlich einen Wandel in Führung, Haltung und Organisationskultur. Wenn Beschäftigte Autonomie, psychologische Sicherheit und Möglichkeiten zu sinnvoller Mitwirkung erhalten, werden Organisationen anpassungsfähiger, widerstandsfähiger und besser auf die Zukunft der Arbeit vorbereitet.",

    "Scrum Connect 2026 brought together entrepreneurs, researchers, investors, and industry leaders to explore one of the defining questions of the AI era: How does technology create lasting value for society?": "Scrum Connect 2026 brachte Unternehmerinnen und Unternehmer, Forschende, Investoren und Branchenverantwortliche zusammen, um eine zentrale Frage des KI-Zeitalters zu untersuchen: Wie schafft Technologie dauerhaften Wert für die Gesellschaft?",
    "A key message throughout the event was that technology alone is not enough. Real impact occurs when innovation becomes integrated into communities, industries, and everyday life. The conference emphasized the interconnected role of technology, community, and culture in driving sustainable progress.": "Eine zentrale Botschaft war, dass Technologie allein nicht genügt. Wirkung entsteht, wenn Innovation in Gemeinschaften, Branchen und den Alltag integriert wird. Die Konferenz betonte das Zusammenspiel von Technologie, Gemeinschaft und Kultur als Grundlage nachhaltigen Fortschritts.",
    "Discussions highlighted how Artificial Intelligence is transforming entire industries rather than simply improving existing processes. From resource exploration and advanced robotics to healthcare and scientific discovery, AI is accelerating innovation and creating new possibilities across multiple sectors.": "Die Diskussionen zeigten, wie künstliche Intelligenz ganze Branchen verändert, statt nur bestehende Prozesse zu verbessern. Von Ressourcenerkundung und Robotik bis zu Gesundheitswesen und Wissenschaft beschleunigt KI Innovation und eröffnet neue Möglichkeiten.",
    "One of the featured topics focused on the intersection of AI, robotics, and space exploration. Experts discussed NASA's Artemis program and the growing importance of autonomous systems for future lunar and Martian missions. As human exploration expands beyond Earth, intelligent robots capable of adapting to complex environments will play a critical role in supporting sustainable space operations.": "Ein Schwerpunkt lag auf der Verbindung von KI, Robotik und Raumfahrt. Fachleute diskutierten das Artemis-Programm der NASA und die wachsende Bedeutung autonomer Systeme für künftige Mond- und Marsmissionen. Anpassungsfähige intelligente Roboter werden für nachhaltige Operationen im All eine wichtige Rolle spielen.",
    "The conference also explored the importance of regional innovation ecosystems. Successful innovation depends not only on groundbreaking technology but also on strong networks connecting startups, corporations, universities, governments, and local communities. These ecosystems create environments where experimentation, collaboration, and long-term learning can flourish.": "Die Konferenz beleuchtete auch regionale Innovationsökosysteme. Erfolgreiche Innovation hängt nicht nur von Technologie ab, sondern von starken Netzwerken zwischen Start-ups, Unternehmen, Hochschulen, Politik und lokalen Gemeinschaften. Diese Ökosysteme schaffen Raum für Experimente, Zusammenarbeit und langfristiges Lernen.",
    "Another major theme was AI-driven drug discovery. Advances in machine learning are helping researchers analyze vast amounts of clinical data, accelerate experimentation, and develop more personalized treatments. Rather than replacing scientists, AI is increasingly serving as a powerful tool that enhances human capabilities and speeds up research.": "Ein weiteres Thema war KI-gestützte Arzneimittelforschung. Fortschritte im maschinellen Lernen helfen, große Mengen klinischer Daten zu analysieren, Experimente zu beschleunigen und personalisierte Behandlungen zu entwickeln. KI ersetzt Forschende dabei nicht, sondern erweitert ihre Fähigkeiten und beschleunigt die Forschung.",
    "The overarching conclusion of Scrum Connect 2026 was clear: the future will be shaped not only by technological advancement but also by the communities and cultures that adopt and apply it. Sustainable innovation emerges when technology is designed around human needs, supported by collaboration, and embedded within society.": "Das übergreifende Fazit von Scrum Connect 2026 war klar: Die Zukunft wird nicht nur durch technologischen Fortschritt geprägt, sondern auch durch die Gemeinschaften und Kulturen, die ihn aufnehmen und anwenden. Nachhaltige Innovation entsteht, wenn Technologie an menschlichen Bedürfnissen ausgerichtet, durch Zusammenarbeit getragen und in die Gesellschaft eingebettet wird."
  }));

  const titleTranslations = {
    "Agile Coaching for Teams and Leaders | Berlinagile": "Agile Coaching für Teams und Führungskräfte | Berlinagile",
    "About Masih Adavoodi | Berlinagile": "Über Masih Adavoodi | Berlinagile",
    "Agile Team Research and Psychological Safety | Berlinagile": "Forschung zu agilen Teams und psychologischer Sicherheit | Berlinagile"
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const original = node.nodeValue;
    const trimmed = original.trim();
    const translated = translations.get(trimmed);
    if (!translated) continue;
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + translated + trailing;
  }

  document.querySelectorAll(".article-body > p").forEach((paragraph) => {
    const translated = translations.get(paragraph.textContent.trim());
    if (translated) paragraph.textContent = translated;
  });

  document.title = titleTranslations[document.title] || document.title;
  document.documentElement.lang = "de";

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((field) => {
    const placeholders = {
      "Jane Smith": "Max Mustermann",
      "jane@company.com": "max@unternehmen.de",
      "A few words about your challenge...": "Ein paar Worte zu Ihrer Herausforderung..."
    };
    if (placeholders[field.placeholder]) field.placeholder = placeholders[field.placeholder];
  });

  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.dataset.language === "en" || link.href.startsWith("mailto:")) return;
    const href = link.getAttribute("href");
    if (!href) return;
    link.setAttribute("href", href
      .replace(/^index\.html/, "index-de.html")
      .replace(/^about\.html/, "about-de.html")
      .replace(/^research\.html/, "research-de.html"));
  });
})();
