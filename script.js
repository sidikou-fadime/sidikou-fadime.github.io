/* ---------------------------------------------------------
   Fadime Sidikou — portfolio script
   - mobile nav close-on-click
   - scroll-reveal animations (IntersectionObserver)
   - domain bar fill-in animation
   - FR / EN language toggle (French is captured live from the
     DOM as the source of truth; only English strings are
     authored below, keyed by the same data-i18n / data-i18n-list
     attributes used in index.html)
--------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile nav: close after choosing a link ---------- */
  var navToggle = document.getElementById('nav-toggle');
  document.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (navToggle) navToggle.checked = false;
    });
  });

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- domain bar fill animation ---------- */
  var domainFills = document.querySelectorAll('.domain-fill');
  if ('IntersectionObserver' in window && domainFills.length) {
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.style.width = el.getAttribute('data-pct') + '%';
          dio.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    domainFills.forEach(function (el) { dio.observe(el); });
  } else {
    domainFills.forEach(function (el) { el.style.width = el.getAttribute('data-pct') + '%'; });
  }

  /* =========================================================
     LANGUAGE TOGGLE (FR default / EN dictionary)
  ========================================================= */

  var EN = {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.volunteering': 'UN Volunteering',
    'nav.education': 'Education',
    'nav.certifications': 'Certifications',
    'nav.skills': 'Skills',
    'nav.orientations': 'Orientations',
    'nav.values': 'Values',
    'nav.objectives': 'Objectives',
    'nav.projects': 'Projects',
    'nav.github': 'GitHub',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Cotonou, Benin — Social Development / Research / MEAL',
    'hero.tagline': 'Sociologist-anthropologist working across social development, social research, monitoring & evaluation (MEAL) and data analysis — in service of communities and international organizations.',
    'hero.meta.availability': 'Available quickly',
    'hero.meta.education': 'BA Sociology-Anthropology — University of Parakou',
    'hero.cvbutton': 'Download my CV ↓',
    'hero.stat1.label': 'Years of rural fieldwork',
    'hero.stat2.label': 'UNV missions — UN (WHO / UNFPA / UNICEF)',
    'hero.stat3.label': 'Certifications obtained or in progress',
    'hero.photo.label': 'Professional photo',
    'hero.photo.note': 'To be added: documents/photo-profil.jpg',

    'about.title': 'About',
    'about.p1': 'Trained as a sociologist-anthropologist, I work at the intersection of social research, community development and monitoring & evaluation, gained through rural development projects in northern and central Benin.',
    'about.p2': 'I am originally from Sinendé, in northern Benin, where Bariba is my native language and I also have working knowledge of Dendi — a concrete asset for projects run in that region, where community trust is also built in the local language.',
    'about.p3': 'I am now building on this field foundation with a Data Analyst training (Python, SQL, R, Power BI) and a specialization in monitoring & evaluation, aiming for hybrid data / MEAL roles within UN agencies and international NGOs.',
    'about.fact.birth.k': 'Born',
    'about.fact.based.k': 'Based in',
    'about.fact.education.k': 'Education',
    'about.fact.education.v': 'BA Sociology-Anthropology, UP (2020–2024)',
    'about.fact.path.k': 'Track',
    'about.fact.path.v': 'Social mediation & development facilitation',
    'about.fact.status.k': 'Status',
    'about.fact.status.v': 'Single, no children',
    'about.fact.availability.k': 'Availability',
    'about.fact.availability.v': 'Quickly',

    'experience.title': 'Professional experience',
    'experience.intro': 'Field-based roles, on the ground, with rural communities in northern and central Benin.',
    'experience.badge.field': 'Real field experience',

    'exp1.role': 'Project Officer — Field Database Management',
    'exp1.org': 'ONG Homme et Développement · Parakou & Bembèrèkè, Benin — rural development project (TMG Research, Germany)',
    'exp1.impact': '150+ direct beneficiaries monitored in the field',
    'exp1.bullets': [
      'Creation and management of field data collection tools (ODK, KoboCollect, SurveyCTO), including data cleaning and quality control',
      'Setting up community accountability mechanisms: consultations, feedback management, individualized monitoring of beneficiaries',
      'Drafting periodic monitoring reports and maintaining statistics shared with management',
      'Facilitating training sessions and coordinating with local partners',
      'Contributing to advocacy campaigns for women\u2019s land rights and inclusive development'
    ],
    'exp1.doc': 'View certificate of employment',

    'exp2.role': 'Intern',
    'exp2.org': 'ONG Homme et Développement · Parakou',
    'exp2.bullets': ['Field data collection and drafting of activity reports'],
    'exp2.doc': 'View certificate of employment',

    'volunteering.title': 'UN Volunteering (UNV)',
    'volunteering.intro': 'Three international volunteering missions carried out for United Nations agencies — a strength of this profile.',
    'volunteering.badge.online': 'UN online volunteering',
    'volunteering.field.role': 'Role',
    'volunteering.field.org': 'Organization',
    'volunteering.field.mission': 'Mission',
    'volunteering.field.results': 'Results',

    'vol1.role': 'Online Volunteer',
    'vol1.org': 'UNV Programme · WHO Benin',
    'vol1.mission': 'Awareness-raising campaign on the harms of tobacco (\u00ab Tobacco-Free Generation \u00bb), 1–14 June 2026',
    'vol1.results': '200+ people reached by the campaign; engagement indicators tracked and reported',
    'vol1.bullets': [
      'Distribution of digital awareness content on Facebook, WhatsApp and LinkedIn',
      'Tracking of engagement indicators and drafting of the final report'
    ],
    'vol1.doc': 'View certificate',

    'vol2.role': 'Online Volunteer',
    'vol2.org': 'UNV Programme · Niger (UNICEF / UNFPA / WHO)',
    'vol2.mission': 'Awareness-raising on maternal health, vaccination, breastfeeding and reducing maternal mortality, May–June 2026',
    'vol2.results': '200+ people reached by the campaign; regular reporting to UNV coordination',
    'vol2.bullets': [
      'Distribution and relay of health content on social media',
      'Monitoring of interactions and regular reports to UNV coordination'
    ],
    'vol2.doc': 'View certificate',

    'education.title': 'Education',
    'edu1.role': 'BA in Sociology-Anthropology',
    'edu1.org': 'University of Parakou (UP/FLASH), Benin',
    'edu1.track': 'Track: Social mediation and development facilitation',
    'edu1.dates': '2020 – 2024',

    'certifications.title': 'Certifications',
    'certifications.intro': 'Verified certificates, viewable individually.',
    'cert.viewbtn': 'View certificate',
    'cert1.name': 'Data Analyst',
    'cert1.org': 'DataCamp — iSheero (Python, SQL, R, Power BI, ML, data visualization)',
    'cert1.date': 'May 2026',
    'cert2.name': 'Monitoring & Evaluation',
    'cert2.org': 'ABED Academy (planning, data collection, analysis, reporting)',
    'cert2.date': '2026 — in progress',
    'cert3.name': 'Digital Marketing',
    'cert3.org': 'Force N Sénégal / Cheikh Hamidou Kane University (SEO, online reputation, KPIs, A/B testing)',
    'cert3.date': '2026',
    'cert4.name': 'Community Nutrition',
    'cert4.org': 'ABED Academy',
    'cert4.date': 'Feb.–Apr. 2026',
    'cert5.name': 'Computing and Internet',
    'cert5.org': 'Force N Sénégal / Cheikh Hamidou Kane University',
    'cert5.date': '2026',
    'cert6.name': 'Professional English',
    'cert6.org': 'Centre Anglais Rapidement, Cotonou',
    'cert6.date': 'Oct. 2025',
    'cert7.name': 'UN Volunteering — Tobacco-Free Generation',
    'cert7.org': 'UNV Programme · WHO Benin',
    'cert7.date': 'June 2026',
    'cert8.name': 'UN Volunteering — Maternal & Child Health',
    'cert8.org': 'UNV Programme · UNICEF / UNFPA / WHO — Niger',
    'cert8.date': 'May–June 2026',
    'certifications.note': 'Thumbnails show once the certificate PDFs are added to the documents/ folder — see the sharing instructions.',

    'skills.title': 'Skills',
    'skills.subhead.domains': 'Profile breakdown',
    'skills.domain1': 'Database management',
    'skills.domain2': 'Monitoring & evaluation (MEAL)',
    'skills.domain3': 'Community accountability',
    'skills.domain4': 'Digital communication',
    'skills.subhead.tools': 'Tools & software',
    'skills.subhead.languages': 'Languages',
    'skills.lang.native': 'native',
    'skills.subhead.strengths': 'Key strengths',
    'skills.strength1.k': 'Data',
    'skills.strength1.v': 'Collection, cleaning, quality control (ODK, Kobo, SurveyCTO, Excel)',
    'skills.strength2.k': 'Community',
    'skills.strength2.v': '2+ years with rural communities, complaint mechanisms',
    'skills.strength3.k': 'MEAL',
    'skills.strength3.v': 'Monitoring, evaluation, accountability and learning standards',

    'orientations.title': 'Orientations',
    'orientations.intro': 'Three complementary domains, at different horizons — a built trajectory, not a scattered one.',
    'orient1.title': 'Monitoring & Evaluation (MEAL)',
    'orient1.horizon': 'Short term — current priority',
    'orient1.text': 'Strong alignment with the BA in sociology-anthropology, field experience at ONG Homme et Développement and the UNV missions already completed. The ongoing ABED training closes the last methodological gap.',
    'orient2.title': 'Communication / Digital Marketing',
    'orient2.horizon': 'Medium term',
    'orient2.text': 'Solid base thanks to the digital marketing certificate and writing experience for UNV campaigns. Analytics tools (Meta Business Suite, Google Analytics) are the next practice step.',
    'orient3.title': 'Data Analyst',
    'orient3.horizon': 'Long term — actively training',
    'orient3.text': 'Ongoing DataCamp training (Python and SQL Introduction and Intermediate completed; R and Power BI still to come). One database already built. Two personal projects under construction to build a first data portfolio.',

    'values.title': 'Values',
    'value1.title': 'Integrity',
    'value1.text': 'Rigorous, transparent work with communities and partners.',
    'value2.title': 'Community engagement',
    'value2.text': 'Listening to and involving communities at every stage.',
    'value3.title': 'Scientific rigor',
    'value3.text': 'Sound methods, verified data, honest reporting.',
    'value4.title': 'Teamwork',
    'value4.text': 'Coordination with partners, teams and institutions.',
    'value5.title': 'Continuous learning',
    'value5.text': 'Ongoing training in data, MEAL and digital tools.',

    'objectives.title': 'Professional objectives',
    'objectives.text': 'I am looking for roles that combine field experience, social research and data — within international NGOs, United Nations agencies, or research and social development structures, with a particular focus on MEAL and Data for Development.',
    'obj.tag1': 'NGOs',
    'obj.tag2': 'United Nations',
    'obj.tag3': 'Research',
    'obj.tag4': 'Social development',
    'obj.tag5': 'MEAL',
    'obj.tag6': 'Data for Development',

    'projects.title': 'Projects',
    'proj1.tag': 'Rural development',
    'proj1.title': 'Field databases — Parakou & Bembèrèkè',
    'proj1.status': 'Completed',
    'proj1.context.k': 'Context', 'proj1.context.v': 'Rural development project with TMG Research (Germany), within ONG Homme et Développement.',
    'proj1.objectives.k': 'Objectives', 'proj1.objectives.v': 'Reliable field data collection and individualized monitoring of beneficiaries.',
    'proj1.methods.k': 'Methods', 'proj1.methods.v': 'ODK, KoboCollect and SurveyCTO tools; data cleaning and quality control; community accountability mechanisms.',
    'proj1.results.k': 'Results', 'proj1.results.v': '150+ direct beneficiaries monitored on the ground.',
    'proj1.skills.k': 'Skills used', 'proj1.skills.v': 'Data collection, database management, community facilitation, reporting.',

    'proj2.tag': 'Data Analyst',
    'proj2.title': 'Data project portfolio (Python & SQL)',
    'proj2.status': 'In progress',
    'proj2.context.k': 'Context', 'proj2.context.v': 'Personal projects built as part of the DataCamp Data Analyst training.',
    'proj2.objectives.k': 'Objectives', 'proj2.objectives.v': 'Build a first public portfolio of data projects.',
    'proj2.methods.k': 'Methods', 'proj2.methods.v': 'Python (data analysis) and SQL (querying); one database already built.',
    'proj2.results.k': 'Results', 'proj2.results.v': 'To be completed once the projects are published.',
    'proj2.skills.k': 'Skills used', 'proj2.skills.v': 'Python, SQL, data cleaning and analysis.',

    'github.title': 'Data projects (GitHub)',
    'github.intro': 'A space reserved for upcoming Python, SQL and Power BI projects, to be published progressively.',
    'gh1.tag': 'Python', 'gh1.title': 'Data analysis project', 'gh1.text': 'In progress — link coming soon.',
    'gh2.tag': 'SQL', 'gh2.title': 'Database querying project', 'gh2.text': 'In progress — link coming soon.',
    'gh3.tag': 'Power BI', 'gh3.title': 'Dashboard / visualization project', 'gh3.text': 'Planned — link coming soon.',
    'github.link': 'Link to come',

    'contact.title': 'Contact',
    'contact.email.k': 'Email',
    'contact.phone.k': 'Phone',
    'contact.whatsapp.k': 'WhatsApp',
    'contact.linkedin.k': 'LinkedIn',
    'contact.linkedin.v': 'View my profile',
    'contact.facebook.k': 'Facebook',
    'contact.facebook.v': 'View my profile',
    'contact.location.k': 'Location',
    'contact.availability': 'Available quickly for a mission or a position',

    'footer.rights': '© 2026 Fadime Sidikou'
  };

  var STORAGE_KEY = 'fs_portfolio_lang';
  var frCache = {};
  var frListCache = {};

  function captureFrench() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in frCache)) frCache[key] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-list]').forEach(function (ul) {
      var key = ul.getAttribute('data-i18n-list');
      if (!(key in frListCache)) {
        frListCache[key] = Array.prototype.map.call(ul.querySelectorAll('li'), function (li) {
          return li.innerHTML;
        });
      }
    });
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'fr');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'en' && EN[key]) {
        el.innerHTML = EN[key];
      } else if (frCache[key] !== undefined) {
        el.innerHTML = frCache[key];
      }
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function (ul) {
      var key = ul.getAttribute('data-i18n-list');
      var items = (lang === 'en' && EN[key]) ? EN[key] : frListCache[key];
      if (!items) return;
      ul.innerHTML = '';
      items.forEach(function (text) {
        var li = document.createElement('li');
        li.innerHTML = text;
        ul.appendChild(li);
      });
    });

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  captureFrench();

  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  var savedLang = null;
  try { savedLang = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  if (savedLang === 'en') applyLanguage('en');
  else applyLanguage('fr');
});
