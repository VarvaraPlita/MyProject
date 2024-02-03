// scripts.js

  
  // Script 2: Plausible Analytics
  window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments) };
  
  // Script 3: External scripts
  const scriptUrls = [
    "https://assets.jwwb.nl/assets/build/website-rendering/en-GB.js?bust=f76f40554f34e5292cd3",
    "https://assets.jwwb.nl/assets/website-rendering/runtime.ec5d7dd9594e7e115be6.js?bust=e8fea08ebbb8c26f47bf",
    "https://assets.jwwb.nl/assets/website-rendering/664.dbefa5c3e590dbc86747.js?bust=9f63837b771380821226",
    "https://assets.jwwb.nl/assets/website-rendering/main.ff529b696f4d36216015.js?bust=96e421420ecdc707d2fc"
  ];
  
  // Script 4: JOUWWEB experiment data
  window.JOUWWEB = window.JOUWWEB || {};
  window.JOUWWEB.experiment = {
    "enrollments": {},
    "defaults": {
      "constrained-subdomain": "on",
      "templates-section": "on",
      "onboarding-tutorial-video": "on",
      "whatsapp-chat-mobile": "on",
      "suggest-dashless-domain": "on"
    }
  };
  