/* =========================================================================
   DONNÉES DU PORTFOLIO — Fadime Sidikou
   =========================================================================
   C'EST LE SEUL FICHIER À MODIFIER pour ajouter une expérience, une mission
   VNU ou un certificat. Le fichier index.html et script.js n'ont PAS besoin
   d'être touchés : ils lisent automatiquement ce qu'il y a ici.

   RÈGLE D'OR : ne jamais supprimer une virgule entre deux blocs { ... },
   et toujours garder les guillemets autour des textes.
   ========================================================================= */


/* -------------------------------------------------------------------------
   1. EXPÉRIENCES PROFESSIONNELLES (postes réels, terrain)
   -------------------------------------------------------------------------
   Pour ajouter une expérience : copie un bloc { ... } entier ci-dessous
   (entre les accolades), colle-le, modifie les champs, et ajoute une
   virgule après le bloc précédent.

   badge      : "field"  = expérience terrain réelle
                "online" = expérience à distance
   bullets    : liste des tâches/réalisations (autant de lignes que tu veux)
   impact     : (optionnel) une phrase chiffrée mise en valeur — laisse ""
                si tu n'as pas de chiffre pour cette expérience
   doc        : chemin du fichier PDF de l'attestation, dans documents/
------------------------------------------------------------------------- */
var EXPERIENCES = [
  {
    dateFr: "09/2023 – 09/2025",
    dateEn: "09/2023 – 09/2025",
    badge: "field",
    roleFr: "Animateur de projet — Gestion de bases de données terrain",
    roleEn: "Project Officer — Field Database Management",
    orgFr: "ONG Homme et Développement · Parakou & Bembèrèkè, Bénin — projet de développement rural (TMG Research, Allemagne)",
    orgEn: "ONG Homme et Développement · Parakou & Bembèrèkè, Benin — rural development project (TMG Research, Germany)",
    impactFr: "150+ bénéficiaires directs suivis sur le terrain",
    impactEn: "150+ direct beneficiaries monitored in the field",
    bulletsFr: [
      "Création et gestion d'outils de collecte de données terrain (ODK, KoboCollect, SurveyCTO), incluant nettoyage et contrôle qualité des bases",
      "Mise en place de mécanismes de redevabilité communautaire : consultations, gestion des retours et suivi individualisé des bénéficiaires",
      "Rédaction de rapports de suivi périodiques et tenue des statistiques transmises à la hiérarchie",
      "Facilitation de sessions de formation, coordination avec les partenaires locaux",
      "Contribution aux campagnes de plaidoyer en faveur des droits fonciers des femmes et du développement inclusif"
    ],
    bulletsEn: [
      "Creation and management of field data collection tools (ODK, KoboCollect, SurveyCTO), including data cleaning and quality control",
      "Setting up community accountability mechanisms: consultations, feedback management, individualized monitoring of beneficiaries",
      "Drafting periodic monitoring reports and maintaining statistics shared with management",
      "Facilitating training sessions and coordinating with local partners",
      "Contributing to advocacy campaigns for women's land rights and inclusive development"
    ],
    doc: "documents/attestation-ong-hd.pdf",
    docLabelFr: "Voir l'attestation",
    docLabelEn: "View certificate of employment"
  },
  {
    dateFr: "06/2023 – 09/2023",
    dateEn: "06/2023 – 09/2023",
    badge: "field",
    roleFr: "Stagiaire",
    roleEn: "Intern",
    orgFr: "ONG Homme et Développement · Parakou",
    orgEn: "ONG Homme et Développement · Parakou",
    impactFr: "",
    impactEn: "",
    bulletsFr: ["Collecte de données terrain et rédaction des rapports d'activités"],
    bulletsEn: ["Field data collection and drafting of activity reports"],
    doc: "documents/attestation-stage-ong-hd.pdf",
    docLabelFr: "Voir l'attestation",
    docLabelEn: "View certificate of employment"
  }
  /* Pour ajouter une 3e expérience, copie un bloc ci-dessus, colle-le ici
     avec une virgule avant, et remplis les champs. */
];


/* -------------------------------------------------------------------------
   2. VOLONTARIAT INTERNATIONAL (missions VNU / ONU)
   -------------------------------------------------------------------------
   Actuellement : 2 missions VNU. Pour en ajouter une nouvelle, copie un
   bloc entier ci-dessous et remplis les champs.

   doc : utilise EXACTEMENT le même chemin de fichier que dans la liste
   CERTIFICATIONS plus bas si ce document est aussi un certificat — pour
   ne jamais avoir deux noms différents pour un même PDF.
------------------------------------------------------------------------- */
var VOLUNTEERING = [
  {
    dateFr: "JUIN 2026",
    dateEn: "JUNE 2026",
    roleFr: "Volontaire en ligne",
    roleEn: "Online Volunteer",
    orgFr: "Programme VNU · OMS Bénin",
    orgEn: "UNV Programme · WHO Benin",
    missionFr: "Campagne de sensibilisation sur les méfaits du tabac (« Génération Sans Tabac »), du 01 au 14 juin 2026",
    missionEn: "Awareness-raising campaign on the harms of tobacco (\u00ab Tobacco-Free Generation \u00bb), 1–14 June 2026",
    resultsFr: "200+ personnes touchées par la campagne ; indicateurs d'engagement suivis et rapportés",
    resultsEn: "200+ people reached by the campaign; engagement indicators tracked and reported",
    bulletsFr: [
      "Diffusion de contenus de sensibilisation digitale sur Facebook, WhatsApp et LinkedIn",
      "Suivi des indicateurs d'engagement et rédaction du rapport final"
    ],
    bulletsEn: [
      "Distribution of digital awareness content on Facebook, WhatsApp and LinkedIn",
      "Tracking of engagement indicators and drafting of the final report"
    ],
    doc: "documents/vnu-oms-benin.pdf",
    docLabelFr: "Voir le certificat",
    docLabelEn: "View certificate"
  },
  {
    dateFr: "MAI – JUIN 2026",
    dateEn: "MAY – JUNE 2026",
    roleFr: "Volontaire en ligne",
    roleEn: "Online Volunteer",
    orgFr: "Programme VNU · Niger (UNICEF / UNFPA / OMS)",
    orgEn: "UNV Programme · Niger (UNICEF / UNFPA / WHO)",
    missionFr: "Sensibilisation sur la santé maternelle, la vaccination, l'allaitement et la réduction de la mortalité maternelle, mai–juin 2026",
    missionEn: "Awareness-raising on maternal health, vaccination, breastfeeding and reducing maternal mortality, May–June 2026",
    resultsFr: "200+ personnes touchées par la campagne ; rapports réguliers à la coordination VNU",
    resultsEn: "200+ people reached by the campaign; regular reporting to UNV coordination",
    bulletsFr: [
      "Diffusion et relais des contenus de santé sur les réseaux sociaux",
      "Suivi des interactions et rapports réguliers à la coordination VNU"
    ],
    bulletsEn: [
      "Distribution and relay of health content on social media",
      "Monitoring of interactions and regular reports to UNV coordination"
    ],
    doc: "documents/vnu-niger.pdf",
    docLabelFr: "Voir le certificat",
    docLabelEn: "View certificate"
  }
  /* Pour ajouter une 3e mission VNU : copie un bloc ci-dessus, colle-le ici
     avec une virgule avant, et remplis les champs. Le compteur "2" affiché
     dans le hero de la page se mettra à jour automatiquement. */
];


/* -------------------------------------------------------------------------
   3. CERTIFICATIONS
   -------------------------------------------------------------------------
   Pour ajouter un certificat (ex. un nouveau module DataCamp terminé) :
     1. Dépose le PDF dans le dossier documents/
     2. Copie un bloc { ... } ci-dessous
     3. Remplis nameFr/nameEn, org, date, category, file
     4. Ajoute une virgule après le bloc précédent
   C'est tout — pas besoin de toucher au HTML. La carte, le filtre de
   catégorie et le compteur du hero se mettent à jour tout seuls.

   category : doit être une des valeurs suivantes (respecte l'orthographe
   exacte, c'est ce qui alimente les boutons de filtre) :
     "UNV" | "Data Analyst" | "MEAL" | "Informatique" | "Langues" | "Autres"
   Si tu inventes une nouvelle catégorie (ex. "Statistiques"), le bouton de
   filtre correspondant apparaîtra automatiquement.

   thumb : (optionnel) chemin vers une image miniature du certificat,
   ex. "documents/thumbs/datacamp.jpg". Laisse "" si tu n'en as pas —
   une icône générique s'affichera à la place.
------------------------------------------------------------------------- */
var CERTIFICATIONS = [
  {
    nameFr: "Data Analyst",
    nameEn: "Data Analyst",
    org: "DataCamp — iSheero (Python, SQL, R, Power BI, ML, visualisation)",
    dateFr: "Mai 2026",
    dateEn: "May 2026",
    category: "Data Analyst",
    file: "https://drive.google.com/drive/folders/1jTY1w5_sdX0CnqTUN7GXkPrAsblLaitZ",
    thumb: ""
  },
  {
    nameFr: "Suivi-Évaluation",
    nameEn: "Monitoring & Evaluation",
    org: "ABED Academy (planification, collecte, analyse, reporting)",
    dateFr: "2026 — en cours",
    dateEn: "2026 — in progress",
    category: "MEAL",
    file: "documents/abed-suivi-evaluation.pdf",
    thumb: ""
  },
  {
    nameFr: "Marketing Digital",
    nameEn: "Digital Marketing",
    org: "Force N Sénégal / Univ. Cheikh Hamidou Kane (SEO, e-réputation, KPI, A/B testing)",
    dateFr: "2026",
    dateEn: "2026",
    category: "Autres",
    file: "documents/marketing-digital.pdf",
    thumb: ""
  },
  {
    nameFr: "Nutrition communautaire",
    nameEn: "Community Nutrition",
    org: "ABED Academy",
    dateFr: "Fév.–Avr. 2026",
    dateEn: "Feb.–Apr. 2026",
    category: "Autres",
    file: "documents/nutrition-communautaire.pdf",
    thumb: ""
  },
  {
    nameFr: "Informatique et Internet",
    nameEn: "Computing and Internet",
    org: "Force N Sénégal / Univ. Cheikh Hamidou Kane",
    dateFr: "2026",
    dateEn: "2026",
    category: "Informatique",
    file: "documents/informatique-internet.pdf",
    thumb: ""
  },
  {
    nameFr: "Anglais professionnel",
    nameEn: "Professional English",
    org: "Centre Anglais Rapidement, Cotonou",
    dateFr: "Oct. 2025",
    dateEn: "Oct. 2025",
    category: "Langues",
    file: "documents/anglais-professionnel.pdf",
    thumb: ""
  },
  {
    nameFr: "Volontariat ONU — Génération Sans Tabac",
    nameEn: "UN Volunteering — Tobacco-Free Generation",
    org: "Programme VNU · OMS Bénin",
    dateFr: "Juin 2026",
    dateEn: "June 2026",
    category: "UNV",
    file: "documents/vnu-oms-benin.pdf",
    thumb: ""
  },
  {
    nameFr: "Volontariat ONU — Santé maternelle & infantile",
    nameEn: "UN Volunteering — Maternal & Child Health",
    org: "Programme VNU · UNICEF / UNFPA / OMS — Niger",
    dateFr: "Mai–Juin 2026",
    dateEn: "May–June 2026",
    category: "UNV",
    file: "documents/vnu-niger.pdf",
    thumb: ""
  }
  /* Exemple pour un futur module DataCamp :
  {
    nameFr: "Python Avancé",
    nameEn: "Advanced Python",
    org: "DataCamp",
    dateFr: "Août 2026",
    dateEn: "August 2026",
    category: "Data Analyst",
    file: "documents/datacamp-python-avance.pdf",
    thumb: ""
  },
  */
];
