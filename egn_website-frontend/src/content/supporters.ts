export interface SponsorInfo {
  season: string;
  classes: SponsorClass[];
}

export interface SponsorClass {
  name: string;
  supporters: Sponsor[];
}

export interface Sponsor {
  name: string;
  website: string;
  logo: string;
  text: string;
}

export let supporters: SponsorInfo[] = [
   {
    season: '2026',
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience", dafür steht NXP. Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },
        ]
      },
      {
        name: "First Class Partner",
        supporters: [
          {
            name: 'Altium',
            website: 'https://www.altium.com/',
            logo: 'assets/images/sponsors/FCP/altium_logo.png',
            text: 'Die Firma Altium entwickelt und verkauft CAD-Tools im Bereich Elektronikdesign. Mit dem Ziel, den gesamten Designprozess in einer bedienerfreundlichen und bezahlbaren Anwendung zusammenzuführen, wird fortlaufend an der Elektronikdesign-Umgebung Altium Designer weiterentwickelt. Zuletzt wurde sie durch den Online Service Altium 365 ergänzt, welcher bereits seit 2021, kurz nach seinem Release, dem e-gnition Team in der Zusammenarbeit und im Datenmanagement weiterhilft. Zusammen mit AltiumLive, dem internetbasierten Portal für professionelle Elektronikdesigner, verbindet das Unternehmen Menschen und Technologie. Mit seinen Anwendungen schafft Altium eine Art Ökosystem, das weit über die Elektronikentwicklung hinausgeht. Sie schließen die Lücke zwischen der Design- und Fertigungsphase eines Produkts und die Lücke zwischen Menschen und Technologie.'
          }, {
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: ''
          }, {
            name: 'AVL',
            website: 'https://www.avl.com/en',
            logo: 'assets/images/sponsors/FCP/avl.png',
            text: 'Die AVL List GmbH („AVL“) mit Hauptsitz in Graz, Österreich, ist eines der weltweit führenden Mobilitäts-Technologieunternehmen für Engineering, Simulation und Testen in der Automobilindustrie und in anderen Branchen wie Luftfahrt, Schifffahrt und Energie.'
          }, {
            name: 'AVL Racetech',
            website: 'https://www.avlracetech.com/',
            logo: 'assets/images/sponsors/FCP/avl_racetech.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          }, {
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: ''
          }, {
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'assets/images/sponsors/FCP/hereon_logo.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          }, {
            name: 'HF Group',
            website: '',
            logo: 'assets/images/sponsors/FCP/hf_group_logo.png',
            text: ''
          }, {
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          }, {
            name: 'Institut für Produktionsmanagement und -technik',
            website: '',
            logo: 'assets/images/sponsors/FCP/impt_logo.png',
            text: ''
          }, {
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: ''
          }, {
            name: 'LMT Tools GmbH & Co. KG',
            website: 'https://www.lmt-tools.com/de',
            logo: 'assets/images/sponsors/FCP/lmt_tools_logo.png',
            text: 'Seit über 100 Jahren stehen die Spezialisten des heutigen Unternehmens LMT Tools für höchste Qualität und Präzision im Werkzeugbau. LMT ist weltweit mit führend bei der Herstellung von Wälzfräsern für Zahnräder und von Rollköpfen für die Gewindeproduktion. Das Unternehmen wurde 1908 gegründet.'
          }, {
            name: 'Riedel',
            website: '',
            logo: 'assets/images/sponsors/FCP/riedel_logo.png',
            text: ''
          }, {
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise“, in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          },
        ]
      },
      {
        name: "Business Class Partner",
        supporters: [
          {
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          }, {
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          }, {
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          }, {
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          }, {
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          }, {
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          }, {
            name: 'Innolyze',
            website: '',
            logo: 'assets/images/sponsors/BCP/innolyze_logo.png',
            text: ''
          }, {
            name: 'Nutech',
            website: '',
            logo: 'assets/images/sponsors/BCP/nutech_logo.png',
            text: ''
          }, {
            name: 'ODU Steckverbindungssysteme',
            website: '',
            logo: 'assets/images/sponsors/BCP/odu_logo.png',
            text: ''
          }, {
            name: 'Projektron BCS',
            website: '',
            logo: 'assets/images/sponsors/BCP/projektron_logo.png',
            text: ''
          }, {
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: 'https://rs-kartcenter.de/',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: 'Ganz egal, ob Du nun als Kind zum letzten Mal in einem Go-Kart gesessen haben, als Formel-1-Fan endlich wissen wollen, wie man eine Schikane perfekt anbremst oder ob Du schon ein erfahrener Kartfahrer bist – im Ralf Schumacher Kartcenter kannst Du es hautnah erleben.'
          }, {
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          }, {
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          }, {
            name: 'Vector',
            website: 'https://www.vector.com/de/de/',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: 'Vector ist Ihr kompetenter Partner für die Entwicklung von Embedded Elektronik und deren Vernetzung – und das seit über 35 Jahren. An 32 Standorten weltweit unterstützen über 4.500 Mitarbeitende Hersteller und Zulieferer, die komplexe elektronische Systeme mit hohen Anforderungen an Funktionalität und Sicherheit entwickeln, wie beispielweise in der Automobilindustrie, in MedTech, IoT oder Aerospace.'
          }, {
            name: 'Würth Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/würth_elektronik_logo.png',
            text: ''
          }, 
        ]
      },
      {
        name: "Economy Class Partner",
        supporters: [
          {
            name: 'Airtech',
            website: '',
            logo: 'assets/images/sponsors/ECP/airtech_logo.png',
            text: ''
          }, {
            name: 'BODO on stage',
            website: '',
            logo: 'assets/images/sponsors/ECP/bodo_on_stage_logo.png',
            text: ''
          }, {
            name: 'Busch Vakuum Solutions',
            website: '',
            logo: 'assets/images/sponsors/ECP/busch_vacuum_logo.png',
            text: ''
          }, {
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          }, {
            name: 'Emkay Plastics',
            website: 'https://emkayplastics.co.uk/',
            logo: 'assets/images/sponsors/ECP/emkay_logo.png',
            text: 'Our team has deep subjectmatter expertise in high-performance foam. Learn more about the people who will support you from brief through to delivery.'
          }, {
            name: 'F. REYHER Nchfg. GmbH & Co. KGaA',
            website: 'https://www.reyher.de/',
            logo: 'assets/images/sponsors/ECP/reyher_logo.png',
            text: 'Als Handelsunternehmen mit 130.000 verschiedenen Artikeln und einer Lieferverfügbarkeit von über 99 Prozent ist REYHER für Kunden sowohl aus der Industrie als auch dem Handel der C-Teile-Partner der Wahl.'
          }, {
            name: 'Fa. Bergmann',
            website: '',
            logo: 'assets/images/sponsors/ECP/bergmann_crivitz_logo.png',
            text: ''
          }, {
            name: 'Foxglove Technologies',
            website: '',
            logo: 'assets/images/sponsors/ECP/foxglove_logo.png',
            text: ''
          }, {
            name: 'IFAM',
            website: '',
            logo: 'assets/images/sponsors/ECP/fraunhofer_ifam.png',
            text: ''
          }, {
            name: 'Gegenstrom',
            website: '',
            logo: 'assets/images/sponsors/ECP/gegenstrom_logo.png',
            text: ''
          }, {
            name: 'IILS',
            website: '',
            logo: 'assets/images/sponsors/ECP/iils_logo.png',
            text: ''
          }, {
            name: 'Joachim Karstens Watercut',
            website: '',
            logo: 'assets/images/sponsors/ECP/joachim_karstens_watercut_logo.png',
            text: ''
          }, {
            name: 'Kurtz Ersa',
            website: '',
            logo: 'assets/images/sponsors/ECP/kurtz_ersa_logo.png',
            text: ''
          }, {
            name: 'Kvaser',
            website: 'https://kvaser.com/',
            logo: 'assets/images/sponsors/ECP/kvaser_logo.png',
            text: 'Kvaser is a global leader in M2M communication solutions for CAN, LIN and Automotive Ethernet. Renowned for precision, reliability and durability, Kvaser is a trusted supplier to customers in a wide range of industries.'
          }, {
            name: 'Loll Feinmechanik',
            website: '',
            logo: 'assets/images/sponsors/ECP/loll_feinmechanik_logo.png',
            text: ''
          }, {
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          }, {
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          }, {
            name: 'Norik',
            website: '',
            logo: 'assets/images/sponsors/ECP/norik_logo.png',
            text: ''
          }, {
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          },  {
            name: 'Saertex',
            website: '',
            logo: 'assets/images/sponsors/ECP/saertex_logo.png',
            text: ''
          },{
            name: 'Schulz Elektronik',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Hochschulpartner",
        supporters: [
           {
            name: 'Institut für Produktentwicklung und Konstruktionstechnik',
            website: '',
            logo: 'assets/images/sponsors/HSP/pkt_logo.png',
            text: ''
          }, {
            name: 'Institut für Werkstoffphysik und Werkstofftechnologie',
            website: '',
            logo: 'assets/images/sponsors/HSP/iww_Logo.png',
            text: ''
          }, {
            name: 'Studierendenwerkstatt',
            website: '',
            logo: 'assets/images/sponsors/HSP/studierendenwerkstatt.png',
            text: ''
          }, {
            name: 'iLAS',
            website: '',
            logo: 'assets/images/sponsors/HSP/institut_für_laser-und_anlagensystemtechnik.png',
            text: ''
          }, {
            name: 'TUTech Innovations',
            website: '',
            logo: 'assets/images/sponsors/HSP/tutech_logo.png',
            text: ''
          }, {
            name: 'Dennis Böttcher',
            website: '',
            logo: 'assets/images/sponsors/HSP/fwm_logo.png',
            text: ''
          }, {
            name: 'IHF',
            website: '',
            logo: 'assets/images/sponsors/HSP/institut_für_hochfrequenztechnik.png',
            text: ''
          }, {
            name: 'TUHH',
            website: '',
            logo: 'assets/images/sponsors/HSP/tuhh_logo.png',
            text: ''
          }, {
            name: 'Institut für Flugzeug Produktionstechnik',
            website: '',
            logo: 'assets/images/sponsors/HSP/ifpt_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Partner",
        supporters: [
         {
            name: '3D Connexion',
            website: '',
            logo: 'assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          }, {
            name: 'AISLER',
            website: 'https://aisler.net/en',
            logo: 'assets/images/sponsors/Partners/aisler.png',
            text: 'Agile electronics development needs more than just a factory - it needs a digital workflow that scales with your project. From the first prototype to large-scale PCB assembly, we help innovators master modern hardware development by handling the manufacturing complexity for them. It’s that simple: we take care of the logistics so you can focus on the engineering. We make hardware less hard. '
          }, {
            name: 'Almit',
            website: '',
            logo: 'assets/images/sponsors/Partners/almit_logo.png',
            text: ''
          }, {
            name: 'Analog Devices',
            website: '',
            logo: 'assets/images/sponsors/Partners/analog_devices_logo.png',
            text: ''
          }, {
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          }, {
            name: 'Bender',
            website: '',
            logo: 'assets/images/sponsors/Partners/bender_logo.png',
            text: ''
          }, {
            name: 'Beta LAYOUT GmbH',
            website: 'https://de.beta-layout.com/',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: 'Europa´s größter Hersteller von Leiterplatten-Prototypen.'
          }, {
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          }, {
            name: 'Cramer Composites',
            website: '',
            logo: 'assets/images/sponsors/Partners/cramer_composites_logo.png',
            text: ''
          }, {
            name: 'Das Teppichwerk',
            website: '',
            logo: 'assets/images/sponsors/Partners/das_teppichwerk_logo.png',
            text: ''
          }, {
            name: 'Davoscan',
            website: '',
            logo: 'assets/images/sponsors/Partners/davoscan_logo.png',
            text: ''
          }, {
            name: 'Driesen+Kern',
            website: '',
            logo: 'assets/images/sponsors/Partners/driesen+kern_logo.png',
            text: ''
          }, {
            name: 'FILCON Elektronik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/filcon_logo.png',
            text: ''
          }, {
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          }, {
            name: 'Harting',
            website: '',
            logo: 'assets/images/sponsors/Partners/harting_logo.png',
            text: ''
          }, {
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          },  {
            name: 'Hoberg und Driesch',
            website: '',
            logo: 'assets/images/sponsors/Partners/hoberg+driesch_logo.png',
            text: ''
          }, {
            name: 'Hoedtke.de',
            website: '',
            logo: 'assets/images/sponsors/Partners/hoedtke_logo.png',
            text: ''
          }, {
            name: 'Huber und Suhner',
            website: '',
            logo: 'assets/images/sponsors/Partners/huber+suhner_logo.png',
            text: ''
          }, {
            name: 'Idec Elektrotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/idec_elektrotechnik_logo.png',
            text: ''
          }, {
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          }, {
            name: 'Interfolia',
            website: 'https://www.interfolia.de/',
            logo: 'assets/images/sponsors/Partners/interfolia_logo.png',
            text: ''
          }, {
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          }, {
            name: 'Kölln',
            website: '',
            logo: 'assets/images/sponsors/Partners/koelln_logo.png',
            text: ''
          }, {
            name: 'Littelfuse',
            website: '',
            logo: 'assets/images/sponsors/Partners/Littelfuse.png',
            text: ''
          }, {
            name: 'Maack Feuerschutz',
            website: '',
            logo: 'assets/images/sponsors/Partners/maack_feuerschutz_logo.png',
            text: ''
          }, {
            name: 'Motorex',
            website: '',
            logo: 'assets/images/sponsors/Partners/motorex_logo.png',
            text: ''
          }, {
            name: 'Münch Chemie International GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/münch_chemie_logo.png',
            text: ''
          }, {
            name: 'Murata',
            website: '',
            logo: 'assets/images/sponsors/Partners/murata_logo.png',
            text: ''
          }, {
            name: 'Newhaven Display International',
            website: '',
            logo: 'assets/images/sponsors/Partners/newhaven_display_logo.png',
            text: ''
          }, {
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          }, {
            name: 'Norelem',
            website: 'https://www.norelem.de/de/',
            logo: 'assets/images/sponsors/Partners/norelem_logo.png',
            text: 'norelem steht für Qualität und jahrzehntelange Erfahrung im Maschinen- und Anlagenbau. Unsere ACADEMY vermittelt praxisnahes Wissen für Konstrukteure von heute und morgen. '
          }, {
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          }, {
            name: 'OTT',
            website: '',
            logo: 'assets/images/sponsors/Partners/ot_tornesch_logo.png',
            text: ''
          }, {
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          }, {
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          }, {
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          },  {
            name: 'Röders Tec',
            website: '',
            logo: 'assets/images/sponsors/Partners/röders_tec_logo.png',
            text: ''
          }, {
            name: 'Rogers Corporation',
            website: '',
            logo: 'assets/images/sponsors/Partners/rogers_corp_logo.png',
            text: ''
          },  {
            name: 'Schill+Seilacher Struktol',
            website: '',
            logo: 'assets/images/sponsors/Partners/schill+seilacher_logo.png',
            text: ''
          }, {
            name: 'Sensata Technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/sensata_logo.png',
            text: ''
          }, {
            name: 'Stahlhärterei Haupt',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlhärterei_haupt_logo.png',
            text: ''
          }, {
            name: 'TE Connectivity',
            website: '',
            logo: 'assets/images/sponsors/Partners/te_connectivity_logo.png',
            text: ''
          }, {
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          }, {
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          },  {
            name: 'Vectoflow',
            website: '',
            logo: 'assets/images/sponsors/Partners/vectoflow_logo.png',
            text: ''
          }, {
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          },  {
            name: 'VSM Abrasive',
            website: '',
            logo: 'assets/images/sponsors/Partners/vsm_abrasive_logo.png',
            text: ''
          }, {
            name: 'Zu Jeddeloh',
            website: '',
            logo: 'assets/images/sponsors/Partners/zu_jeddeloh_logo.png',
            text: ''
          },  
        ]
      },
      {
        name: "Gesundheitspartner",
        supporters: [
          {
            name: 'Techniker Krankenkasse',
            website: 'https://www.tk.de/techniker',
            logo: 'assets/images/sponsors/Gesundheitspartner/tk_logo.png',
            text: `Ansprechpartnerin: Manuela Bartels
            Hochschulberaterin
            Tel: 040 - 460 65 10 14 12
            Mobil: 01 51 - 18 05 28 41
            E-Mail: manuela.bartels@tk.de`
          },
        ]
      }
    ]
  },{
    season: '2025',
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience", dafür steht NXP. Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },
        ]
      },
      {
        name: "First Class Partner",
        supporters: [
          {
            name: 'AVL',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          }, {
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          }, {
            name: 'Institut für Produktionsmanagement und -technik',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_b9c1d4bddd344e64967e2c98a936e656~mv2.png',
            text: ''
          }, {
            name: 'HF Group',
            website: '',
            logo: 'assets/images/sponsors/FCP/hf_group_logo.png',
            text: ''
          }, {
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_97d7c3c89d8241efa2ea094377f6d5ac~mv2.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          }, {
            name: 'Altium',
            website: 'assets/images/sponsors/FCP/altium_logo.png',
            logo: 'https://static.wixstatic.com/media/673d94_a478cae83bb54f65b8be3c1882b58787~mv2.png',
            text: 'Die Firma Altium entwickelt und verkauft CAD-Tools im Bereich Elektronikdesign. Mit dem Ziel, den gesamten Designprozess in einer bedienerfreundlichen und bezahlbaren Anwendung zusammenzuführen, wird fortlaufend an der Elektronikdesign-Umgebung Altium Designer weiterentwickelt. Zuletzt wurde sie durch den Online Service Altium 365 ergänzt, welcher bereits seit 2021, kurz nach seinem Release, dem e-gnition Team in der Zusammenarbeit und im Datenmanagement weiterhilft. Zusammen mit AltiumLive, dem internetbasierten Portal für professionelle Elektronikdesigner, verbindet das Unternehmen Menschen und Technologie. Mit seinen Anwendungen schafft Altium eine Art Ökosystem, das weit über die Elektronikentwicklung hinausgeht. Sie schließen die Lücke zwischen der Design- und Fertigungsphase eines Produkts und die Lücke zwischen Menschen und Technologie.'
          }, {
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: 'Der Bereich des Produktionsmanagements befasst sich im Besonderen mit der organisatorischen und informationstechnischen Gestaltung von Produktionsabläufen, wohingegen der Bereich der Produktionstechnik innovative Methoden und Mittel zur spanenden Bearbeitung moderner industrieller Werkstoffe entwickelt.'
          }, {
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: 'Wir vom Autohaus Meyer vertreten die Marken Volkswagen, Skoda, AudiService sowie VW Nutzfahrzeuge ServicePlus und zählen zu den modernsten Autohäusern im Landkreis Harburg. Sie finden uns zwischen Hamburg und Bremen direkt an der B75 vor Tostedt. Auf einer Gesamtfläche von über 25.000 Quadratmetern präsentieren wir ca. 600 Neu- und Gebrauchtwagen der Marken Volkswagen und Skoda. Acht examinierte Verkaufsberater helfen Ihnen dabei, das richtige Auto aus der umfassenden Modellpalette zu finden. Für Servicearbeiten stehen acht Kundendienstberater mit drei Dialogannahmen und 15 Monteuren zur Verfügung. Von der Fahrzeugaufbereitung bis hin zu kompliziertesten Rahmenschäden im Karosseriebereich decken wir die gesamte Servicebreite ab.'
          }, {
            name: 'LMT Tools GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/lmt_tools_logo.png',
            text: 'Seit über 100 Jahren stehen die Spezialisten des heutigen Unternehmens LMT Tools für höchste Qualität und Präzision im Werkzeugbau. LMT ist weltweit mit führend bei der Herstellung von Wälzfräsern für Zahnräder und von Rollköpfen für die Gewindeproduktion. Das Unternehmen wurde 1908 gegründet.'
          }, {
            name: 'Riedel',
            website: '',
            logo: 'assets/images/sponsors/FCP/riedel_logo.png',
            text: ''
          }, {
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: 'Das familiengeführte Unternehmen Kulina Zerspanungstechnik und Maschinenbau GmbH kann auf eine 50 jährige Geschichte zurückblicken. Die Kulina GmbH ist ein innovatives Unternehmen und ein leistungsstarker Partner für Bauteile mit höchsten Qualitätsansprüchen.'
          }, {
            name: 'AVL Racetech',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl_racetech.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          }, {
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise“, in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          },
        ]
      },
      {
        name: "Business Class Partner",
        supporters: [
          {
            name: 'Fraunhofer ISIT',
            website: '',
            logo: 'assets/images/sponsors/BCP/fraunhofer_isit.png',
            text: ''
          }, {
            name: 'Vector',
            website: '',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: ''
          }, {
            name: 'Würth Elektronik',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_234b429acb6744c5b95d9b780ee4f054~mv2.png',
            text: ''
          }, {
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          }, {
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          }, {
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          }, {
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          }, {
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          }, {
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          }, {
            name: 'ATP Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/atp_elektronik_logo.png',
            text: ''
          }, {
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          }, {
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          }, {
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Economy Class Partner",
        supporters: [
          {
            name: 'Foxglove Technologies',
            website: '',
            logo: 'assets/images/sponsors/ECP/foxglove_logo.png',
            text: ''
          }, {
            name: 'Airtech',
            website: '',
            logo: 'assets/images/sponsors/ECP/airtech_logo.png',
            text: ''
          }, {
            name: 'Mankiewicz',
            website: '',
            logo: 'assets/images/sponsors/ECP/mankiewicz_logo.png',
            text: ''
          }, {
            name: 'TER HELL & CO. GMBH',
            website: '',
            logo: 'assets/images/sponsors/ECP/ter_chemicals_logo.png',
            text: ''
          }, {
            name: 'DESY',
            website: '',
            logo: 'assets/images/sponsors/ECP/desy_logo.png',
            text: ''
          }, {
            name: 'CANchecked GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/canchecked_logo.png',
            text: ''
          }, {
            name: 'deutsche adp F + Z',
            website: '',
            logo: 'assets/images/sponsors/ECP/deutsche_adp_logo.png',
            text: ''
          }, {
            name: 'IFAM',
            website: '',
            logo: 'assets/images/sponsors/ECP/fraunhofer_ifam.png',
            text: ''
          }, {
            name: 'Schulz Electronic',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          }, {
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          }, {
            name: 'Gegenstrom',
            website: '',
            logo: 'assets/images/sponsors/ECP/gegenstrom_logo.png',
            text: ''
          }, {
            name: 'BODO on stage',
            website: '',
            logo: 'assets/images/sponsors/ECP/bodo_on_stage_logo.png',
            text: ''
          }, {
            name: 'Dräger Safety AG & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/dräger_logo.png',
            text: ''
          }, {
            name: 'Schroth',
            website: '',
            logo: 'assets/images/sponsors/ECP/schroth_logo.png',
            text: ''
          }, {
            name: 'Kluge Engineering',
            website: '',
            logo: 'assets/images/sponsors/ECP/Kluge_Engineering_logo.png',
            text: ''
          }, {
            name: 'Kleineberg GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/kleineberg_logo.png',
            text: ''
          }, {
            name: 'Zeiss',
            website: '',
            logo: 'assets/images/sponsors/ECP/zeiss_logo.png',
            text: ''
          }, {
            name: 'Busch Vakuum Solutions',
            website: '',
            logo: 'assets/images/sponsors/ECP/busch_vacuum_logo.png',
            text: ''
          }, {
            name: 'Schütz GmbH & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/schütz_logo.png',
            text: ''
          }, {
            name: 'JUMPtec GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/jumptec_logo.png',
            text: ''
          }, {
            name: 'F. REYHER Nchfg. GmbH & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/reyher_logo.png',
            text: ''
          }, {
            name: 'ESSKA.de GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/esska_logo.png',
            text: ''
          }, {
            name: 'Huber+Suhner',
            website: '',
            logo: 'assets/images/sponsors/ECP/huber+suhner_logo.png',
            text: ''
          }, {
            name: 'Weller Tools GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/weller_logo.png',
            text: ''
          }, {
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          }, {
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          }, {
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Hochschulpartner",
        supporters: [
          {
            name: 'Institut Elektrische Energiesysteme und Automation',
            website: '',
            logo: 'assets/images/sponsors/HSP/ieet_logo.png',
            text: ''
          }, {
            name: 'Institut für Produktentwicklung und Konstruktionstechnik',
            website: '',
            logo: 'assets/images/sponsors/HSP/pkt_logo.png',
            text: ''
          }, {
            name: 'Institut für Werkstoffphysik und Werkstofftechnologie',
            website: '',
            logo: 'assets/images/sponsors/HSP/iww_Logo.png',
            text: ''
          }, {
            name: 'Heineking Cord und Ralf Dönni',
            website: '',
            logo: 'assets/images/sponsors/HSP/fwm_logo.png',
            text: ''
          }, {
            name: 'Studierendenwerkstatt',
            website: '',
            logo: 'assets/images/sponsors/HSP/studierendenwerkstatt.png',
            text: ''
          }, {
            name: 'iLAS',
            website: '',
            logo: 'assets/images/sponsors/HSP/institut_für_laser-und_anlagensystemtechnik.png',
            text: ''
          }, {
            name: 'TUTech Innovations',
            website: '',
            logo: 'assets/images/sponsors/HSP/tutech_logo.png',
            text: ''
          },
          {
            name: 'IHF',
            website: '',
            logo: 'assets/images/sponsors/HSP/institut_für_hochfrequenztechnik.png',
            text: ''
          }, {
            name: 'Kernwerkstatt Herr Duering',
            website: '',
            logo: 'assets/images/sponsors/HSP/kernwerkstatt_logo.png',
            text: ''
          }, {
            name: 'TUHH',
            website: '',
            logo: 'assets/images/sponsors/HSP/tuhh_logo.png',
            text: ''
          }, {
            name: 'Institut für Flugzeug Produktionstechnik',
            website: '',
            logo: 'assets/images/sponsors/HSP/ifpt_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Partner",
        supporters: [
          {
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          }, {
            name: 'AISLER',
            website: '',
            logo: 'assets/images/sponsors/Partners/aisler.png',
            text: ''
          }, {
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          }, {
            name: 'Hirschmann',
            website: '',
            logo: 'assets/images/sponsors/Partners/hirschmann_logo.png',
            text: ''
          }, {
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          }, {
            name: 'Motorex',
            website: '',
            logo: 'assets/images/sponsors/Partners/motorex_logo.png',
            text: ''
          }, {
            name: 'Bender',
            website: '',
            logo: 'assets/images/sponsors/Partners/bender_logo.png',
            text: ''
          }, {
            name: 'CSS Electronics',
            website: '',
            logo: 'assets/images/sponsors/Partners/css_electronics_logo.png',
            text: ''
          }, {
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          }, {
            name: 'Murata',
            website: '',
            logo: 'assets/images/sponsors/Partners/murata_logo.png',
            text: ''
          }, {
            name: 'Röders Tec',
            website: '',
            logo: 'assets/images/sponsors/Partners/röders_tec_logo.png',
            text: ''
          }, {
            name: 'Hoberg und Driesch',
            website: '',
            logo: 'assets/images/sponsors/Partners/hoberg+driesch_logo.png',
            text: ''
          }, {
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          }, {
            name: 'Almit',
            website: '',
            logo: 'assets/images/sponsors/Partners/almit_logo.png',
            text: ''
          }, {
            name: '3D|Core GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/3dcore_logo.png',
            text: ''
          }, {
            name: 'Rogers Corporation',
            website: '',
            logo: 'assets/images/sponsors/Partners/rogers_corp_logo.png',
            text: ''
          }, {
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          }, {
            name: 'TE Connectivity',
            website: '',
            logo: 'assets/images/sponsors/Partners/te_connectivity_logo.png',
            text: ''
          }, {
            name: 'Rudolph Sievers GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/rudolf_sievers_logo.png',
            text: ''
          }, {
            name: 'FILCON Elektronik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/filcon_logo.png',
            text: ''
          }, {
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          }, {
            name: 'LEM',
            website: '',
            logo: 'assets/images/sponsors/Partners/lem_logo.png',
            text: ''
          }, {
            name: 'Analog Devices',
            website: '',
            logo: 'assets/images/sponsors/Partners/analog_devices_logo.png',
            text: ''
          }, {
            name: 'Textreme',
            website: '',
            logo: 'assets/images/sponsors/Partners/textreme_logo.png',
            text: ''
          }, {
            name: 'Metall Jobst',
            website: '',
            logo: 'assets/images/sponsors/Partners/metall_jobst_logo.png',
            text: ''
          }, {
            name: '3D Connexion',
            website: '',
            logo: 'assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          }, {
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          }, {
            name: 'Schill+Seilacher Struktol',
            website: '',
            logo: 'assets/images/sponsors/Partners/schill+seilacher_logo.png',
            text: ''
          }, {
            name: 'Münch Chemie International GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/münch_chemie_logo.png',
            text: ''
          }, {
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          }, {
            name: 'Smalley Europe SAS',
            website: '',
            logo: 'assets/images/sponsors/Partners/smalley_logo.png',
            text: ''
          }, {
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          }, {
            name: 'Norelem',
            website: '',
            logo: 'assets/images/sponsors/Partners/norelem_logo.png',
            text: ''
          }, {
            name: 'Idec Elektrotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/idec_elektrotechnik_logo.png',
            text: ''
          }, {
            name: 'Variohm',
            website: '',
            logo: 'assets/images/sponsors/Partners/variohm_logo.png',
            text: ''
          }, {
            name: 'TERZ Industrial Electronics GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/terz_industrial_logo.png',
            text: ''
          }, {
            name: 'Hoedtke.de',
            website: '',
            logo: 'assets/images/sponsors/Partners/hoedtke_logo.png',
            text: ''
          }, {
            name: 'm2m Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/m2m_logo.png',
            text: ''
          }, {
            name: 'Isabellenhütte',
            website: '',
            logo: 'assets/images/sponsors/Partners/isabellenhütte_logo.png',
            text: ''
          }, {
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          }, {
            name: 'Sensata Technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/sensata_logo.png',
            text: ''
          }, {
            name: 'Davoscan',
            website: '',
            logo: 'assets/images/sponsors/Partners/davoscan_logo.png',
            text: ''
          }, {
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          }, {
            name: 'Febrotec Federn GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/febrotec_logo.png',
            text: ''
          }, {
            name: 'Sandtler GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/sandtler_logo.png',
            text: ''
          }, {
            name: 'arnotec GmbH',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_c5682a7c3d33476ca7f1abd9b7742a62~mv2.png',
            text: ''
          }, {
            name: 'FormFutura',
            website: '',
            logo: 'assets/images/sponsors/Partners/formfutura_logo.png',
            text: ''
          }, {
            name: 'Beta LAYOUT GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          }, {
            name: 'Köpp',
            website: '',
            logo: 'assets/images/sponsors/Partners/köpp_logo.png',
            text: ''
          }, {
            name: 'Stahlbus',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlbus_logo.png',
            text: ''
          }, {
            name: 'Sverdrupsteel',
            website: '',
            logo: 'assets/images/sponsors/Partners/sverdrup_steel_logo.png',
            text: ''
          }, {
            name: 'VSM Abrasive',
            website: '',
            logo: 'assets/images/sponsors/Partners/vsm_abrasive_logo.png',
            text: ''
          }, {
            name: 'Littelfuse',
            website: '',
            logo: 'assets/images/sponsors/Partners/Littelfuse.png',
            text: ''
          }, {
            name: 'OTT',
            website: '',
            logo: 'assets/images/sponsors/Partners/ot_tornesch_logo.png',
            text: ''
          }, {
            name: 'LTN Servotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ltn_servotechnik.png',
            text: ''
          }, {
            name: 'CosmicSports',
            website: '',
            logo: 'assets/images/sponsors/Partners/cosmicsports_logo.png',
            text: ''
          }, {
            name: 'Conrad',
            website: '',
            logo: 'assets/images/sponsors/Partners/conrad_logo.png',
            text: ''
          }, {
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          }, {
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Gesundheitspartner",
        supporters: [
          {
            name: 'Techniker Krankenkasse',
            website: '',
            logo: 'assets/images/sponsors/Gesundheitspartner/tk_logo.png',
            text: `Ansprechpartnerin: Manuela Bartels
            Hochschulberaterin
            Tel: 040 - 460 65 10 14 12
            Mobil: 01 51 - 18 05 28 41
            E-Mail: manuela.bartels@tk.de`
          },
        ]
      }
    ]
  },
  {
    season: '2024',
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience",dafür steht NXP.Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },{
            name: 'Tandler',
            website: '',
            logo: 'assets/images/sponsors/RFCP/tandler_logo.png',
            text: ''
          }
        ]
      },
      {
        name: "First Class Partner",
        supporters: [
          {
            name: 'AVL',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          }, {
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          }, {
            name: 'Institut für Produktionsmanagement und -technik',
            website: '',
            logo: 'assets/images/sponsors/FCP/impt_logo.png',
            text: ''
          }, {
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'assets/images/sponsors/FCP/hereon_logo.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          }, {
            name: 'Altium',
            website: '',
            logo: 'assets/images/sponsors/FCP/altium_logo.png',
            text: 'Die Firma Altium entwickelt und verkauft CAD-Tools im Bereich Elektronikdesign. Mit dem Ziel, den gesamten Designprozess in einer bedienerfreundlichen und bezahlbaren Anwendung zusammenzuführen, wird fortlaufend an der Elektronikdesign-Umgebung Altium Designer weiterentwickelt. Zuletzt wurde sie durch den Online Service Altium 365 ergänzt, welcher bereits seit 2021, kurz nach seinem Release, dem e-gnition Team in der Zusammenarbeit und im Datenmanagement weiterhilft. Zusammen mit AltiumLive, dem internetbasierten Portal für professionelle Elektronikdesigner, verbindet das Unternehmen Menschen und Technologie. Mit seinen Anwendungen schafft Altium eine Art Ökosystem, das weit über die Elektronikentwicklung hinausgeht. Sie schließen die Lücke zwischen der Design- und Fertigungsphase eines Produkts und die Lücke zwischen Menschen und Technologie.'
          }, {
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: 'Der Bereich des Produktionsmanagements befasst sich im Besonderen mit der organisatorischen und informationstechnischen Gestaltung von Produktionsabläufen, wohingegen der Bereich der Produktionstechnik innovative Methoden und Mittel zur spanenden Bearbeitung moderner industrieller Werkstoffe entwickelt.'
          }, {
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: 'Wir vom Autohaus Meyer vertreten die Marken Volkswagen, Skoda, AudiService sowie VW Nutzfahrzeuge ServicePlus und zählen zu den modernsten Autohäusern im Landkreis Harburg. Sie finden uns zwischen Hamburg und Bremen direkt an der B75 vor Tostedt. Auf einer Gesamtfläche von über 25.000 Quadratmetern präsentieren wir ca. 600 Neu- und Gebrauchtwagen der Marken Volkswagen und Skoda. Acht examinierte Verkaufsberater helfen Ihnen dabei, das richtige Auto aus der umfassenden Modellpalette zu finden. Für Servicearbeiten stehen acht Kundendienstberater mit drei Dialogannahmen und 15 Monteuren zur Verfügung. Von der Fahrzeugaufbereitung bis hin zu kompliziertesten Rahmenschäden im Karosseriebereich decken wir die gesamte Servicebreite ab.'
          }, {
            name: 'LMT Tools GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/lmt_tools_logo.png',
            text: 'Seit über 100 Jahren stehen die Spezialisten des heutigen Unternehmens LMT Tools für höchste Qualität und Präzision im Werkzeugbau. LMT ist weltweit mit führend bei der Herstellung von Wälzfräsern für Zahnräder und von Rollköpfen für die Gewindeproduktion. Das Unternehmen wurde 1908 gegründet.'
          },  {
            name: 'Riedel',
            website: '',
            logo: 'assets/images/sponsors/FCP/riedel_logo.png',
            text: ''
          }, {
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: 'Das familiengeführte Unternehmen Kulina Zerspanungstechnik und Maschinenbau GmbH kann auf eine 50 jährige Geschichte zurückblicken. Die Kulina GmbH ist ein innovatives Unternehmen und ein leistungsstarker Partner für Bauteile mit höchsten Qualitätsansprüchen.'
          }, {
            name: 'AVL Racetech',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl_racetech.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          }, {
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise", in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          }, {
            name: 'WiTTE',
            website: '',
            logo: 'assets/images/sponsors/FCP/witte_logo.png',
            text: ''
          }
        ]
      },
      {
        name: "Business Class Partner",
        supporters: [
         {
            name: 'HF Group',
            website: '',
            logo: 'assets/images/sponsors/FCP/hf_group_logo.png',
            text: ''
        }, {
            name: 'Bosch',
            website: '',
            logo: 'assets/images/sponsors/BCP/bosch_logo.png',
            text: ''
          },{
            name: 'Mankiewicz',
            website: '',
            logo: 'assets/images/sponsors/ECP/mankiewicz_logo.png',
            text: ''
          },{
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          },{
            name: 'DESY',
            website: '',
            logo: 'assets/images/sponsors/ECP/desy_logo.png',
            text: ''
          },{
            name: 'Vector',
            website: '',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: ''
          }, {
            name: 'Würth Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/würth_elektronik_logo.png',
            text: ''
          }, {
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          }, {
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          }, {
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          }, {
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          }, {
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          }, {
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          }, {
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          },{
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          },{
            name: 'Resonic',
            website: '',
            logo: 'assets/images/sponsors/BCP/resonic_logo.png',
            text: ''
          },{
            name: 'ATP Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/atp_elektronik_logo.png',
            text: ''
          },  {
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          },{
            name: 'Kleineberg GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/kleineberg_logo.png',
            text: ''
          },{
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          },{
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          },{
            name: 'Ätzwerk',
            website: '',
            logo: 'assets/images/sponsors/BCP/ätzwerk_logo.png',
            text: ''
          },{
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Economy Class Partner",
        supporters: [
          {
            name: 'Huber+Suhner',
            website: '',
            logo: 'assets/images/sponsors/ECP/huber+suhner_logo.png',
            text: ''
          },{
            name: 'Busch Vakuum Solutions',
            website: '',
            logo: 'assets/images/sponsors/ECP/busch_vacuum_logo.png',
            text: ''
          },{
            name: 'Zeiss',
            website: '',
            logo: 'assets/images/sponsors/ECP/zeiss_logo.png',
            text: ''
          },{
            name: 'MB Design',
            website: '',
            logo: 'assets/images/sponsors/BCP/mbdesign_logo.png',
            text: ''
          },{
            name: 'PTC',
            website: '',
            logo: 'assets/images/sponsors/ECP/ptc_logo.png',
            text: ''
          },{
            name: 'Schroth',
            website: '',
            logo: 'assets/images/sponsors/ECP/schroth_logo.png',
            text: ''
          },{
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          },{
            name: 'KL Raudies',
            website: '',
            logo: 'assets/images/sponsors/ECP/raudies_logo.png',
            text: ''
          },{
            name: 'Basler',
            website: '',
            logo: 'assets/images/sponsors/ECP/basler_logo.png',
            text: ''
          },{
            name: 'Kurtz Ersa',
            website: '',
            logo: 'assets/images/sponsors/ECP/kurtz_ersa_logo.png',
            text: ''
          },{
            name: 'Hobum Oleochemicals GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/hobum_logo.png',
            text: ''
          },{
            name: 'Schreiber',
            website: '',
            logo: 'assets/images/sponsors/ECP/schreiber_logo.png',
            text: ''
          },{
            name: 'Kontron',
            website: '',
            logo: 'assets/images/sponsors/ECP/kontron_logo.png',
            text: ''
          },{
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          },{
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          },{
            name: 'Bergmann',
            website: '',
            logo: 'assets/images/sponsors/ECP/bergmann_crivitz_logo.png',
            text: ''
          },{
            name: 'deutsche adp F + Z',
            website: '',
            logo: 'assets/images/sponsors/ECP/deutsche_adp_logo.png',
            text: ''
          },{
            name: 'Saertex',
            website: '',
            logo: 'assets/images/sponsors/ECP/saertex_logo.png',
            text: ''
          },{
            name: 'Schulz Electronic',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          },{
            name: 'Calspan',
            website: '',
            logo: 'assets/images/sponsors/ECP/calspan_logo.png',
            text: ''
          },{
            name: 'BODO Möller Chemie GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/bodo_möller_logo.png',
            text: ''
          },{
            name: 'HellermannTyton',
            website: '',
            logo: 'assets/images/sponsors/ECP/hellermann_tyton_logo.png',
            text: ''
          },{
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          },
        ]
      },
      {
        name: "Partner",
        supporters: [
          {
            name: 'Brainboxes',
            website: '',
            logo: 'assets/images/sponsors/Partners/brainboxes_logo.png',
            text: ''
          },{
            name: 'Gegenstrom',
            website: '',
            logo: 'assets/images/sponsors/ECP/gegenstrom_logo.png',
            text: ''
          },{
            name: 'Maack Feuerschutz',
            website: '',
            logo: 'assets/images/sponsors/Partners/maack_feuerschutz_logo.png',
            text: ''
          },{
            name: 'ODU',
            website: '',
            logo: 'assets/images/sponsors/BCP/odu_logo.png',
            text: ''
          },{
            name: 'Skarke',
            website: '',
            logo: 'assets/images/sponsors/Partners/skarke_logo.png',
            text: ''
          },{
            name: 'Röchling',
            website: '',
            logo: 'assets/images/sponsors/Partners/röchling_logo.png',
            text: ''
          },{
            name: 'Foxfactory',
            website: '',
            logo: 'assets/images/sponsors/Partners/foxfactory_logo.png',
            text: ''
          },{
            name: '3D|Core GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/3dcore_logo.png',
            text: ''
          },{
            name: 'Textreme',
            website: '',
            logo: 'assets/images/sponsors/Partners/textreme_logo.png',
            text: ''
          }, {
            name: 'Vliesstoff Kasper',
            website: '',
            logo: 'assets/images/sponsors/Partners/vliesstoff_kasper_logo.png',
            text: ''
          }, {
            name: 'Eukatec',
            website: '',
            logo: 'assets/images/sponsors/Partners/eukatec_logo.png',
            text: ''
          },{
            name: 'Borco Höhns',
            website: '',
            logo: 'assets/images/sponsors/Partners/borco_höhns_logo.png',
            text: ''
          }, {
            name: 'Arcus',
            website: '',
            logo: 'assets/images/sponsors/Partners/arcus_logo.png',
            text: ''
          },{
            name: 'Weicon',
            website: '',
            logo: 'assets/images/sponsors/Partners/weicon_logo.png',
            text: ''
          }, {
            name: 'Panasonic',
            website: '',
            logo: 'assets/images/sponsors/Partners/panasonic_logo.png',
            text: ''
          }, {
            name: 'Henkel',
            website: '',
            logo: 'assets/images/sponsors/Partners/henkel_logo.png',
            text: ''
          }, {
            name: 'Analog Devices',
            website: '',
            logo: 'assets/images/sponsors/Partners/analog_devices_logo.png',
            text: ''
          },{
            name: 'EBM-Papst',
            website: '',
            logo: 'assets/images/sponsors/Partners/ebm_papst_logo.png',
            text: ''
          },{
            name: 'AISLER',
            website: '',
            logo: 'assets/images/sponsors/Partners/aisler.png',
            text: ''
          }, {
            name: 'Harting',
            website: '',
            logo: 'assets/images/sponsors/Partners/harting_logo.png',
            text: ''
          },{
            name: 'Norelem',
            website: '',
            logo: 'assets/images/sponsors/Partners/norelem_logo.png',
            text: ''
          }, {
            name: 'Münch Chemie International GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/münch_chemie_logo.png',
            text: ''
          },{
            name: 'Murata',
            website: '',
            logo: 'assets/images/sponsors/Partners/murata_logo.png',
            text: ''
          },{
            name: 'Littelfuse',
            website: '',
            logo: 'assets/images/sponsors/Partners/Littelfuse.png',
            text: ''
          },{
            name: 'Dräger Safety AG & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/dräger_logo.png',
            text: ''
          },{
            name: 'Weller Tools GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/weller_logo.png',
            text: ''
          },{
            name: 'F. REYHER Nchfg. GmbH & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/reyher_logo.png',
            text: ''
          },{
            name: 'Distrelec',
            website: '',
            logo: 'assets/images/sponsors/Partners/distrelec_logo.png',
            text: ''
          },{
            name: 'EOZ',
            website: '',
            logo: 'assets/images/sponsors/Partners/eoz_logo.png',
            text: ''
          },{
            name: 'Davoscan',
            website: '',
            logo: 'assets/images/sponsors/Partners/davoscan_logo.png',
            text: ''
          },{
            name: 'European thermodynamics Limited',
            website: '',
            logo: 'assets/images/sponsors/Partners/european_thermodynamics_logo.png',
            text: ''
          },{
            name: 'Bossard',
            website: '',
            logo: 'assets/images/sponsors/Partners/bossard_logo.png',
            text: ''
          },{
            name: 'Idec Elektrotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/idec_elektrotechnik_logo.png',
            text: ''
          },{
            name: 'Almit',
            website: '',
            logo: 'assets/images/sponsors/Partners/almit_logo.png',
            text: ''
          },{
            name: 'AS Electronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/as_elektronik_logo.png',
            text: ''
          },{
            name: 'Isabellenhütte',
            website: '',
            logo: 'assets/images/sponsors/Partners/isabellenhütte_logo.png',
            text: ''
          },{
            name: 'Köpp',
            website: '',
            logo: 'assets/images/sponsors/Partners/köpp_logo.png',
            text: ''
          },{
            name: 'Interfolia',
            website: '',
            logo: 'assets/images/sponsors/Partners/interfolia_logo.png',
            text: ''
          },{
            name: 'Sensata Technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/sensata_logo.png',
            text: ''
          },{
            name: 'OTT',
            website: '',
            logo: 'assets/images/sponsors/Partners/ot_tornesch_logo.png',
            text: ''
          },{
            name: 'VSM Abrasive',
            website: '',
            logo: 'assets/images/sponsors/Partners/vsm_abrasive_logo.png',
            text: ''
          },{
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          },{
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          },{
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          },{
            name: 'Hohnen',
            website: '',
            logo: 'assets/images/sponsors/Partners/hohnen_logo.png',
            text: ''
          },{
            name: 'CMC Kleibetechnik',
            website: '',
            logo: 'assets/images/sponsors/Partners/cmc_klebetechnik_logo.png',
            text: ''
          },{
            name: 'Beta LAYOUT GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Das Filament',
            website: '',
            logo: 'assets/images/sponsors/Partners/dasfilament_logo.png',
            text: ''
          },{
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          },{
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          },{
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          },{
            name: 'Nord-Lock',
            website: '',
            logo: 'assets/images/sponsors/Partners/nord_lock_logo.png',
            text: ''
          },{
            name: 'Jockel',
            website: '',
            logo: 'assets/images/sponsors/Partners/jockel_logo.png',
            text: ''
          },{
            name: 'LEM',
            website: '',
            logo: 'assets/images/sponsors/Partners/lem_logo.png',
            text: ''
          },{
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          },{
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          },{
            name: 'H&R',
            website: '',
            logo: 'assets/images/sponsors/Partners/hundr_logo.png',
            text: ''
          },{
            name: 'Althen',
            website: '',
            logo: 'assets/images/sponsors/Partners/althen_logo.png',
            text: ''
          },{
            name: 'Böhme',
            website: '',
            logo: 'assets/images/sponsors/Partners/böhme_logo.png',
            text: ''
          },{
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          },{
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          },{
            name: 'Bürklin Elektronik',
            website: '',
            logo: 'assets/images/sponsors/Partners/bürklin_logo.png',
            text: ''
          },{
            name: 'SIBA',
            website: '',
            logo: 'assets/images/sponsors/Partners/siba_logo.png',
            text: ''
          },{
            name: 'Stahlbus',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlbus_logo.png',
            text: ''
          },{
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          },{
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          },{
            name: 'Bender',
            website: '',
            logo: 'assets/images/sponsors/Partners/bender_logo.png',
            text: ''
          },

        ]
      }, 
      {
        name: "Supplier",
        supporters: [
          {
            name: 'IFM',
            website: '',
            logo: 'assets/images/sponsors/Partners/ifm_logo.png',
            text: ''
          },{
            name: 'Waagen Sander',
            website: '',
            logo: 'assets/images/sponsors/Partners/waagen_sander_logo.png',
            text: ''
          },{
            name: 'Smalley Europe SAS',
            website: '',
            logo: 'assets/images/sponsors/Partners/smalley_logo.png',
            text: ''
          },{
            name: 'Suter Kunststoffe AG',
            website: '',
            logo: 'assets/images/sponsors/Partners/suter_logo.png',
            text: ''
          },{
            name: 'Sandtler GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/sandtler_logo.png',
            text: ''
          },{
            name: 'Rudolph Sievers GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/rudolf_sievers_logo.png',
            text: ''
          },{
            name: 'Metall Jobst',
            website: '',
            logo: 'assets/images/sponsors/Partners/metall_jobst_logo.png',
            text: ''
          },{
            name: 'Blässinger Gruppe',
            website: '',
            logo: 'assets/images/sponsors/Partners/blässinger_logo.png',
            text: ''
          },{
            name: 'Keizer',
            website: '',
            logo: 'assets/images/sponsors/Partners/keizer_logo.png',
            text: ''
          },{
            name: 'Hansemold',
            website: '',
            logo: 'assets/images/sponsors/Partners/hansemold_logo.png',
            text: ''
          },{
            name: 'IBH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ibh_logo.png',
            text: ''
          },{
            name: 'FILCON Elektronik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/filcon_logo.png',
            text: ''
          },{
            name: 'Conrad',
            website: '',
            logo: 'assets/images/sponsors/Partners/conrad_logo.png',
            text: ''
          },{
            name: 'Variohm',
            website: '',
            logo: 'assets/images/sponsors/Partners/variohm_logo.png',
            text: ''
          },{
            name: 'LED-Tec.de',
            website: '',
            logo: 'assets/images/sponsors/Partners/led_tec_logo.png',
            text: ''
          },{
            name: 'Bourns',
            website: '',
            logo: 'assets/images/sponsors/Partners/bourns_logo.png',
            text: ''
          },{
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          },{
            name: 'General Sealantis',
            website: '',
            logo: 'assets/images/sponsors/Partners/general_sealants_logo.png',
            text: ''
          },{
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          },{
            name: 'LTN Servotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ltn_servotechnik.png',
            text: ''
          },{
            name: '3D Connexion',
            website: '',
            logo: 'assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          },{
            name: 'Hirschmann',
            website: '',
            logo: 'assets/images/sponsors/Partners/hirschmann_logo.png',
            text: ''
          },
        ]
      },{
        name: "Gesundheitspartner",
        supporters: [
          {
            name: 'Techniker Krankenkasse',
            website: '',
            logo: 'assets/images/sponsors/Gesundheitspartner/tk_logo.png',
            text: `Ansprechpartnerin: Manuela Bartels
            Hochschulberaterin
            Tel: 040 - 460 65 10 14 12
            Mobil: 01 51 - 18 05 28 41
            E-Mail: manuela.bartels@tk.de`
          },
        ]
      }
    ]
  },{
    season: '2023',
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience",dafür steht NXP.Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },{
            name: 'Tandler',
            website: '',
            logo: 'assets/images/sponsors/RFCP/tandler_logo.png',
            text: ''
          }
        ]
      },
      {
        name: "First Class Partner",
        supporters: [
          {
            name: 'Riedel',
            website: '',
            logo: 'assets/images/sponsors/FCP/riedel_logo.png',
            text: ''
          },{
            name: '3D ICOM',
            website: '',
            logo: 'assets/images/sponsors/FCP/3d_icom_logo.png',
            text: ''
          },{
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: 'Wir vom Autohaus Meyer vertreten die Marken Volkswagen, Skoda, AudiService sowie VW Nutzfahrzeuge ServicePlus und zählen zu den modernsten Autohäusern im Landkreis Harburg. Sie finden uns zwischen Hamburg und Bremen direkt an der B75 vor Tostedt. Auf einer Gesamtfläche von über 25.000 Quadratmetern präsentieren wir ca. 600 Neu- und Gebrauchtwagen der Marken Volkswagen und Skoda. Acht examinierte Verkaufsberater helfen Ihnen dabei, das richtige Auto aus der umfassenden Modellpalette zu finden. Für Servicearbeiten stehen acht Kundendienstberater mit drei Dialogannahmen und 15 Monteuren zur Verfügung. Von der Fahrzeugaufbereitung bis hin zu kompliziertesten Rahmenschäden im Karosseriebereich decken wir die gesamte Servicebreite ab.'
          },{
            name: 'Institut für Produktionsmanagement und -technik',
            website: '',
            logo: 'assets/images/sponsors/FCP/impt_logo.png',
            text: ''
          },{
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: 'Das familiengeführte Unternehmen Kulina Zerspanungstechnik und Maschinenbau GmbH kann auf eine 50 jährige Geschichte zurückblicken. Die Kulina GmbH ist ein innovatives Unternehmen und ein leistungsstarker Partner für Bauteile mit höchsten Qualitätsansprüchen.'
          }, {
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: 'Der Bereich des Produktionsmanagements befasst sich im Besonderen mit der organisatorischen und informationstechnischen Gestaltung von Produktionsabläufen, wohingegen der Bereich der Produktionstechnik innovative Methoden und Mittel zur spanenden Bearbeitung moderner industrieller Werkstoffe entwickelt.'
          },{
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'assets/images/sponsors/FCP/hereon_logo.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          },{
            name: 'AVL',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          },{
            name: 'AVL Racetech',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl_racetech.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          },{
            name: 'LMT Tools GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/lmt_tools_logo.png',
            text: 'Seit über 100 Jahren stehen die Spezialisten des heutigen Unternehmens LMT Tools für höchste Qualität und Präzision im Werkzeugbau. LMT ist weltweit mit führend bei der Herstellung von Wälzfräsern für Zahnräder und von Rollköpfen für die Gewindeproduktion. Das Unternehmen wurde 1908 gegründet.'
          },{
            name: 'WiTTE',
            website: '',
            logo: 'assets/images/sponsors/FCP/witte_logo.png',
            text: ''
          },{
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise“, in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          },{
            name: 'H&R',
            website: '',
            logo: 'assets/images/sponsors/Partners/hundr_logo.png',
            text: ''
          },{
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          },
        ]
      },
      {
        name: "Business Class Partner",
        supporters: [
          {
            name: 'Bosch',
            website: '',
            logo: 'assets/images/sponsors/BCP/bosch_logo.png',
            text: ''
          },{
            name: 'Mankiewicz',
            website: '',
            logo: 'assets/images/sponsors/ECP/mankiewicz_logo.png',
            text: ''
          },{
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          },{
            name: 'DESY',
            website: '',
            logo: 'assets/images/sponsors/ECP/desy_logo.png',
            text: ''
          },{
            name: 'Vector',
            website: '',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: ''
          },{
            name: 'Würth Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/würth_elektronik_logo.png',
            text: ''
          },{
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          },{
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          },{
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          },{
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          },{
            name: 'Resonic',
            website: '',
            logo: 'assets/images/sponsors/BCP/resonic_logo.png',
            text: ''
          },{
            name: 'ATP Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/atp_elektronik_logo.png',
            text: ''
          },{
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          },{
            name: 'Kleineberg GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/kleineberg_logo.png',
            text: ''
          }, {
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          },{
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          },{
            name: 'Ätzwerk',
            website: '',
            logo: 'assets/images/sponsors/BCP/ätzwerk_logo.png',
            text: ''
          },{
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          },
        ]
      },{
        name: "Economy Class Partner",
        supporters: [
         {
            name: 'Zeiss',
            website: '',
            logo: 'assets/images/sponsors/ECP/zeiss_logo.png',
            text: ''
          },{
            name: 'WMB',
            website: '',
            logo: 'assets/images/sponsors/ECP/wmb_logo.png',
            text: ''
          },{
            name: 'MB Design',
            website: '',
            logo: 'assets/images/sponsors/BCP/mbdesign_logo.png',
            text: ''
          },{
            name: 'PTC',
            website: '',
            logo: 'assets/images/sponsors/ECP/ptc_logo.png',
            text: ''
          },{
            name: 'Schroth',
            website: '',
            logo: 'assets/images/sponsors/ECP/schroth_logo.png',
            text: ''
          },{
            name: 'Teijin',
            website: '',
            logo: 'assets/images/sponsors/ECP/teijin_logo.png',
            text: ''
          },{
            name: 'Kluge Engineering',
            website: '',
            logo: 'assets/images/sponsors/ECP/Kluge_Engineering_logo.png',
            text: ''
          },{
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          },{
            name: 'KL Raudies',
            website: '',
            logo: 'assets/images/sponsors/ECP/raudies_logo.png',
            text: ''
          },{
            name: 'IFM',
            website: '',
            logo: 'assets/images/sponsors/Partners/ifm_logo.png',
            text: ''
          },{
            name: 'Huber+Suhner',
            website: '',
            logo: 'assets/images/sponsors/ECP/huber+suhner_logo.png',
            text: ''
          }, {
            name: 'Kurtz Ersa',
            website: '',
            logo: 'assets/images/sponsors/ECP/kurtz_ersa_logo.png',
            text: ''
          },{
            name: 'Hobum Oleochemicals GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/hobum_logo.png',
            text: ''
          },{
            name: 'Schreiber',
            website: '',
            logo: 'assets/images/sponsors/ECP/schreiber_logo.png',
            text: ''
          },{
            name: 'Kontron',
            website: '',
            logo: 'assets/images/sponsors/ECP/kontron_logo.png',
            text: ''
          },{
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'src/assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          }, {
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          },{
            name: 'Bergmann',
            website: '',
            logo: 'assets/images/sponsors/ECP/bergmann_crivitz_logo.png',
            text: ''
          },{
            name: 'deutsche adp F + Z',
            website: '',
            logo: 'assets/images/sponsors/ECP/deutsche_adp_logo.png',
            text: ''
          },{
            name: 'Saertex',
            website: '',
            logo: 'assets/images/sponsors/ECP/saertex_logo.png',
            text: ''
          },{
            name: 'Schulz Electronic',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          },{
            name: 'Calspan',
            website: '',
            logo: 'assets/images/sponsors/ECP/calspan_logo.png',
            text: ''
          },{
            name: 'Norik',
            website: '',
            logo: 'assets/images/sponsors/ECP/norik_logo.png',
            text: ''
          },{
            name: 'BODO Möller Chemie GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/bodo_möller_logo.png',
            text: ''
          },{
            name: 'ESSKA.de GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/esska_logo.png',
            text: ''
          },{
            name: 'HellermannTyton',
            website: '',
            logo: 'assets/images/sponsors/ECP/hellermann_tyton_logo.png',
            text: ''
          },{
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          },{
            name: 'MeKoFe',
            website: '',
            logo: 'assets/images/sponsors/ECP/mekofe_logo.png',
            text: ''
          },
        ]
      },{
        name: "Partner",
        supporters: [
          {
            name: 'Gegenstrom',
            website: '',
            logo: 'assets/images/sponsors/ECP/gegenstrom_logo.png',
            text: ''
          },{
            name: 'Maack Feuerschutz',
            website: '',
            logo: 'assets/images/sponsors/Partners/maack_feuerschutz_logo.png',
            text: ''
          },{
            name: 'ODU',
            website: '',
            logo: 'assets/images/sponsors/BCP/odu_logo.png',
            text: ''
          },{
            name: 'Röchling',
            website: '',
            logo: 'assets/images/sponsors/ECP/röchling_logo.png',
            text: ''
          },{
            name: 'Foxfactory',
            website: '',
            logo: 'assets/images/sponsors/Partners/foxfactory_logo.png',
            text: ''
          },{
            name: '3D|Core GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/3dcore_logo.png',
            text: ''
          },{
            name: 'Textreme',
            website: '',
            logo: 'assets/images/sponsors/Partners/textreme_logo.png',
            text: ''
          }, {
            name: 'Vliesstoff Kasper',
            website: '',
            logo: 'assets/images/sponsors/Partners/textreme_logo.png',
            text: ''
          }, {
            name: 'Eukatec',
            website: '',
            logo: 'assets/images/sponsors/Partners/eukatec_logo.png',
            text: ''
          },{
            name: 'Borco Höhns',
            website: '',
            logo: 'assets/images/sponsors/Partners/borco_höhns_logo.png',
            text: ''
          }, {
            name: 'Arcus',
            website: '',
            logo: 'assets/images/sponsors/Partners/arcus_logo.png',
            text: ''
          },{
            name: 'Weicon',
            website: '',
            logo: 'assets/images/sponsors/Partners/weicon_logo.png',
            text: ''
          }, {
            name: 'Panasonic',
            website: '',
            logo: 'assets/images/sponsors/Partners/panaconic_logo.png',
            text: ''
          }, {
            name: 'Henkel',
            website: '',
            logo: 'assets/images/sponsors/Partners/henkel_logo.png',
            text: ''
          }, {
            name: 'Analog Devices',
            website: '',
            logo: 'assets/images/sponsors/Partners/analog_devices_logo.png',
            text: ''
          },{
            name: 'EBM-Papst',
            website: '',
            logo: 'assets/images/sponsors/Partners/ebm_papst_logo.png',
            text: ''
          },{
            name: 'Harting',
            website: '',
            logo: 'assets/images/sponsors/Partners/harting_logo.png',
            text: ''
          },{
            name: 'Norelem',
            website: '',
            logo: 'assets/images/sponsors/Partners/norelem_logo.png',
            text: ''
          }, {
            name: 'Münch Chemie International GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/münch_chemie_logo.png',
            text: ''
          },{
            name: 'Murata',
            website: '',
            logo: 'assets/images/sponsors/Partners/murata_logo.png',
            text: ''
          },{
            name: 'Littelfuse',
            website: '',
            logo: 'assets/images/sponsors/Partners/Littelfuse.png',
            text: ''
          },{
            name: 'Dräger Safety AG & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/dräger_logo.png',
            text: ''
          },{
            name: 'Weller Tools GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/weller_logo.png',
            text: ''
          },{
            name: 'F. REYHER Nchfg. GmbH & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/reyher_logo.png',
            text: ''
          },{
            name: 'Bossard',
            website: '',
            logo: 'assets/images/sponsors/Partners/bossard_logo.png',
            text: ''
          },{
            name: 'Idec Elektrotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/idec_elektrotechnik_logo.png',
            text: ''
          },{
            name: 'Almit',
            website: '',
            logo: 'assets/images/sponsors/Partners/almit_logo.png',
            text: ''
          },{
            name: 'AS Electronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/as_elektronik_logo.png',
            text: ''
          },{
            name: 'Isabellenhütte',
            website: '',
            logo: 'assets/images/sponsors/Partners/isabellenhütte_logo.png',
            text: ''
          },{
            name: 'Interfolia',
            website: '',
            logo: 'assets/images/sponsors/Partners/interfolia_logo.png',
            text: ''
          },{
            name: 'Sensata Technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/sensata_logo.png',
            text: ''
          },{
            name: 'OTT',
            website: '',
            logo: 'assets/images/sponsors/Partners/ot_tornesch_logo.png',
            text: ''
          },{
            name: 'VSM Abrasive',
            website: '',
            logo: 'assets/images/sponsors/Partners/vsm_abrasive_logo.png',
            text: ''
          },{
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          },{
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          },{
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          },{
            name: 'Hohnen',
            website: '',
            logo: 'assets/images/sponsors/Partners/hohnen_logo.png',
            text: ''
          },{
            name: 'Grossmarkt Hamburg',
            website: '',
            logo: 'assets/images/sponsors/Partners/grossmarkt_logo.png',
            text: ''
          },{
            name: 'Beta LAYOUT GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Das Filament',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          },{
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          },{
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          },{
            name: 'Nord-Lock',
            website: '',
            logo: 'assets/images/sponsors/Partners/nord_lock_logo.png',
            text: ''
          },{
            name: 'Jockel',
            website: '',
            logo: 'assets/images/sponsors/Partners/jockel_logo.png',
            text: ''
          },{
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          },{
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          },
          {
            name: 'Althen',
            website: '',
            logo: 'assets/images/sponsors/Partners/althen_logo.png',
            text: ''
          },{
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          }, {
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          },{
            name: 'Stahlbus',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlbus_logo.png',
            text: ''
          },{
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          },{
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          },
        ]
      }, {
        name: "Supplier",
        supporters: [
          {
            name: 'Suter Kunststoffe AG',
            website: '',
            logo: 'assets/images/sponsors/Partners/suter_logo.png',
            text: ''
          },{
            name: 'Sandtler GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/sandtler_logo.png',
            text: ''
          },{
            name: 'Rudolph Sievers GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/rudolf_sievers_logo.png',
            text: ''
          },{
            name: 'Metall Jobst',
            website: '',
            logo: 'assets/images/sponsors/Partners/metall_jobst_logo.png',
            text: ''
          },{
            name: 'Blässinger Gruppe',
            website: '',
            logo: 'assets/images/sponsors/Partners/blässinger_logo.png',
            text: ''
          },{
            name: 'Keizer',
            website: '',
            logo: 'assets/images/sponsors/Partners/keizer_logo.png',
            text: ''
          },{
            name: 'Hansemold',
            website: '',
            logo: 'assets/images/sponsors/Partners/hansemold_logo.png',
            text: ''
          },{
            name: 'IBH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ibh_logo.png',
            text: ''
          },{
            name: 'FILCON Elektronik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/filcon_logo.png',
            text: ''
          },{
            name: 'Conrad',
            website: '',
            logo: 'assets/images/sponsors/Partners/conrad_logo.png',
            text: ''
          },{
            name: 'Variohm',
            website: '',
            logo: 'assets/images/sponsors/Partners/variohm_logo.png',
            text: ''
          },{
            name: 'LED-Tec.de',
            website: '',
            logo: 'assets/images/sponsors/Partners/led_tec_logo.png',
            text: ''
          },{
            name: 'Bourns',
            website: '',
            logo: 'assets/images/sponsors/Partners/bourns_logo.png',
            text: ''
          },{
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          },{
            name: 'General Sealantis',
            website: '',
            logo: 'assets/images/sponsors/Partners/general_sealants_logo.png',
            text: ''
          },{
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          },{
            name: 'LTN Servotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ltn_servotechnik.png',
            text: ''
          },{
            name: '3D Connexion',
            website: '',
            logo: 'src/assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          },{
            name: 'Hirschmann',
            website: '',
            logo: 'assets/images/sponsors/Partners/hirschmann_logo.png',
            text: ''
          },
        ]
      }, {
        name: "Gesundheitspartner",
        supporters: [
          {
            name: 'Techniker Krankenkasse',
            website: '',
            logo: 'assets/images/sponsors/Gesundheitspartner/tk_logo.png',
            text: `Ansprechpartnerin: Manuela Bartels
            Hochschulberaterin
            Tel: 040 - 460 65 10 14 12
            Mobil: 01 51 - 18 05 28 41
            E-Mail: manuela.bartels@tk.de`
          },
        ]
      }
    ]
  },{
    season: '2022',
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience",dafür steht NXP.Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },{
            name: 'Tandler',
            website: '',
            logo: 'assets/images/sponsors/RFCP/tandler_logo.png',
            text: ''
          }
        ]
      },{
        name: "First Class Partner",
        supporters: [
          {
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: 'Wir vom Autohaus Meyer vertreten die Marken Volkswagen, Skoda, AudiService sowie VW Nutzfahrzeuge ServicePlus und zählen zu den modernsten Autohäusern im Landkreis Harburg. Sie finden uns zwischen Hamburg und Bremen direkt an der B75 vor Tostedt. Auf einer Gesamtfläche von über 25.000 Quadratmetern präsentieren wir ca. 600 Neu- und Gebrauchtwagen der Marken Volkswagen und Skoda. Acht examinierte Verkaufsberater helfen Ihnen dabei, das richtige Auto aus der umfassenden Modellpalette zu finden. Für Servicearbeiten stehen acht Kundendienstberater mit drei Dialogannahmen und 15 Monteuren zur Verfügung. Von der Fahrzeugaufbereitung bis hin zu kompliziertesten Rahmenschäden im Karosseriebereich decken wir die gesamte Servicebreite ab.'
          },{
            name: 'Institut für Produktionsmanagement und -technik',
            website: '',
            logo: 'assets/images/sponsors/FCP/impt_logo.png',
            text: ''
          },{
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: 'Das familiengeführte Unternehmen Kulina Zerspanungstechnik und Maschinenbau GmbH kann auf eine 50 jährige Geschichte zurückblicken. Die Kulina GmbH ist ein innovatives Unternehmen und ein leistungsstarker Partner für Bauteile mit höchsten Qualitätsansprüchen.'
          }, {
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: 'Der Bereich des Produktionsmanagements befasst sich im Besonderen mit der organisatorischen und informationstechnischen Gestaltung von Produktionsabläufen, wohingegen der Bereich der Produktionstechnik innovative Methoden und Mittel zur spanenden Bearbeitung moderner industrieller Werkstoffe entwickelt.'
          },{
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'assets/images/sponsors/FCP/hereon_logo.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          },{
            name: 'AVL',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          },{
            name: 'AVL Racetech',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl_racetech.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          },{
            name: 'LMT Tools GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/lmt_tools_logo.png',
            text: 'Seit über 100 Jahren stehen die Spezialisten des heutigen Unternehmens LMT Tools für höchste Qualität und Präzision im Werkzeugbau. LMT ist weltweit mit führend bei der Herstellung von Wälzfräsern für Zahnräder und von Rollköpfen für die Gewindeproduktion. Das Unternehmen wurde 1908 gegründet.'
          },{
            name: 'WiTTE',
            website: '',
            logo: 'assets/images/sponsors/FCP/witte_logo.png',
            text: ''
          },{
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise“, in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          },{
            name: 'H&R',
            website: '',
            logo: 'assets/images/sponsors/Partners/hundr_logo.png',
            text: ''
          },{
            name: 'IBEO Automotive',
            website: '',
            logo: 'assets/images/sponsors/FCP/ibeo_logo.png',
            text: ''
          },{
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          },{
            name: 'Altium',
            website: '',
            logo: 'assets/images/sponsors/FCP/altium_logo.png',
            text: 'Die Firma Altium entwickelt und verkauft CAD-Tools im Bereich Elektronikdesign. Mit dem Ziel, den gesamten Designprozess in einer bedienerfreundlichen und bezahlbaren Anwendung zusammenzuführen, wird fortlaufend an der Elektronikdesign-Umgebung Altium Designer weiterentwickelt. Zuletzt wurde sie durch den Online Service Altium 365 ergänzt, welcher bereits seit 2021, kurz nach seinem Release, dem e-gnition Team in der Zusammenarbeit und im Datenmanagement weiterhilft. Zusammen mit AltiumLive, dem internetbasierten Portal für professionelle Elektronikdesigner, verbindet das Unternehmen Menschen und Technologie. Mit seinen Anwendungen schafft Altium eine Art Ökosystem, das weit über die Elektronikentwicklung hinausgeht. Sie schließen die Lücke zwischen der Design- und Fertigungsphase eines Produkts und die Lücke zwischen Menschen und Technologie.'
          },
        ]
      },{
        name: "Business Class Partner",
        supporters: [
          {
            name: 'Gossen Metrawatt',
            website: '',
            logo: 'assets/images/sponsors/BCP/gossen_metrawatt_logo.png',
            text: ''
          },{
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          },{
            name: 'DESY',
            website: '',
            logo: 'assets/images/sponsors/ECP/desy_logo.png',
            text: ''
          },{
            name: 'Vector',
            website: '',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: ''
          },{
            name: 'Würth Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/würth_elektronik_logo.png',
            text: ''
          },{
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          },{
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          },{
            name: 'Ruwac Industriestaubsauger GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ruwac_logo.png',
            text: ''
          },{
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          },{
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          },{
            name: 'Resonic',
            website: '',
            logo: 'assets/images/sponsors/BCP/resonic_logo.png',
            text: ''
          },{
            name: 'ATP Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/atp_elektronik_logo.png',
            text: ''
          },{
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          },{
            name: 'Kleineberg GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/kleineberg_logo.png',
            text: ''
          }, {
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          },{
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          },{
            name: 'Ätzwerk',
            website: '',
            logo: 'assets/images/sponsors/BCP/ätzwerk_logo.png',
            text: ''
          },{
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          },
        ]
      },{
        name: "Economy Class Partner",
        supporters: [
          {
            name: 'Teijin',
            website: '',
            logo: 'assets/images/sponsors/ECP/teijin_logo.png',
            text: ''
          },{
            name: 'Grossmarkt Hamburg',
            website: '',
            logo: 'assets/images/sponsors/ECP/grossmarkt_logo.png',
            text: ''
          },{
            name: 'Kluge Engineering',
            website: '',
            logo: 'assets/images/sponsors/ECP/Kluge_Engineering_logo.png',
            text: ''
          },{
            name: 'KW',
            website: '',
            logo: 'assets/images/sponsors/ECP/kw_logo.png',
            text: ''
          },{
            name: 'GSI SLV Nord',
            website: '',
            logo: 'assets/images/sponsors/ECP/gsi_slv_logo.png',
            text: ''
          },{
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          },{
            name: 'HIRI',
            website: '',
            logo: 'assets/images/sponsors/ECP/hiri_logo.png',
            text: ''
          },{
            name: 'KL Raudies',
            website: '',
            logo: 'assets/images/sponsors/ECP/raudies_logo.png',
            text: ''
          },{
            name: 'Basler',
            website: '',
            logo: 'assets/images/sponsors/ECP/basler_logo.png',
            text: ''
          },{
            name: 'SKF',
            website: '',
            logo: 'assets/images/sponsors/ECP/skf_logo.png',
            text: ''
          },{
            name: 'Schleede',
            website: '',
            logo: 'assets/images/sponsors/ECP/schleede_logo.png',
            text: ''
          },{
            name: 'Goosen Metrawatt',
            website: '',
            logo: 'assets/images/sponsors/BCP/gossen_metrawatt_logo.png',
            text: ''
          },{
            name: 'Greve Ingenieurleistungen',
            website: '',
            logo: 'assets/images/sponsors/ECP/greve_logo.png',
            text: ''
          },{
            name: 'Kawash',
            website: '',
            logo: 'assets/images/sponsors/ECP/kawash_logo.png',
            text: ''
          },{
            name: 'Kurtz Ersa',
            website: '',
            logo: 'assets/images/sponsors/ECP/kurtz_ersa_logo.png',
            text: ''
          },{
            name: 'Hobum Oleochemicals GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/hobum_logo.png',
            text: ''
          },{
            name: 'Schreiber',
            website: '',
            logo: 'assets/images/sponsors/ECP/schreiber_logo.png',
            text: ''
          },{
            name: 'Item',
            website: '',
            logo: 'assets/images/sponsors/ECP/item_logo.png',
            text: ''
          },{
            name: 'Kontron',
            website: '',
            logo: 'assets/images/sponsors/ECP/kontron_logo.png',
            text: ''
          },{
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'src/assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          },{
            name: 'Werkzeug und Maschinenbau Biehl',
            website: '',
            logo: 'assets/images/sponsors/ECP/wmb_logo.png',
            text: ''
          },{
            name: 'EDAG',
            website: '',
            logo: 'assets/images/sponsors/ECP/edag_logo.png',
            text: ''
          },{
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          },{
            name: 'Bergmann',
            website: '',
            logo: 'assets/images/sponsors/ECP/bergmann_crivitz_logo.png',
            text: ''
          },{
            name: 'deutsche adp F + Z',
            website: '',
            logo: 'assets/images/sponsors/ECP/deutsche_adp_logo.png',
            text: ''
          },{
            name: 'Saertex',
            website: '',
            logo: 'assets/images/sponsors/ECP/saertex_logo.png',
            text: ''
          },{
            name: 'Schulz Electronic',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          },{
            name: 'Calspan',
            website: '',
            logo: 'assets/images/sponsors/ECP/calspan_logo.png',
            text: ''
          },{
            name: 'Norik',
            website: '',
            logo: 'assets/images/sponsors/ECP/norik_logo.png',
            text: ''
          },{
            name: 'BODO Möller Chemie GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/bodo_möller_logo.png',
            text: ''
          },{
            name: 'ESSKA.de GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/esska_logo.png',
            text: ''
          },{
            name: 'Hellermann Tyton',
            website: '',
            logo: 'assets/images/sponsors/ECP/hellermann_tyton_logo.png',
            text: ''
          },{
            name: 'AKG',
            website: '',
            logo: 'assets/images/sponsors/ECP/akg_logo.png',
            text: ''
          },{
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          },{
            name: 'MeKoFe',
            website: '',
            logo: 'assets/images/sponsors/ECP/mekofe_logo.png',
            text: ''
          },
        ]
      },{
        name: "Partner",
        supporters: [
          {
            name: 'Gegenstrom',
            website: '',
            logo: 'assets/images/sponsors/ECP/gegenstrom_logo.png',
            text: ''
          },{
            name: 'Analog Devices',
            website: '',
            logo: 'assets/images/sponsors/Partners/analog_devices_logo.png',
            text: ''
          },{
            name: 'Huber+Suhner',
            website: '',
            logo: 'assets/images/sponsors/ECP/huber+suhner_logo.png',
            text: ''
          },{
            name: 'AISLER',
            website: '',
            logo: 'assets/images/sponsors/Partners/aisler.png',
            text: ''
          },{
            name: 'Harting',
            website: '',
            logo: 'assets/images/sponsors/Partners/harting_logo.png',
            text: ''
          },{
            name: 'Norelem',
            website: '',
            logo: 'assets/images/sponsors/Partners/norelem_logo.png',
            text: ''
          }, {
            name: 'Münch Chemie International GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/münch_chemie_logo.png',
            text: ''
          },{
            name: 'Murata',
            website: '',
            logo: 'assets/images/sponsors/Partners/murata_logo.png',
            text: ''
          },{
            name: 'Littelfuse',
            website: '',
            logo: 'assets/images/sponsors/Partners/Littelfuse.png',
            text: ''
          },{
            name: 'Dräger Safety AG & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/dräger_logo.png',
            text: ''
          },{
            name: 'Weller Tools GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/weller_logo.png',
            text: ''
          },{
            name: 'F. REYHER Nchfg. GmbH & Co. KGaA',
            website: '',
            logo: 'assets/images/sponsors/ECP/reyher_logo.png',
            text: ''
          },{
            name: 'Brainboxes',
            website: '',
            logo: 'assets/images/sponsors/Partners/brainboxes_logo.png',
            text: ''
          },{
            name: 'EOZ',
            website: '',
            logo: 'assets/images/sponsors/Partners/eoz_logo.png',
            text: ''
          },{
            name: 'Aalbert surface technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/aalberts_surface_logo.png',
            text: ''
          },{
            name: 'IFM',
            website: '',
            logo: 'assets/images/sponsors/Partners/ifm_logo.png',
            text: ''
          },{
            name: 'Davoscan',
            website: '',
            logo: 'assets/images/sponsors/Partners/davoscan_logo.png',
            text: ''
          },{
            name: 'CMC Klebetechnik',
            website: '',
            logo: 'assets/images/sponsors/Partners/cmc_klebetechnik_logo.png',
            text: ''
          },{
            name: 'European thermodynamics Limited',
            website: '',
            logo: 'assets/images/sponsors/Partners/european_thermodynamics_logo.png',
            text: ''
          },{
            name: 'Bossard',
            website: '',
            logo: 'assets/images/sponsors/Partners/bossard_logo.png',
            text: ''
          },{
            name: 'MetalEhrnsberger',
            website: '',
            logo: 'assets/images/sponsors/Partners/metall_ehrnsberger_logo.png',
            text: ''
          },{
            name: 'Idec Elektrotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/idec_elektrotechnik_logo.png',
            text: ''
          },{
            name: 'Almit',
            website: '',
            logo: 'assets/images/sponsors/Partners/almit_logo.png',
            text: ''
          }, {
            name: 'AS Electronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/as_elektronik_logo.png',
            text: ''
          },{
            name: 'Isabellenhütte',
            website: '',
            logo: 'assets/images/sponsors/Partners/isabellenhütte_logo.png',
            text: ''
          },{
            name: 'Interfolia',
            website: '',
            logo: 'assets/images/sponsors/Partners/isabellenhütte_logo.png',
            text: ''
          },{
            name: 'Sensata Technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/sensata_logo.png',
            text: ''
          }, {
            name: 'OTT',
            website: '',
            logo: 'assets/images/sponsors/Partners/ot_tornesch_logo.png',
            text: ''
          },{
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          },{
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          },{
            name: 'Switchcraft Conxall',
            website: '',
            logo: 'assets/images/sponsors/Partners/switchcraft_conxall_logo.png',
            text: ''
          },{
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          },{
            name: 'Hohnen',
            website: '',
            logo: 'assets/images/sponsors/Partners/hohnen_logo.png',
            text: ''
          },{
            name: 'Beta layout',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Das Filament',
            website: '',
            logo: 'assets/images/sponsors/Partners/dasfilament_logo.png',
            text: ''
          },{
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          },{
            name: 'Nortec',
            website: '',
            logo: 'assets/images/sponsors/Partners/nortec_logo.png',
            text: ''
          },{
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          },{
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          }, {
            name: 'Nord-Lock',
            website: '',
            logo: 'assets/images/sponsors/Partners/nord_lock_logo.png',
            text: ''
          },{
            name: 'Febrotec Fedem',
            website: '',
            logo: 'assets/images/sponsors/Partners/febrotec_logo.png',
            text: ''
          },{
            name: 'Genoma',
            website: '',
            logo: 'assets/images/sponsors/Partners/genoma_logo.png',
            text: ''
          },{
            name: 'LEM',
            website: '',
            logo: 'assets/images/sponsors/Partners/lem_logo.png',
            text: ''
          },{
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          },{
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          },{
            name: 'H&R',
            website: '',
            logo: 'assets/images/sponsors/Partners/hundr_logo.png',
            text: ''
          },{
            name: 'Adchem',
            website: '',
            logo: 'assets/images/sponsors/Partners/adchem_logo.png',
            text: ''
          },{
            name: 'Althen',
            website: '',
            logo: 'assets/images/sponsors/Partners/althen_logo.png',
            text: ''
          },{
            name: 'Böhme',
            website: '',
            logo: 'assets/images/sponsors/Partners/böhme_logo.png',
            text: ''
          },{
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          },{
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          },{
            name: 'Bürklin Elektronik',
            website: '',
            logo: 'assets/images/sponsors/Partners/bürklin_logo.png',
            text: ''
          },{
            name: 'Stahlbus',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlbus_logo.png',
            text: ''
          },{
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          }, {
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          },{
            name: 'Bender',
            website: '',
            logo: 'assets/images/sponsors/Partners/bender_logo.png',
            text: ''
          },
        ]
      },{
        name: "Supplier",
        supporters: [
          {
            name: 'Keizer',
            website: '',
            logo: 'assets/images/sponsors/Partners/keizer_logo.png',
            text: ''
          },{
            name: 'VSM Abrasive',
            website: '',
            logo: 'assets/images/sponsors/Partners/vsm_abrasive_logo.png',
            text: ''
          },{
            name: 'Hansemold',
            website: '',
            logo: 'assets/images/sponsors/Partners/hansemold_logo.png',
            text: ''
          },{
            name: 'Consider Carbon',
            website: '',
            logo: 'assets/images/sponsors/Partners/consider_carbon_logo.png',
            text: ''
          },{
            name: 'IBH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ibh_logo.png',
            text: ''
          },{
            name: 'Textreme',
            website: '',
            logo: 'assets/images/sponsors/Partners/textreme_logo.png',
            text: ''
          },{
            name: 'FILCON Elektronik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/filcon_logo.png',
            text: ''
          },{
            name: 'Conrad',
            website: '',
            logo: 'assets/images/sponsors/Partners/conrad_logo.png',
            text: ''
          },{
            name: 'Variohm',
            website: '',
            logo: 'assets/images/sponsors/Partners/variohm_logo.png',
            text: ''
          },{
            name: 'LED-Tec.de',
            website: '',
            logo: 'assets/images/sponsors/Partners/led_tec_logo.png',
            text: ''
          },{
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          },{
            name: 'General Sealantis',
            website: '',
            logo: 'assets/images/sponsors/Partners/general_sealants_logo.png',
            text: ''
          },{
            name: 'EBM-Papst',
            website: '',
            logo: 'assets/images/sponsors/Partners/ebm_papst_logo.png',
            text: ''
          },{
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          },{
            name: '3D Connexion',
            website: '',
            logo: 'src/assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          },{
            name: 'Hirschmann',
            website: '',
            logo: 'assets/images/sponsors/Partners/hirschmann_logo.png',
            text: ''
          },
        ]
      },{
        name: "Gesundheitspartner",
        supporters: [
          {
            name: 'Techniker Krankenkasse',
            website: '',
            logo: 'assets/images/sponsors/Gesundheitspartner/tk_logo.png',
            text: `Ansprechpartnerin: Manuela Bartels
            Hochschulberaterin
            Tel: 040 - 460 65 10 14 12
            Mobil: 01 51 - 18 05 28 41
            E-Mail: manuela.bartels@tk.de`
          },
        ]
      }
    ]
  },{
    season: "2021",
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience",dafür steht NXP.Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },{
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: 'Der Bereich des Produktionsmanagements befasst sich im Besonderen mit der organisatorischen und informationstechnischen Gestaltung von Produktionsabläufen, wohingegen der Bereich der Produktionstechnik innovative Methoden und Mittel zur spanenden Bearbeitung moderner industrieller Werkstoffe entwickelt.'
          },{
            name: 'Tandler',
            website: '',
            logo: '',
            text: ''
          }
        ]
      },{
        name: "First Class Partner",
        supporters: [
          {
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_97d7c3c89d8241efa2ea094377f6d5ac~mv2.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          },{
            name: 'AVL',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          },{
            name: 'AVL Racetech',
            website: '',
            logo: 'assets/images/sponsors/FCP/avl_racetech.png',
            text: 'AVL RACETECH ist der globale Motorsportexperte von AVL und seit mehr als 20 Jahren in allen technischen Bereichen des Sports tätig. AVL RACETECH arbeitet mit Kunden in über 17 Rennserien weltweit in den Bereichen Engineering, Test, Simulation und Fertigung. Als Schlüssellieferant für Teams in den angesehensten Rennserien weltweit, von der Formel 1 über NASCAR bis MotoGP bieten sie der Motorsportwelt modernste Technologien und Dienstleistungen. AVL RACETECH nutzt den Motorsport als Plattform für Innovationen. Dieses Know-how transferieren sie in die Entwicklung von Straßenfahrzeugen für zukünftige Generationen der Mobilität.'
          },{
            name: 'LMT Tools GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/lmt_tools_logo.png',
            text: 'Seit über 100 Jahren stehen die Spezialisten des heutigen Unternehmens LMT Tools für höchste Qualität und Präzision im Werkzeugbau. LMT ist weltweit mit führend bei der Herstellung von Wälzfräsern für Zahnräder und von Rollköpfen für die Gewindeproduktion. Das Unternehmen wurde 1908 gegründet.'
          },{
            name: 'WiTTE',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Xsens',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise“, in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          },{
            name: 'H&R',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'IBEO Automotive',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          },{
            name: 'Altium',
            website: 'assets/images/sponsors/FCP/altium_logo.png',
            logo: 'https://static.wixstatic.com/media/673d94_a478cae83bb54f65b8be3c1882b58787~mv2.png',
            text: 'Die Firma Altium entwickelt und verkauft CAD-Tools im Bereich Elektronikdesign. Mit dem Ziel, den gesamten Designprozess in einer bedienerfreundlichen und bezahlbaren Anwendung zusammenzuführen, wird fortlaufend an der Elektronikdesign-Umgebung Altium Designer weiterentwickelt. Zuletzt wurde sie durch den Online Service Altium 365 ergänzt, welcher bereits seit 2021, kurz nach seinem Release, dem e-gnition Team in der Zusammenarbeit und im Datenmanagement weiterhilft. Zusammen mit AltiumLive, dem internetbasierten Portal für professionelle Elektronikdesigner, verbindet das Unternehmen Menschen und Technologie. Mit seinen Anwendungen schafft Altium eine Art Ökosystem, das weit über die Elektronikentwicklung hinausgeht. Sie schließen die Lücke zwischen der Design- und Fertigungsphase eines Produkts und die Lücke zwischen Menschen und Technologie.'
          },
        ]
      },{
        name: "Buisness Class Partner",
        supporters: [
          {
            name: 'Vector',
            website: '',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: ''
          }, {
            name: 'Würth Elektronik',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_234b429acb6744c5b95d9b780ee4f054~mv2.png',
            text: ''
          },{
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          },{
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: 'Wir vom Autohaus Meyer vertreten die Marken Volkswagen, Skoda, AudiService sowie VW Nutzfahrzeuge ServicePlus und zählen zu den modernsten Autohäusern im Landkreis Harburg. Sie finden uns zwischen Hamburg und Bremen direkt an der B75 vor Tostedt. Auf einer Gesamtfläche von über 25.000 Quadratmetern präsentieren wir ca. 600 Neu- und Gebrauchtwagen der Marken Volkswagen und Skoda. Acht examinierte Verkaufsberater helfen Ihnen dabei, das richtige Auto aus der umfassenden Modellpalette zu finden. Für Servicearbeiten stehen acht Kundendienstberater mit drei Dialogannahmen und 15 Monteuren zur Verfügung. Von der Fahrzeugaufbereitung bis hin zu kompliziertesten Rahmenschäden im Karosseriebereich decken wir die gesamte Servicebreite ab.'
          },{
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: 'Das familiengeführte Unternehmen Kulina Zerspanungstechnik und Maschinenbau GmbH kann auf eine 50 jährige Geschichte zurückblicken. Die Kulina GmbH ist ein innovatives Unternehmen und ein leistungsstarker Partner für Bauteile mit höchsten Qualitätsansprüchen.'
          },{
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          },{
            name: 'Ruwac Industriestaubsauger GmbH',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          },{
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          },{
            name: 'Resonic',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ATP Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/atp_elektronik_logo.png',
            text: ''
          },{
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          }, {
            name: 'GSI SLV Nord',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Kleineberg GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/kleineberg_logo.png',
            text: ''
          },{
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          }, {
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          },{
            name: 'Ätzwerk',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          }, 
        ]
      },{
        name: "Economy class Partner",
        supporters: [
          {
            name: 'Item',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          },{
            name: 'Kontron',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Consider Carbon',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Wiegel',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Rexim Werkzeuge',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'src/assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          },{
            name: 'DESY',
            website: '',
            logo: 'assets/images/sponsors/ECP/desy_logo.png',
            text: ''
          },{
            name: 'Horn',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Werkzeug und Maschinenbau Biehl',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'EDAG',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          },{
            name: 'Foxfactory',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Bergmann',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Becker',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'deutsche adp F + Z',
            website: '',
            logo: 'assets/images/sponsors/ECP/deutsche_adp_logo.png',
            text: ''
          },{
            name: 'Saertex',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'PCB Express',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Schulz Electronic',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          },{
            name: 'Nordik',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'BODO Möller Chemie GmbH',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ESSKA.de GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/esska_logo.png',
            text: ''
          },{
            name: 'HellermannTyton',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Grimm Maschinenbau',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'AKG',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          },{
            name: 'MeKoFe',
            website: '',
            logo: '',
            text: ''
          },

        ]
      },{
        name: "Partners",
        supporters: [
          {
            name: 'Gegenstrom',
            website: '',
            logo: 'assets/images/sponsors/ECP/gegenstrom_logo.png',
            text: ''
          },{
            name: 'Huber+Suhner',
            website: '',
            logo: 'assets/images/sponsors/ECP/huber+suhner_logo.png',
            text: ''
          },{
            name: 'CMC Kleibetechnik',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'European thermodynamics Limited',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Sensata Technologies',
            website: '',
            logo: 'assets/images/sponsors/Partners/sensata_logo.png',
            text: ''
          },{
            name: 'Kurtz Ersa',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'LTN Servotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ltn_servotechnik.png',
            text: ''
          },{
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          },{
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          },{
            name: 'Aristo',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'IMO',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Switchcraft Conxall',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          },{
            name: 'Hohnen',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          },{
            name: 'Salt and pepper',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'MFT',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Beta LAYOUT GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Das Filament',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          },{
            name: 'Nortec',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'XP Power',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          },{
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          }, {
            name: 'Nord-Lock',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Loctite',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Genoma',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'LEM',
            website: '',
            logo: 'assets/images/sponsors/Partners/lem_logo.png',
            text: ''
          },{
            name: 'Frizlen',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          },{
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          },{
            name: 'H&R',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Adchem',
            website: '',
            logo: '',
            text: ''
          },{
            name: '3M Science Applied to Life',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Althen',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          },{
            name: 'IBH',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          },{
            name: 'Bürklin Elektronik',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'SIBA',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Stahlbus',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlbus_logo.png',
            text: ''
          },{
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          },{
            name: 'Schroth',
            website: '',
            logo: 'assets/images/sponsors/ECP/schroth_logo.png',
            text: ''
          },{
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          },{
            name: 'SKF',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Albert Pasvahl',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Bender',
            website: '',
            logo: 'assets/images/sponsors/Partners/bender_logo.png',
            text: ''
          },
        ]
      },{
        name: "Supplier",
        supporters: [
          {
            name: 'Suter Kunststoffe AG',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'PSE',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Bourns',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Torex',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Persicaner',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ISR Brakes-Sweden',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Brainboxes',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          },{
            name: 'General Sealantis',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'EBM-Papst',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          },{
            name: 'Mädler',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Maxim Integrated',
            website: '',
            logo: '',
            text: ''
          },{
            name: '3D Connexion',
            website: '',
            logo: 'src/assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          },{
            name: 'Hirschmann',
            website: '',
            logo: 'assets/images/sponsors/Partners/hirschmann_logo.png',
            text: ''
          },
        ]
      }
    ]
  },{
    season: "2020",
    classes: [
      {
        name: "Royal First Class Partner",
        supporters: [
          {
            name: 'NXP',
            website: '',
            logo: 'assets/images/sponsors/RFCP/nxp_logo.png',
            text: '"Next Experience",dafür steht NXP.Gegründet in 2006 wuchs das niederländische Unternehmen rasant und ist bereits 9 Jahre später der größte Halbleiterhersteller Europas. Zudem zählt NXP aktuell stolze 30.000 Mitarbeiter. Automobilprodukte, wie Sensoren oder Bordnetze, sind hierbei nur ein Teil der Produkte, die NXP herstellt. Hierbei setzen die Meisten auf Sicherheit.'
          }, {
            name: 'Volkswagen',
            website: 'https://volkswagen-karriere.de/',
            logo: 'assets/images/sponsors/RFCP/vw_logo.png',
            text: 'Die Marke Volkswagen ist einer der erfolgreichsten Volumenhersteller der Welt. Die Kernmarke des Konzerns produziert an Fertigungsstandorten in 14 Ländern Fahrzeuge für Kunden in über 150 Märkten. 2017 lieferte die Marke Volkswagen Pkw 6,23 Mio. Fahrzeuge aus.'
          },{
            name: 'Frauenhofer IAPT',
            website: '',
            logo: 'assets/images/sponsors/FCP/iapt_logo.png',
            text: 'Der Bereich des Produktionsmanagements befasst sich im Besonderen mit der organisatorischen und informationstechnischen Gestaltung von Produktionsabläufen, wohingegen der Bereich der Produktionstechnik innovative Methoden und Mittel zur spanenden Bearbeitung moderner industrieller Werkstoffe entwickelt.'
          },{
            name: 'Tandler',
            website: '',
            logo: '',
            text: ''
          }
        ]
      },{
        name: "First Class Partner",
        supporters: [
          {
            name: 'Helmholtz-Zentrum Hereon',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_97d7c3c89d8241efa2ea094377f6d5ac~mv2.png',
            text: `Das Helmholtz-Zentrum Hereon betreibt internationale Spitzenforschung für eine Welt im Wandel: Rund 1.100 Beschäftigte erschaffen Wissen und Innovationen für mehr Resilienz und Nachhaltigkeit. Das wissenschaftliche Spektrum des Hereons umfasst Hochleistungswerkstoffe, Verfahren und umweltschonende Technologien für die Mobilität und neue Energiesysteme. Darüber hinaus werden Biomaterialien für die Medizin und zur Steigerung der Lebensqualität erforscht. Mithilfe von Forschung und Beratung begegnet das Hereon den Herausforderungen des Klimawandels lösungsorientiert und ermöglicht über ein umfassendes wissenschaftliches Verständnis ein nachhaltiges Management und den Schutz der Küsten- und Meeresumwelt. Grundlegend verstehen, praxisnah anwenden – das interdisziplinäre Forschungsspektrum deckt eine einzigartige Bandbreite ab.

            Als Teil eines internationalen Netzwerks und im Verbund der Helmholtz-Gemeinschaft unterstützt das Hereon mit dem Transfer seiner Expertise Institutionen aus Politik, Wirtschaft und Gesellschaft, Zukunft zu gestalten. In Schleswig-Holstein ist das 1956 gegründete Zentrum die größte außeruniversitäre Forschungseinrichtung. Neben dem Hauptsitz in Geesthacht und dem Standort Teltow bei Berlin hat das Hereon Außenstellen in Hamburg, Kiel, Berlin und Garching bei München.`
          },{
            name: 'WiTTE',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Xsens',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Siemens Industry Software GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/FCP/siemens_logo.png',
            text: 'Siemens Digital Industries Software fördert die Transformation von Unternehmen auf ihrem Weg in Richtung „Digital Enterprise“, in dem Engineering, Fertigung und Elektronikdesign bereits heute den Anforderungen der Zukunft entsprechen. Das Xcelerator Portfolio hilft Unternehmen jeder Größe bei der Entwicklung und Nutzung digitaler Zwillinge, die ihnen neue Einblicke, Möglichkeiten und Automatisierungsgrade bieten, um Innovationen voranzutreiben. Weitere Informationen zu den Produkten und Services von Siemens Digital Industries Software finden Sie unter siemens.com/software oder folgen Sie uns auf LinkedIn, Twitter, Facebook und Instagram. Siemens Digital Industries Software – Where today meets tomorrow.'
          },{
            name: 'H&R',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'IBEO Automotive',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Institut für Kunststoffe und Verbundwerkstoffe',
            website: '',
            logo: 'assets/images/sponsors/FCP/institut_für_kunststoffe_und_verbundwerkstoffe.png',
            text: `​Das Institut für Kunststoffe und Verbundwerkstoffe der Technischen Universität Hamburg erforscht die mechanischen, elektrischen und thermischen Eigenschaften von Faser Kunststoff Verbundwerkstoffen (FKV).

            Sein skalenübergreifender Ansatz beinhaltet die Werkstoffentwicklung, Herstell- und Verarbeitungsprozesse genauso wie mechanische und zerstörungsfreie Prüfungen zur Schadensentwicklung und Modellierung der Lebensdauervorhersage.`
          },{
            name: 'Altium',
            website: 'assets/images/sponsors/FCP/altium_logo.png',
            logo: 'https://static.wixstatic.com/media/673d94_a478cae83bb54f65b8be3c1882b58787~mv2.png',
            text: 'Die Firma Altium entwickelt und verkauft CAD-Tools im Bereich Elektronikdesign. Mit dem Ziel, den gesamten Designprozess in einer bedienerfreundlichen und bezahlbaren Anwendung zusammenzuführen, wird fortlaufend an der Elektronikdesign-Umgebung Altium Designer weiterentwickelt. Zuletzt wurde sie durch den Online Service Altium 365 ergänzt, welcher bereits seit 2021, kurz nach seinem Release, dem e-gnition Team in der Zusammenarbeit und im Datenmanagement weiterhilft. Zusammen mit AltiumLive, dem internetbasierten Portal für professionelle Elektronikdesigner, verbindet das Unternehmen Menschen und Technologie. Mit seinen Anwendungen schafft Altium eine Art Ökosystem, das weit über die Elektronikentwicklung hinausgeht. Sie schließen die Lücke zwischen der Design- und Fertigungsphase eines Produkts und die Lücke zwischen Menschen und Technologie.'
          },
        ]
      },{
        name: "Buisness Class Partner",
        supporters: [
          {
            name: 'Vector',
            website: '',
            logo: 'assets/images/sponsors/BCP/vector_logo.png',
            text: ''
          }, {
            name: 'GWJ Technology',
            website: '',
            logo: 'assets/images/sponsors/BCP/gwj_technology_logo.png',
            text: ''
          },{
            name: 'Autohaus Meyer',
            website: '',
            logo: 'assets/images/sponsors/FCP/autohaus_meyer_logo.png',
            text: 'Wir vom Autohaus Meyer vertreten die Marken Volkswagen, Skoda, AudiService sowie VW Nutzfahrzeuge ServicePlus und zählen zu den modernsten Autohäusern im Landkreis Harburg. Sie finden uns zwischen Hamburg und Bremen direkt an der B75 vor Tostedt. Auf einer Gesamtfläche von über 25.000 Quadratmetern präsentieren wir ca. 600 Neu- und Gebrauchtwagen der Marken Volkswagen und Skoda. Acht examinierte Verkaufsberater helfen Ihnen dabei, das richtige Auto aus der umfassenden Modellpalette zu finden. Für Servicearbeiten stehen acht Kundendienstberater mit drei Dialogannahmen und 15 Monteuren zur Verfügung. Von der Fahrzeugaufbereitung bis hin zu kompliziertesten Rahmenschäden im Karosseriebereich decken wir die gesamte Servicebreite ab.'
          },{
            name: 'Kulina',
            website: '',
            logo: 'assets/images/sponsors/FCP/kulina_logo.png',
            text: 'Das familiengeführte Unternehmen Kulina Zerspanungstechnik und Maschinenbau GmbH kann auf eine 50 jährige Geschichte zurückblicken. Die Kulina GmbH ist ein innovatives Unternehmen und ein leistungsstarker Partner für Bauteile mit höchsten Qualitätsansprüchen.'
          },{
            name: 'Simatech',
            website: '',
            logo: 'assets/images/sponsors/BCP/simatech_logo.png',
            text: ''
          },{
            name: 'Ruwac Industriestaubsauger GmbH',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Fischer Elektromotoren GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/fischer_logo.png',
            text: ''
          },{
            name: 'Estering',
            website: '',
            logo: 'assets/images/sponsors/BCP/estering_logo.png',
            text: ''
          },{
            name: 'Resonic',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Kiss soft',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ATP Elektronik',
            website: '',
            logo: 'assets/images/sponsors/BCP/atp_elektronik_logo.png',
            text: ''
          },{
            name: 'VDE Verband der Elektrotechnik Elektronik Informationstechnik e.V.',
            website: '',
            logo: 'assets/images/sponsors/BCP/vde_logo.png',
            text: ''
          }, {
            name: 'GSI SLV Nord',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Kleineberg GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/kleineberg_logo.png',
            text: ''
          },{
            name: 'Ralf Schumacher Kartcenter Schumacher\'S Motodrom GmbH',
            website: '',
            logo: 'assets/images/sponsors/BCP/ralf_schumacher_kartcenter.png',
            text: ''
          }, {
            name: 'Autodesk',
            website: '',
            logo: 'assets/images/sponsors/BCP/autodesk_logo.png',
            text: ''
          },{
            name: 'Ätzwerk',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Altair',
            website: '',
            logo: 'assets/images/sponsors/BCP/altair_logo.png',
            text: ''
          }, 
        ]
      },{
        name: "Economy class Partner",
        supporters: [
          {
            name: 'EMAG',
            website: '',
            logo: 'assets/images/sponsors/BCP/emag_logo.png',
            text: ''
          },{
            name: 'Consider Carbon',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Wiegel',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Rexim Werkzeuge',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'CTC - Composite Technology Center Stade',
            website: '',
            logo: 'src/assets/images/sponsors/ECP/ctc_stade_logo.png',
            text: ''
          },{
            name: 'DESY',
            website: '',
            logo: 'assets/images/sponsors/ECP/desy_logo.png',
            text: ''
          },{
            name: 'Horn',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Werkzeug und Maschinenbau Biehl',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'EDAG',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Richter Leiterplatten',
            website: '',
            logo: 'assets/images/sponsors/ECP/richter_leiterplatten_logo.png',
            text: ''
          },{
            name: 'Foxfactory',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Bergmann',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Becker',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'deutsche adp F + Z',
            website: '',
            logo: 'assets/images/sponsors/ECP/deutsche_adp_logo.png',
            text: ''
          },{
            name: 'Saertex',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'PCB Express',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Schulz Electronic',
            website: '',
            logo: 'assets/images/sponsors/ECP/schulz_elektronik_logo.png',
            text: ''
          },{
            name: 'Würth Elektronik',
            website: '',
            logo: 'https://static.wixstatic.com/media/673d94_234b429acb6744c5b95d9b780ee4f054~mv2.png',
            text: ''
          },{
            name: 'Nordik',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'BODO Möller Chemie GmbH',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ESSKA.de GmbH',
            website: '',
            logo: 'assets/images/sponsors/ECP/esska_logo.png',
            text: ''
          },{
            name: 'HellermannTyton',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Grimm Maschinenbau',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'AKG',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'OTO Pulverbeschichtung',
            website: '',
            logo: 'assets/images/sponsors/Partners/oto_logo.png',
            text: ''
          },{
            name: 'MeKoFe',
            website: '',
            logo: '',
            text: ''
          },

        ]
      },{
        name: "Partners",
        supporters: [
          {
            name: 'CMC Kleibetechnik',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'European thermodynamics Limited',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'VSM Abrasive',
            website: '',
            logo: 'assets/images/sponsors/Partners/vsm_abrasive_logo.png',
            text: ''
          },{
            name: 'LTN Servotechnik GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/ltn_servotechnik.png',
            text: ''
          },{
            name: 'Becktronic',
            website: '',
            logo: 'assets/images/sponsors/Partners/becktronic_logo.png',
            text: ''
          },{
            name: 'Nexperia',
            website: '',
            logo: 'assets/images/sponsors/Partners/nexperia_logo.png',
            text: ''
          },{
            name: 'Aristo',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'IMO',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Switchcraft Conxall',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Molex',
            website: '',
            logo: 'assets/images/sponsors/ECP/molex_logo.png',
            text: ''
          },{
            name: 'Hohnen',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Mapa',
            website: '',
            logo: 'assets/images/sponsors/ECP/mapa_logo.png',
            text: ''
          },{
            name: 'Salt and pepper',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'MFT',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Beta LAYOUT GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Das Filament',
            website: '',
            logo: 'assets/images/sponsors/Partners/beta_layout_logo.png',
            text: ''
          },{
            name: 'Vishay',
            website: '',
            logo: 'assets/images/sponsors/Partners/vishay_logo.png',
            text: ''
          },{
            name: 'Nortec',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'XP Power',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'TracoPower',
            website: '',
            logo: 'assets/images/sponsors/Partners/traco_power_logo.png',
            text: ''
          },{
            name: 'Trelleborg Sealing Solutions Germany',
            website: '',
            logo: 'assets/images/sponsors/Partners/trelleborg_logo.png',
            text: ''
          }, {
            name: 'Nord-Lock',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Loctite',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Genoma',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'LEM',
            website: '',
            logo: 'assets/images/sponsors/Partners/lem_logo.png',
            text: ''
          },{
            name: 'Frizlen',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Otto Ganter GmbH & Co. KG',
            website: '',
            logo: 'assets/images/sponsors/Partners/ganter_norm_logo.png',
            text: ''
          },{
            name: 'Olin Epoxy',
            website: '',
            logo: 'assets/images/sponsors/Partners/olin_logo.png',
            text: ''
          },{
            name: 'H&R',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Adchem',
            website: '',
            logo: '',
            text: ''
          },{
            name: '3M Science Applied to Life',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Althen',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Reifen Helm',
            website: '',
            logo: 'assets/images/sponsors/Partners/reifen_helm_logo.png',
            text: ''
          },{
            name: 'IBH',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Preising GmbH',
            website: '',
            logo: 'assets/images/sponsors/Partners/preising_logo.png',
            text: ''
          },{
            name: 'Bürklin Elektronik',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'SIBA',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Stahlbus',
            website: '',
            logo: 'assets/images/sponsors/Partners/stahlbus_logo.png',
            text: ''
          },{
            name: 'Igus',
            website: '',
            logo: 'assets/images/sponsors/Partners/igus_logo.png',
            text: ''
          },{
            name: 'Schroth',
            website: '',
            logo: 'assets/images/sponsors/ECP/schroth_logo.png',
            text: ''
          },{
            name: 'Haspa',
            website: '',
            logo: 'assets/images/sponsors/Partners/haspa_logo.png',
            text: ''
          },{
            name: 'SKF',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Albert Pasvahl',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Bender',
            website: '',
            logo: 'assets/images/sponsors/Partners/bender_logo.png',
            text: ''
          },
        ]
      },{
        name: "Supplier",
        supporters: [
          {
            name: 'Suter Kunststoffe AG',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'PSE',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Bourns',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Torex',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Persicaner',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ISR Brakes-Sweden',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Brainboxes',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Carbonscout',
            website: '',
            logo: 'assets/images/sponsors/Partners/carbonscout_logo.png',
            text: ''
          },{
            name: 'General Sealantis',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'EBM-Papst',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'ISA Racing',
            website: '',
            logo: 'assets/images/sponsors/Partners/isa_racing_logo.png',
            text: ''
          },{
            name: 'Mädler',
            website: '',
            logo: '',
            text: ''
          },{
            name: 'Maxim Integrated',
            website: '',
            logo: '',
            text: ''
          },{
            name: '3D Connexion',
            website: '',
            logo: 'src/assets/images/sponsors/Partners/3dconnexion_logo.png',
            text: ''
          },{
            name: 'Hirschmann',
            website: '',
            logo: 'assets/images/sponsors/Partners/hirschmann_logo.png',
            text: ''
          },
        ]
      }
    ]
  }
];
