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
     RENDU DYNAMIQUE À PARTIR DE data.js
     (EXPERIENCES, VOLUNTEERING, CERTIFICATIONS)
  ========================================================= */

  var BADGE_LABELS = {
    field: { fr: 'Expérience terrain réelle', en: 'Real field experience' },
    online: { fr: 'Volontariat en ligne — ONU', en: 'UN online volunteering' }
  };
  var CATEGORY_LABELS = {
    'UNV': { fr: 'UNV', en: 'UNV' },
    'Data Analyst': { fr: 'Data Analyst', en: 'Data Analyst' },
    'MEAL': { fr: 'MEAL', en: 'MEAL' },
    'Informatique': { fr: 'Informatique', en: 'IT' },
    'Langues': { fr: 'Langues', en: 'Languages' },
    'Autres': { fr: 'Autres', en: 'Other' }
  };
  var ALL_LABEL = { fr: 'Tous', en: 'All' };
  var VIEW_CERT_LABEL = { fr: 'Voir le certificat', en: 'View certificate' };

  var activeCatFilter = 'all';

  function renderExperiences(lang) {
    var container = document.getElementById('experiences-list');
    if (!container || typeof EXPERIENCES === 'undefined') return;
    container.innerHTML = EXPERIENCES.map(function (exp) {
      var bullets = (lang === 'en' ? exp.bulletsEn : exp.bulletsFr) || [];
      var bulletsHtml = bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('');
      var badgeLabel = BADGE_LABELS[exp.badge] ? BADGE_LABELS[exp.badge][lang] : '';
      var impact = lang === 'en' ? exp.impactEn : exp.impactFr;
      var impactHtml = impact ? '<div class="tl-impact">' + impact + '</div>' : '';
      var date = lang === 'en' ? exp.dateEn : exp.dateFr;
      var role = lang === 'en' ? exp.roleEn : exp.roleFr;
      var org = lang === 'en' ? exp.orgEn : exp.orgFr;
      var docLabel = lang === 'en' ? exp.docLabelEn : exp.docLabelFr;
      return '<div class="tl-item reveal">' +
        '<div class="tl-date">' + date + '</div>' +
        '<div>' +
          '<span class="tl-badge ' + exp.badge + '">' + badgeLabel + '</span>' +
          '<div class="tl-role">' + role + '</div>' +
          '<div class="tl-org">' + org + '</div>' +
          impactHtml +
          '<ul>' + bulletsHtml + '</ul>' +
          '<a class="doc-btn" href="' + exp.doc + '" target="_blank" rel="noopener">' + docLabel + ' ↗</a>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderVolunteering(lang) {
    var container = document.getElementById('volunteering-list');
    if (!container || typeof VOLUNTEERING === 'undefined') return;
    container.innerHTML = VOLUNTEERING.map(function (vol) {
      var bullets = (lang === 'en' ? vol.bulletsEn : vol.bulletsFr) || [];
      var bulletsHtml = bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('');
      var date = lang === 'en' ? vol.dateEn : vol.dateFr;
      var role = lang === 'en' ? vol.roleEn : vol.roleFr;
      var org = lang === 'en' ? vol.orgEn : vol.orgFr;
      var mission = lang === 'en' ? vol.missionEn : vol.missionFr;
      var results = lang === 'en' ? vol.resultsEn : vol.resultsFr;
      var docLabel = lang === 'en' ? vol.docLabelEn : vol.docLabelFr;
      return '<div class="tl-item reveal">' +
        '<div class="tl-date">' + date + '</div>' +
        '<div>' +
          '<span class="tl-badge online">' + BADGE_LABELS.online[lang] + '</span>' +
          '<div class="tl-role">' + role + '</div>' +
          '<div class="tl-org">' + org + '</div>' +
          '<p style="font-size:14.5px; color:var(--ink-soft); margin-top:10px;">' + mission + '</p>' +
          '<div class="tl-results">' + results + '</div>' +
          '<ul>' + bulletsHtml + '</ul>' +
          '<a class="doc-btn" href="' + vol.doc + '" target="_blank" rel="noopener">' + docLabel + ' ↗</a>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function getCertCategories() {
    var cats = [];
    if (typeof CERTIFICATIONS === 'undefined') return cats;
    CERTIFICATIONS.forEach(function (c) {
      if (cats.indexOf(c.category) === -1) cats.push(c.category);
    });
    return cats;
  }

  function renderCertFilters(lang) {
    var filterBar = document.getElementById('cert-filters');
    if (!filterBar) return;
    var cats = getCertCategories();
    var html = '<button class="cert-filter-btn' + (activeCatFilter === 'all' ? ' active' : '') + '" data-cat="all">' + (lang === 'en' ? 'Certificates' : 'Certificats') + '</button>';
    filterBar.innerHTML = html;
    filterBar.querySelectorAll('.cert-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCatFilter = btn.getAttribute('data-cat');
        renderCertFilters(currentLang);
        renderCertGrid(currentLang);
      });
    });
  }

  function renderCertGrid(lang) {
    var grid = document.getElementById('cert-grid');
    if (!grid || typeof CERTIFICATIONS === 'undefined') return;
    var items = CERTIFICATIONS.filter(function (c) {
      return activeCatFilter === 'all' || c.category === activeCatFilter;
    });
    grid.innerHTML = items.map(function (c) {
      var name = lang === 'en' ? c.nameEn : c.nameFr;
      var date = lang === 'en' ? c.dateEn : c.dateFr;
      var thumbHtml = c.thumb
        ? '<img src="' + c.thumb + '" alt="">'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>';
      return '<div class="cert-card reveal">' +
        '<div class="cert-thumb">' + thumbHtml + '</div>' +
        '<div class="cert-body">' +
          '<div class="cert-name">' + name + '</div>' +
          '<div class="cert-org">' + c.org + '</div>' +
          '<div class="cert-date">' + date + '</div>' +
          '<a class="cert-doc" href="' + c.file + '" target="_blank" rel="noopener">' + VIEW_CERT_LABEL[lang] + '</a>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function updateHeroStats() {
    var mEl = document.getElementById('stat-missions');
    var cEl = document.getElementById('stat-certs');
    if (mEl && typeof VOLUNTEERING !== 'undefined') mEl.textContent = VOLUNTEERING.length;
    if (cEl && typeof CERTIFICATIONS !== 'undefined') cEl.textContent = CERTIFICATIONS.length;
  }

  function observeNewReveals(root) {
    var els = root.querySelectorAll('.reveal:not(.visible)');
    if ('IntersectionObserver' in window) {
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  var currentLang = 'fr';

  function renderDynamicSections(lang) {
    currentLang = lang;
    renderExperiences(lang);
    renderVolunteering(lang);
    renderCertFilters(lang);
    renderCertGrid(lang);
    updateHeroStats();
    observeNewReveals(document.getElementById('experiences-list') || document.body);
    observeNewReveals(document.getElementById('volunteering-list') || document.body);
    observeNewReveals(document.getElementById('cert-grid') || document.body);
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
    'about.p1': 'Sociologist-anthropologist by training, I work at the crossroads of social research, communication, digital mobilization, community development, and monitoring and evaluation, acquired through development projects.',
    'about.p2': 'Originally from the commune of Sinendé in Northern Benin, I speak Bariba as my native language and have notions of Dendi and Fon. A concrete asset for building trust in both Northern and Southern Benin, where community trust is also forged through local languages.',
    'about.p3': 'Today, I am complementing this field experience with Data Analyst training (Python, SQL, R, Power BI) and a specialization in monitoring and evaluation, aiming to transition into hybrid data / MEAL and digital communication roles.',
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

    'volunteering.title': 'UN Volunteering (UNV)',
    'volunteering.intro': 'International volunteering missions carried out for United Nations agencies — a strength of this profile.',

    'education.title': 'Education',
    'edu1.role': 'BA in Sociology-Anthropology',
    'edu1.org': 'University of Parakou (UP/FLASH), Benin',
    'edu1.track': 'Track: Social mediation and development facilitation',
    'edu1.dates': '2020 – 2024',

    'certifications.title': 'Certifications',
    'certifications.intro': 'Verified certificates, viewable individually.',
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
     
    'github.title': 'Portfolio of projects ',
    'github.intro': 'A space reserved for upcoming Python, SQL and Power BI projects.',
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

    renderDynamicSections(lang);

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
