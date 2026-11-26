/**
 * Homepage copy — English, Telugu, Kannada side by side.
 * Telugu: Zonity → జోనిటి. Zonited stays Latin in titles/logo/headings; జొనైటెడ్ in body copy.
 * Experts: edit only the te: / kn: values (natural wording, not literal translation).
 * Add a language later: new field on each key + a LOCALES row.
 */
(function (global) {
  var WA = "https://wa.me/918310880446?text=";

  global.ZonitedI18n = global.ZonitedI18n || {};
  global.ZonitedI18n.STORAGE_KEY = "zonited-lang";
  global.ZonitedI18n.DEFAULT_LANG = "en";
  global.ZonitedI18n.WA_PREFIX = WA;

  // Order by language code (en, kn, te) — stable, neutral default for the select.
  global.ZonitedI18n.LOCALES = [
    { code: "en", label: "English", short: "EN" },
    { code: "kn", label: "ಕನ್ನಡ", short: "KN" },
    { code: "te", label: "తెలుగు", short: "TE" },
  ];

  global.ZonitedI18n.STRINGS = {
    "meta.title": {
      en: "Zonited | Everything you need, around you",
      te: "Zonited | మీకు కావాల్సినవన్నీ మీ దగ్గరకే",
      kn: "Zonited | ನಿಮ್ಮ ಸುತ್ತಲೂ ಬೇಕಾದದ್ದೆಲ್ಲ",
    },
    "meta.description": {
      en: "Simplify neighborhood life — local services and shared workflows, in one community.",
      te: "మీరున్న చోటికే మీకు కావాల్సిన services అన్నీ సులువుగా, దగ్గరగా.",
      kn: "ಸ್ಥಳೀಯ ಸೇವೆಗಳು ಮತ್ತು ಹಂಚಿದ ಕೆಲಸಗಳು — ಒಂದೇ ಸಮುದಾಯದಲ್ಲಿ ನೆರೆಹೊರೆಯ ಜೀವನವನ್ನು ಸರಳಗೊಳಿಸಿ.",
    },
    "meta.ogImageAlt": {
      en: "Zonited — everything you need, around you",
      te: "Zonited — మీకు కావాల్సినవన్నీ మీ దగ్గరకే",
      kn: "Zonited — ನಿಮ್ಮ ಸುತ್ತಲೂ ಬೇಕಾದದ್ದೆಲ್ಲ",
    },

    "a11y.skip": {
      en: "Skip to content",
      te: "ముఖ్య విషయానికి వెళ్లండి",
      kn: "ವಿಷಯಕ್ಕೆ ಹೋಗಿ",
    },
    "a11y.brandHome": {
      en: "Zonited home",
      te: "Zonited హోమ్",
      kn: "Zonited ಮುಖಪುಟ",
    },
    "a11y.primaryNav": {
      en: "Primary",
      te: "ప్రధాన నావిగేషన్",
      kn: "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಷನ್",
    },
    "a11y.heroActions": {
      en: "Get started on WhatsApp",
      te: "WhatsAppలో ప్రారంభించండి",
      kn: "WhatsAppನಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿ",
    },
    "a11y.aboutBand": {
      en: "What Zonited and a Zonity are",
      te: "Zonited మరియు జోనిటి అంటే ఏమిటి?",
      kn: "Zonited ಮತ್ತು Zonity ಎಂದರೇನು",
    },
    "a11y.footerNav": { en: "Site", te: "సైట్", kn: "ಸೈಟ್" },
    "a11y.lang": { en: "Language", te: "భాష", kn: "ಭಾಷೆ" },

    "nav.howItWorks": {
      en: "How it works",
      te: "ఎలా పనిచేస్తుంది",
      kn: "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    },
    "nav.services": { en: "Services", te: "సేవలు", kn: "ಸೇವೆಗಳು" },
    "nav.about": { en: "About", te: "గురించి", kn: "ಬಗ್ಗೆ" },

    "hero.headline": {
      en: "Everything you need, around you.",
      te: "మీకు కావాల్సినవన్నీ, మీ చుట్టూనే.",
      kn: "ನಿಮಗೆ ಬೇಕಾದದ್ದೆಲ್ಲ, ನಿಮ್ಮ ಸುತ್ತಲೇ.",
    },
    "hero.support": {
      en: "Simplify neighborhood life — local services and shared workflows, in one community.",
      te: "మీరున్న చోటికే మీకు కావాల్సిన services అన్నీ సులువుగా, దగ్గరగా.",
      kn: "ನೆರೆಹೊರೆಯ ಜೀವನವನ್ನು ಸರಳಗೊಳಿಸಿ — ಸ್ಥಳೀಯ ಸೇವೆಗಳು, ಹಂಚಿದ ಕೆಲಸಗಳು, ಒಂದೇ ಸಮುದಾಯದಲ್ಲಿ.",
    },
    "cta.join.label": {
      en: "Join a Zonity",
      te: "జోనిటిలో చేరండి",
      kn: "Zonityಗೆ ಸೇರಿ",
    },
    "cta.join.prefill": {
      en: "Hi, I would like to learn more about joining a Zonity.",
      te: "హాయ్, నేను జోనిటిలో చేరడం గురించి మరింత తెలుసుకోవాలనుకుంటున్నాను.",
      kn: "ಹಾಯ್, ನಾನು Zonityಗೆ ಸೇರುವ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುತ್ತೇನೆ.",
    },
    "cta.provider.label": {
      en: "Become a provider",
      te: "ప్రొవైడర్ అవ్వండి",
      kn: "ಪ್ರೊವೈಡರ್ ಆಗಿ",
    },
    "cta.provider.prefill": {
      en: "Hi, I would like to register interest as a partner / operator / vendor for Zonity.",
      te: "హాయ్, నేను జోనిటికి భాగస్వామి / ఆపరేటర్ / విక్రేతగా ఆసక్తి నమోదు చేయాలనుకుంటున్నాను.",
      kn: "ಹಾಯ್, ನಾನು Zonityಗೆ ಪಾಲುದಾರ / ಆಪರೇಟರ್ / ಮಾರಾಟಗಾರರಾಗಿ ಆಸಕ್ತಿ ನೋಂದಾಯಿಸಲು ಬಯಸುತ್ತೇನೆ.",
    },

    "zonity.eyebrow": {
      en: "What is a Zonity",
      te: "జోనిటి అంటే ఏమిటి?",
      kn: "Zonity ಎಂದರೇನು",
    },
    "zonity.heading": {
      en: "Your neighborhood zone, connected",
      te: "మీరున్న చోటు, ఒకటిగా కలిసి",
      kn: "ನಿಮ್ಮ ನೆರೆಹೊರೆ ವಲಯ, ಸಂಪರ್ಕಿತ",
    },
    "zonity.diagramAlt": {
      en: "Zonity diagram: a local colony map connecting residents, shops, and services around a shared place",
      te: "జోనిటి diagram: నివసిస్తున్నవారు, దుకాణాలు, సేవలను ఒకే స్థలంలో అన్నింటినీ కలిపే స్థానిక మ్యాప్.",
      kn: "Zonity ರೇಖಾಚಿತ್ರ: ನಿವಾಸಿಗಳು, ಅಂಗಡಿಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದ ಸುತ್ತಲೂ ಕೊಂಡಿಸುವ ಸ್ಥಳೀಯ ಕಾಲೋನಿ ನಕ್ಷೆ",
    },

    "services.eyebrow": { en: "Services", te: "సేవలు", kn: "ಸೇವೆಗಳು" },
    "services.heading": {
      en: "Services you may use or offer",
      te: "మీరు ఉపయోగించగల లేదా అందించగల సేవలు",
      kn: "ನೀವು ಬಳಸಬಹುದಾದ ಅಥವಾ ನೀಡಬಹುದಾದ ಸೇವೆಗಳು",
    },
    "services.legendLive": {
      en: "Available",
      te: "అందుబాటులో",
      kn: "ಲಭ್ಯ",
    },
    "services.legendSoon": {
      en: "Upcoming",
      te: "త్వరలో",
      kn: "ಶೀಘ್ರದಲ್ಲೇ",
    },

    "services.inside.cue": { en: "Inside", te: "లోపల", kn: "ಒಳಗೆ" },
    "services.inside.heading": {
      en: "Within your Zonity",
      te: "మీ జోనిటి లోపల",
      kn: "ನಿಮ್ಮ Zonity ಒಳಗೆ",
    },
    "services.outside.cue": {
      en: "Into your zone",
      te: "మీ జోన్‌లోకి",
      kn: "ನಿಮ್ಮ ವಲಯಕ್ಕೆ",
    },
    "services.outside.heading": {
      en: "From providers outside your Zonity",
      te: "మీ జోనిటి బయటి ప్రొవైడర్ల నుండి",
      kn: "ನಿಮ್ಮ Zonity ಹೊರಗಿನ ಪ್ರೊವೈಡರ್‌ಗಳಿಂದ",
    },
    "services.across.cue": {
      en: "Citywide & trade",
      te: "నగరం & వ్యాపారం",
      kn: "ನಗರವ್ಯಾಪಿ & ವ್ಯಾಪಾರ",
    },
    "services.across.heading": {
      en: "Across Zonities on the platform",
      te: "ప్లాట్‌ఫారమ్‌లో జోనిటిల మధ్య",
      kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನಲ್ಲಿ Zonityಗಳ ನಡುವೆ",
    },

    "services.rentals.label": {
      en: "Rentals in your Zonity",
      te: "మీ జోనిటిలో అద్దెలు",
      kn: "ನಿಮ್ಮ Zonityಯಲ್ಲಿ ಬಾಡಿಗೆ",
    },
    "services.rentals.tip": {
      en: "List or find homes or shops to rent within your Zonity. Optionally make the listing visible across other Zonities.",
      te: "మీ జోనిటిలో అద్దెకు ఇళ్లు లేదా దుకాణాలు జాబితా చేయండి లేదా కనుగొనండి. కావాలంటే ఇతర జోనిటిలకు కూడా కనిపించేలా చేయండి.",
      kn: "ನಿಮ್ಮ Zonityಯಲ್ಲಿ ಬಾಡಿಗೆಗೆ ಮನೆಗಳು ಅಥವಾ ಅಂಗಡಿಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ ಅಥವಾ ಹುಡುಕಿ. ಬೇಕಾದರೆ ಇತರ Zonityಗಳಿಗೂ ಕಾಣುವಂತೆ ಮಾಡಿ.",
    },
    "services.fund.label": {
      en: "Fund collection",
      te: "నిధి సేకరణ",
      kn: "ನಿಧಿ ಸಂಗ್ರಹ",
    },
    "services.fund.tip": {
      en: "Pool money with neighbors for shared needs — festivals, repairs, gifts, or community projects — with clear tracking inside your Zonity.",
      te: "పండుగలు, మరమ్మతులు, బహుమతులు లేదా సమూహ ప్రాజెక్టుల కోసం పొరుగువారితో డబ్బు కలపండి — మీ జోనిటిలో స్పష్టమైన ట్రాకింగ్‌తో.",
      kn: "ಹಬ್ಬಗಳು, ದುರಸ್ತಿ, ಉಡುಗೊರೆಗಳು ಅಥವಾ ಸಮುದಾಯ ಯೋಜನೆಗಳಿಗೆ ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ಹಣ ಸಂಗ್ರಹಿಸಿ — ನಿಮ್ಮ Zonityಯಲ್ಲಿ ಸ್ಪಷ್ಟ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ.",
    },
    "services.waterBill.label": {
      en: "Water bill collection",
      te: "నీటి బిల్లు సేకరణ",
      kn: "ನೀರಿನ ಬಿಲ್ ಸಂಗ್ರಹ",
    },
    "services.waterBill.tip": {
      en: "Pay a periodic bill toward common water sourcing for your Zonity — with clear tracking, so you avoid messy WhatsApp threads and confusion.",
      te: "మీ జోనిటి ఉమ్మడి నీటి సరఫరా కోసం కాలానుగుణ బిల్లు చెల్లించండి — స్పష్టమైన ట్రాకింగ్‌తో, WhatsApp గందరగోళం లేకుండా.",
      kn: "ನಿಮ್ಮ Zonityಯ ಸಾಮಾನ್ಯ ನೀರು ಪೂರೈಕೆಗೆ ನಿಯತಕಾಲಿಕ ಬಿಲ್ ಪಾವತಿಸಿ — ಸ್ಪಷ್ಟ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ, WhatsApp ಗೊಂದಲವಿಲ್ಲದೆ.",
    },
    "services.homeCook.label": {
      en: "Home cook / community kitchen",
      te: "ఇంటి వంట / సమూహ వంటశాల",
      kn: "ಮನೆಯ ಅಡುಗೆ / ಸಮುದಾಯ ಅಡುಗೆಮನೆ",
    },
    "services.homeCook.tip": {
      en: "Order home-cooked meals from neighbors, or run a small community kitchen that serves people in your Zonity.",
      te: "పొరుగువారి నుండి ఇంటి వంట ఆర్డర్ చేయండి, లేదా మీ జోనిటి వారికి అందించే చిన్న సమూహ వంటశాల నడపండి.",
      kn: "ನೆರೆಹೊರೆಯವರಿಂದ ಮನೆಯ ಅಡುಗೆ ಆರ್ಡರ್ ಮಾಡಿ, ಅಥವಾ ನಿಮ್ಮ Zonity ಜನರಿಗೆ ಸೇವೆ ನೀಡುವ ಸಣ್ಣ ಸಮುದಾಯ ಅಡುಗೆಮನೆ ನಡೆಸಿ.",
    },
    "services.activities.label": {
      en: "Community activities",
      te: "సమూహ కార్యక్రమాలు",
      kn: "ಸಮುದಾಯ ಚಟುವಟಿಕೆಗಳು",
    },
    "services.activities.tip": {
      en: "Create and join local activities — sports, walks, kids’ play, festivals, and get-togethers — with people in your Zonity.",
      te: "మీ జోనిటి వారితో స్థానిక కార్యక్రమాలు — క్రీడలు, నడకలు, పిల్లల ఆట, పండుగలు, కలిసి గడిపే సమయం — సృష్టించండి, చేరండి.",
      kn: "ನಿಮ್ಮ Zonity ಜನರೊಂದಿಗೆ ಸ್ಥಳೀಯ ಚಟುವಟಿಕೆಗಳು — ಕ್ರೀಡೆ, ನಡಿಗೆ, ಮಕ್ಕಳ ಆಟ, ಹಬ್ಬಗಳು, ಕೂಡುವಿಕೆಗಳು — ರಚಿಸಿ, ಸೇರಿ.",
    },
    "services.neighbor.label": {
      en: "Neighbor help",
      te: "పొరుగు సహాయం",
      kn: "ನೆರೆಹೊರೆ ಸಹಾಯ",
    },
    "services.neighbor.tip": {
      en: "Post a clear request — a few hours of help, company for an errand, borrowing a tool — and let neighbors volunteer free or for a small fee.",
      te: "స్పష్టమైన అభ్యర్థన పెట్టండి — కొన్ని గంటల సహాయం, పనికి తోడు, సాధనం అరువు — పొరుగువారు ఉచితంగా లేదా చిన్న రుసుముకు స్వచ్ఛందంగా రావచ్చు.",
      kn: "ಸ್ಪಷ್ಟ ವಿನಂತಿ ಹಾಕಿ — ಕೆಲವು ಗಂಟೆಗಳ ಸಹಾಯ, ಕೆಲಸಕ್ಕೆ ಜೊತೆ, ಸಾಧನ ಎರವಲು — ನೆರೆಹೊರೆಯವರು ಉಚಿತವಾಗಿ ಅಥವಾ ಸಣ್ಣ ಶುಲ್ಕಕ್ಕೆ ಸ್ವಯಂಸೇವಕರಾಗಬಹುದು.",
    },

    "services.fruits.label": {
      en: "Fresh fruits & vegetables",
      te: "తాజా పండ్లు & కూరగాయలు",
      kn: "ತಾಜಾ ಹಣ್ಣುಗಳು & ತರಕಾರಿಗಳು",
    },
    "services.fruits.tip": {
      en: "Order fresh fruits and vegetables from outside vendors into scheduled delivery windows for your Zonity.",
      te: "మీ జోనిటికి నిర్ణీత డెలివరీ సమయాల్లో బయటి విక్రేతల నుండి తాజా పండ్లు, కూరగాయలు ఆర్డర్ చేయండి.",
      kn: "ನಿಮ್ಮ Zonityಗೆ ನಿಗದಿತ ಡೆಲಿವರಿ ಸಮಯಗಳಲ್ಲಿ ಹೊರಗಿನ ಮಾರಾಟಗಾರರಿಂದ ತಾಜಾ ಹಣ್ಣುಗಳು, ತರಕಾರಿಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ.",
    },
    "services.grocery.label": {
      en: "Grocery delivery",
      te: "కిరాణా డెలివరీ",
      kn: "ದಿನಸಿ ಡೆಲಿವರಿ",
    },
    "services.grocery.tip": {
      en: "Get grocery orders delivered to your Zonity on a clear schedule from providers who serve your area.",
      te: "మీ ప్రాంతానికి సేవలందించే ప్రొవైడర్ల నుండి స్పష్టమైన షెడ్యూల్‌తో మీ జోనిటికి కిరాణా డెలివరీ పొందండి.",
      kn: "ನಿಮ್ಮ ಪ್ರದೇಶಕ್ಕೆ ಸೇವೆ ನೀಡುವ ಪ್ರೊವೈಡರ್‌ಗಳಿಂದ ಸ್ಪಷ್ಟ ವೇಳಾಪಟ್ಟಿಯೊಂದಿಗೆ ನಿಮ್ಮ Zonityಗೆ ದಿನಸಿ ಡೆಲಿವರಿ ಪಡೆಯಿರಿ.",
    },
    "services.laundry.label": { en: "Laundry", te: "లాండ్రీ", kn: "ಲಾಂಡ್ರಿ" },
    "services.laundry.tip": {
      en: "Book scheduled laundry pickup and drop-off through providers who collect from and return to your Zonity.",
      te: "మీ జోనిటి నుండి తీసుకుని తిరిగి అందించే ప్రొవైడర్ల ద్వారా షెడ్యూల్ లాండ్రీ పికప్/డ్రాప్ బుక్ చేయండి.",
      kn: "ನಿಮ್ಮ Zonityಯಿಂದ ತೆಗೆದುಕೊಂಡು ಹಿಂದಿರುಗಿಸುವ ಪ್ರೊವೈಡರ್‌ಗಳ ಮೂಲಕ ನಿಗದಿತ ಲಾಂಡ್ರಿ ಪಿಕಪ್/ಡ್ರಾಪ್ ಬುಕ್ ಮಾಡಿ.",
    },
    "services.waterCan.label": {
      en: "Water can delivery",
      te: "నీటి క్యాన్ డెలివరీ",
      kn: "ನೀರಿನ ಕ್ಯಾನ್ ಡೆಲಿವರಿ",
    },
    "services.waterCan.tip": {
      en: "Schedule drinking-water can delivery to your apartment, colony, or workplace on a recurring or on-demand basis.",
      te: "మీ అపార్ట్‌మెంట్, కాలనీ లేదా కార్యాలయానికి తాగునీటి క్యాన్ డెలివరీని నిత్యం లేదా అవసరమైనప్పుడు షెడ్యూల్ చేయండి.",
      kn: "ನಿಮ್ಮ ಅಪಾರ್ಟ್‌ಮೆಂಟ್, ಕಾಲೋನಿ ಅಥವಾ ಕಚೇರಿಗೆ ಕುಡಿಯುವ ನೀರಿನ ಕ್ಯಾನ್ ಡೆಲಿವರಿಯನ್ನು ನಿಯಮಿತವಾಗಿ ಅಥವಾ ಬೇಕಾದಾಗ ಶೆಡ್ಯೂಲ್ ಮಾಡಿ.",
    },
    "services.diagnostics.label": {
      en: "Diagnostics & lab tests",
      te: "డయాగ్నస్టిక్స్ & ల్యాబ్ పరీక్షలు",
      kn: "ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್ & ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು",
    },
    "services.diagnostics.tip": {
      en: "Book lab tests and diagnostic services that visit or serve people in your Zonity.",
      te: "మీ జోనిటి వారికి వచ్చి సేవలందించే ల్యాబ్ పరీక్షలు, డయాగ్నస్టిక్ సేవలు బుక్ చేయండి.",
      kn: "ನಿಮ್ಮ Zonity ಜನರಿಗೆ ಬಂದು ಸೇವೆ ನೀಡುವ ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು, ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಸೇವೆಗಳನ್ನು ಬುಕ್ ಮಾಡಿ.",
    },
    "services.homeMaint.label": {
      en: "Periodic home maintenance",
      te: "కాలానుగుణ ఇంటి నిర్వహణ",
      kn: "ನಿಯತಕಾಲಿಕ ಮನೆ ನಿರ್ವಹಣೆ",
    },
    "services.homeMaint.tip": {
      en: "Schedule recurring home upkeep — cleaning, minor repairs, and preventive maintenance — from outside providers.",
      te: "బయటి ప్రొవైడర్ల నుండి పునరావృత ఇంటి నిర్వహణ — శుభ్రపరచడం, చిన్న మరమ్మతులు, నివారణ సంరక్షణ — షెడ్యూల్ చేయండి.",
      kn: "ಹೊರಗಿನ ಪ್ರೊವೈಡರ್‌ಗಳಿಂದ ಪುನರಾವರ್ತಿತ ಮನೆ ನಿರ್ವಹಣೆ — ಸ್ವಚ್ಛತೆ, ಸಣ್ಣ ದುರಸ್ತಿ, ತಡೆಗಟ್ಟುವ ನಿರ್ವಹಣೆ — ಶೆಡ್ಯೂಲ್ ಮಾಡಿ.",
    },
    "services.facility.label": {
      en: "Facility maintenance",
      te: "సౌకర్యాల నిర్వహణ",
      kn: "ಸೌಲಭ್ಯ ನಿರ್ವಹಣೆ",
    },
    "services.facility.tip": {
      en: "Coordinate upkeep for shared spaces in apartments, campuses, and workplaces — not just individual homes.",
      te: "అపార్ట్‌మెంట్లు, క్యాంపస్‌లు, కార్యాలయాల్లో ఉమ్మడి స్థలాల నిర్వహణను సమన్వయం చేయండి — వ్యక్తిగత ఇళ్లకు మాత్రమే కాదు.",
      kn: "ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳು, ಕ್ಯಾಂಪಸ್‌ಗಳು, ಕಚೇರಿಗಳಲ್ಲಿ ಹಂಚಿದ ಸ್ಥಳಗಳ ನಿರ್ವಹಣೆಯನ್ನು ಸಮನ್ವಯಗೊಳಿಸಿ — ವೈಯಕ್ತಿಕ ಮನೆಗಳಿಗೆ ಮಾತ್ರವಲ್ಲ.",
    },
    "services.plumber.label": {
      en: "Find a plumber",
      te: "ప్లంబర్ కనుగొనండి",
      kn: "ಪ್ಲಂಬರ್ ಹುಡುಕಿ",
    },
    "services.plumber.tip": {
      en: "Browse plumbers who cover your Zonity and pre-book a visit on a clear schedule for repairs or routine checks.",
      te: "మీ జోనిటి కవర్ చేసే ప్లంబర్లను చూడండి, మరమ్మతులు లేదా రొటీన్ చెక్‌లకు స్పష్టమైన సమయంలో ముందుగా బుక్ చేయండి.",
      kn: "ನಿಮ್ಮ Zonity ಕವರ್ ಮಾಡುವ ಪ್ಲಂಬರ್‌ಗಳನ್ನು ನೋಡಿ, ದುರಸ್ತಿ ಅಥವಾ ರೊಟೀನ್ ಚೆಕ್‌ಗಳಿಗೆ ಸ್ಪಷ್ಟ ಸಮಯದಲ್ಲಿ ಮುಂಚಿತವಾಗಿ ಬುಕ್ ಮಾಡಿ.",
    },
    "services.electrician.label": {
      en: "Find an electrician",
      te: "ఎలక్ట్రీషియన్ కనుగొనండి",
      kn: "ಎಲೆಕ್ಟ್ರಿಷಿಯನ್ ಹುಡುಕಿ",
    },
    "services.electrician.tip": {
      en: "Browse electricians who cover your Zonity and pre-book a visit on a clear schedule for repairs or routine checks.",
      te: "మీ జోనిటి కవర్ చేసే ఎలక్ట్రీషియన్లను చూడండి, మరమ్మతులు లేదా రొటీన్ చెక్‌లకు స్పష్టమైన సమయంలో ముందుగా బుక్ చేయండి.",
      kn: "ನಿಮ್ಮ Zonity ಕವರ್ ಮಾಡುವ ಎಲೆಕ್ಟ್ರಿಷಿಯನ್‌ಗಳನ್ನು ನೋಡಿ, ದುರಸ್ತಿ ಅಥವಾ ರೊಟೀನ್ ಚೆಕ್‌ಗಳಿಗೆ ಸ್ಪಷ್ಟ ಸಮಯದಲ್ಲಿ ಮುಂಚಿತವಾಗಿ ಬುಕ್ ಮಾಡಿ.",
    },

    "services.cityRentals.label": {
      en: "Rentals across the city",
      te: "నగరం అంతా అద్దెలు",
      kn: "ನಗರದಾದ್ಯಂತ ಬಾಡಿಗೆ",
    },
    "services.cityRentals.tip": {
      en: "Search and enquire about rentals across the city — beyond your own Zonity — through the platform.",
      te: "ప్లాట్‌ఫారమ్ ద్వారా మీ జోనిటి దాటి నగరం అంతా అద్దెలు వెతకండి, విచారించండి.",
      kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮೂಲಕ ನಿಮ್ಮ Zonity ಮೀರಿ ನಗರದಾದ್ಯಂತ ಬಾಡಿಗೆ ಹುಡುಕಿ, ವಿಚಾರಿಸಿ.",
    },
    "services.commercial.label": {
      en: "Delivery between commercial Zonities",
      te: "వాణిజ్య జోనిటిల మధ్య డెలివరీ",
      kn: "ವಾಣಿಜ್ಯ Zonityಗಳ ನಡುವೆ ಡೆಲಿವರಿ",
    },
    "services.commercial.tip": {
      en: "Move goods and deliveries between commercial Zonities that span more than one neighborhood on the platform.",
      te: "ప్లాట్‌ఫారమ్‌లో ఒకటి కంటే ఎక్కువ పొరుగు ప్రాంతాలు కలిగిన వాణిజ్య జోనిటిల మధ్య సరుకు, డెలివరీలు తరలించండి.",
      kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನಲ್ಲಿ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ನೆರೆಹೊರೆಗಳನ್ನು ಒಳಗೊಂಡ ವಾಣಿಜ್ಯ Zonityಗಳ ನಡುವೆ ಸರಕು, ಡೆಲಿವರಿಗಳನ್ನು ಸಾಗಿಸಿ.",
    },
    "services.wholesale.label": {
      en: "Wholesale-to-retail delivery",
      te: "హోల్‌సేల్ నుండి రిటైల్ డెలివరీ",
      kn: "ಹೋಲ್‌ಸೇಲ್‌ನಿಂದ ರಿಟೇಲ್ ಡೆಲಿವರಿ",
    },
    "services.wholesale.tip": {
      en: "Move stock from wholesalers to retailers across Zonities — scheduled drops, clear routes, and less last-minute chasing.",
      te: "జోనిటిల మధ్య హోల్‌సేలర్ల నుండి రిటైలర్లకు స్టాక్ తరలించండి — షెడ్యూల్ డ్రాప్‌లు, స్పష్టమైన మార్గాలు, చివరి నిమిషపు తొందర తక్కువ.",
      kn: "Zonityಗಳ ನಡುವೆ ಹೋಲ್‌ಸೇಲರ್‌ಗಳಿಂದ ರಿಟೇಲರ್‌ಗಳಿಗೆ ಸ್ಟಾಕ್ ಸಾಗಿಸಿ — ನಿಗದಿತ ಡ್ರಾಪ್‌ಗಳು, ಸ್ಪಷ್ಟ ಮಾರ್ಗಗಳು, ಕೊನೆಯ ನಿಮಿಷದ ಓಡಾಟ ಕಡಿಮೆ.",
    },

    "services.mapNote": {
      en: "What you can use depends on what’s enabled and offered in your Zonity. Want to provide a service?",
      te: "మీరు ఉపయోగించేది మీ జోనిటిలో ఏమి ప్రారంభించబడింది, అందించబడుతోంది అనే దానిపై ఆధారపడి ఉంటుంది. సేవ అందించాలనుకుంటున్నారా?",
      kn: "ನೀವು ಬಳಸುವುದು ನಿಮ್ಮ Zonityಯಲ್ಲಿ ಏನು ಸಕ್ರಿಯವಾಗಿದೆ, ನೀಡಲಾಗುತ್ತಿದೆ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ. ಸೇವೆ ನೀಡಲು ಬಯಸುವಿರಾ?",
    },

    "about.eyebrow": { en: "About", te: "గురించి", kn: "ಬಗ್ಗೆ" },
    "about.heading": {
      en: "What is Zonited?",
      te: "Zonited అంటే ఏమిటి?",
      kn: "Zonited ಎಂದರೇನು?",
    },
    "about.lead": {
      en: "<strong>Zonited</strong> is a digital platform that connects people, businesses, and services within geographically defined communities called <strong>Zonities</strong>.",
      te: "<strong>జొనైటెడ్</strong> అనేది <strong>జోనిటిలు</strong> అనే భౌగోళికంగా నిర్వచించిన సమూహాల్లో ప్రజలు, వ్యాపారాలు, సేవలను కలిపే డిజిటల్ ప్లాట్‌ఫారమ్.",
      kn: "<strong>Zonited</strong> ಎಂಬುದು <strong>Zonities</strong> ಎಂಬ ಭೌಗೋಳಿಕವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದ ಸಮುದಾಯಗಳಲ್ಲಿ ಜನರು, ವ್ಯಾಪಾರಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು ಕೊಂಡಿಸುವ ಡಿಜಿಟಲ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.",
    },
    "about.follow": {
      en: "A <strong>Zonity</strong> is the group for your apartment, colony, street, or workplace — where those local services come together.",
      te: "<strong>జోనిటి</strong> అనేది మీ అపార్ట్‌మెంట్, కాలనీ, వీధి లేదా కార్యాలయం కోసం సమూహం — అక్కడే ఆ స్థానిక సేవలు కలుస్తాయి.",
      kn: "<strong>Zonity</strong> ಎಂಬುದು ನಿಮ್ಮ ಅಪಾರ್ಟ್‌ಮೆಂಟ್, ಕಾಲೋನಿ, ಬೀದಿ ಅಥವಾ ಕಚೇರಿಗಾಗಿ ಗುಂಪು — ಅಲ್ಲಿಯೇ ಆ ಸ್ಥಳೀಯ ಸೇವೆಗಳು ಸೇರುತ್ತವೆ.",
    },
    "about.visualAlt": {
      en: "Commercial and light-industrial Zonity with shops, workshops, and local trade",
      te: "దుకాణాలు, వర్క్‌షాప్‌లు, స్థానిక వ్యాపారంతో వాణిజ్య / లైట్-ఇండస్ట్రియల్ జోనిటి",
      kn: "ಅಂಗಡಿಗಳು, ವರ್ಕ್‌ಶಾಪ್‌ಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ವ್ಯಾಪಾರದೊಂದಿಗೆ ವಾಣಿಜ್ಯ / ಲೈಟ್-ಇಂಡಸ್ಟ್ರಿಯಲ್ Zonity",
    },
    "about.caption": {
      en: "Same local map with different mixes of services for homes and workspaces.",
      te: "ఇళ్లు, కార్యాలయాల కోసం వేర్వేరు సేవల మిశ్రమంతో అదే స్థానిక మ్యాప్.",
      kn: "ಮನೆಗಳು ಮತ್ತು ಕೆಲಸದ ಸ್ಥಳಗಳಿಗೆ ವಿವಿಧ ಸೇವೆಗಳ ಮಿಶ್ರಣದೊಂದಿಗೆ ಅದೇ ಸ್ಥಳೀಯ ನಕ್ಷೆ.",
    },
    "about.sealAlt": {
      en: "Zonited mark — people connected as a Z",
      te: "Zonited చిహ్నం — Zగా కలిసిన ప్రజలు",
      kn: "Zonited ಚಿಹ್ನೆ — Z ಆಗಿ ಸಂಪರ್ಕಿತ ಜನರು",
    },
    "about.sealLine": {
      en: "Connecting people and businesses around what you need.",
      te: "మీకు కావాల్సినవాటి చుట్టూ ప్రజలు, వ్యాపారాలను కలుపుతోంది.",
      kn: "ನಿಮಗೆ ಬೇಕಾದದ್ದರ ಸುತ್ತಲೂ ಜನರು ಮತ್ತು ವ್ಯಾಪಾರಗಳನ್ನು ಕೊಂಡಿಸುತ್ತದೆ.",
    },

    "footer.app": {
      en: "Already in a Zonity? Open the app",
      te: "ఇప్పటికే జోనిటిలో ఉన్నారా? యాప్ తెరవండి",
      kn: "ಈಗಾಗಲೇ Zonityಯಲ್ಲಿದ್ದೀರಾ? ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯಿರಿ",
    },
    "footer.privacy": { en: "Privacy", te: "గోప్యత", kn: "ಗೌಪ್ಯತೆ" },
  };
})(typeof window !== "undefined" ? window : globalThis);
