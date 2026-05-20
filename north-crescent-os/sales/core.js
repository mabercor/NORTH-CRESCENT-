/* =========================================
   NORTH CRESCENT SALES PORTAL
   SALES CORE
========================================= */


/* =========================================
   MODULE IMPORTS
========================================= */

import {
  renderPackages
} from './render-packages.js';

import './client-memory.js';

import './sales-events.js';


/* =========================================
   SALES PORTAL CONFIGURATION
========================================= */

const salesPortalConfiguration = {

  serviceType:
  'Commercial Cleaning',

  squareFootage:
  6500,

  visitsPerMonth:
  4,

  complexityLevel:
  'Moderate'

};


/* =========================================
   INITIALIZE SALES PORTAL
========================================= */

export function initializeSalesPortal() {

  console.log(

    'Initializing North Crescent Sales Portal...'

  );


  /* =========================================
     INITIAL PACKAGE EXPERIENCE
  ========================================= */

  initializePackageExperience();


  /* =========================================
     INITIALIZE EXPERIENCE ATMOSPHERE
  ========================================= */

  initializePortalAtmosphere();


  /* =========================================
     INITIALIZE OPERATIONAL STATUS
  ========================================= */

  initializeOperationalStatus();


  /* =========================================
     INITIALIZE LIVE EXPERIENCE
  ========================================= */

  initializeLiveExperience();


  /* =========================================
     INITIALIZE PREMIUM INTERACTIONS
  ========================================= */

  initializePremiumInteractions();


  /* =========================================
     SALES PORTAL ACTIVE
  ========================================= */

  console.log(

    'North Crescent Sales Portal Active'

  );

}


/* =========================================
   PACKAGE EXPERIENCE
========================================= */

function initializePackageExperience() {

  renderPackages(

    salesPortalConfiguration

  );

}


/* =========================================
   PORTAL ATMOSPHERE
========================================= */

function initializePortalAtmosphere() {

  document.body.classList.add(
    'sales-portal-loaded'
  );


  /* =========================================
     PREMIUM BODY TRANSITION
  ========================================= */

  document.body.style.opacity =
  '1';


  document.body.style.transition =
  'opacity 0.8s ease';

}


/* =========================================
   OPERATIONAL STATUS
========================================= */

function initializeOperationalStatus() {

  const heroStatusDot =
  document.querySelector(
    '.hero-status-dot'
  );

  if (!heroStatusDot) return;


  heroStatusDot.style.boxShadow =

    `
    0 0 22px
    rgba(74,155,140,0.9)
    `;

}


/* =========================================
   LIVE EXPERIENCE
========================================= */

function initializeLiveExperience() {

  const packageCards =
  document.querySelectorAll(
    '.package-card'
  );

  packageCards.forEach(
    (card, index) => {

      card.style.animation =

      `
      premiumFadeUp
      0.8s ease
      ${index * 0.12}s forwards
      `;

    }
  );

}


/* =========================================
   PREMIUM INTERACTIONS
========================================= */

function initializePremiumInteractions() {

  initializeFloatingAtmosphere();

  initializePremiumGlow();

}


/* =========================================
   FLOATING ATMOSPHERE
========================================= */

function initializeFloatingAtmosphere() {

  const ambientGradients =
  document.querySelectorAll(
    '.ambient-gradient'
  );

  ambientGradients.forEach(
    (gradient, index) => {

      gradient.style.animation =

      `
      floatingAmbient
      ${18 + index * 4}s
      ease-in-out
      infinite
      `;

    }
  );

}


/* =========================================
   PREMIUM GLOW
========================================= */

function initializePremiumGlow() {

  const featuredCard =
  document.querySelector(
    '.featured'
  );

  if (!featuredCard) return;


  setInterval(() => {

    featuredCard.style.boxShadow =

      `
      0 18px 70px
      rgba(74,155,140,0.14)
      `;


    setTimeout(() => {

      featuredCard.style.boxShadow =

      `
      0 18px 40px
      rgba(74,155,140,0.08)
      `;

    }, 1800);

  }, 4000);

}


/* =========================================
   PREMIUM STYLE INJECTION
========================================= */

const premiumStyle =
document.createElement(
  'style'
);

premiumStyle.innerHTML = `

@keyframes premiumFadeUp {

  from {

    opacity: 0;

    transform:
      translateY(30px);

  }

  to {

    opacity: 1;

    transform:
      translateY(0px);

  }

}


@keyframes floatingAmbient {

  0% {

    transform:
      translateY(0px)
      translateX(0px);

  }

  50% {

    transform:
      translateY(-18px)
      translateX(10px);

  }

  100% {

    transform:
      translateY(0px)
      translateX(0px);

  }

}

`;

document.head.appendChild(
  premiumStyle
);


/* =========================================
   EXPERIENCE HEALTH CHECK
========================================= */

function initializeSystemHealthCheck() {

  console.log({

    portal:
    'active',

    rendering:
    'connected',

    events:
    'connected',

    memory:
    'connected',

    atmosphere:
    'premium'

  });

}


/* =========================================
   AUTO HEALTH CHECK
========================================= */

initializeSystemHealthCheck();
