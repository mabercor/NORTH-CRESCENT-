/* =========================================
   NORTH CRESCENT SALES PORTAL
   CLIENT MEMORY SYSTEM
========================================= */

import {
  renderPackages
} from './render-packages.js';


/* =========================================
   DOM REFERENCES
========================================= */

const clientSearchInput =
document.getElementById(
  'clientSearchInput'
);

const searchClientBtn =
document.getElementById(
  'searchClientBtn'
);

const clientSearchMessage =
document.getElementById(
  'clientSearchMessage'
);


/* =========================================
   MOCK CLIENT DATABASE
========================================= */

const mockClientDatabase = [

  {

    clientName:
    'Atlantic Business Center',

    serviceType:
    'Commercial Cleaning',

    squareFootage:
    8500,

    visitsPerMonth:
    4,

    complexityLevel:
    'Moderate',

    operationalProgram:
    'structured'

  },


  {

    clientName:
    'Northview Executive Suites',

    serviceType:
    'Commercial Cleaning',

    squareFootage:
    18000,

    visitsPerMonth:
    8,

    complexityLevel:
    'High',

    operationalProgram:
    'executive'

  },


  {

    clientName:
    'Riverside Residential Complex',

    serviceType:
    'Residential Cleaning',

    squareFootage:
    4200,

    visitsPerMonth:
    2,

    complexityLevel:
    'Low',

    operationalProgram:
    'essential'

  }

];


/* =========================================
   CLIENT SEARCH SYSTEM
========================================= */

if (searchClientBtn) {

  searchClientBtn.addEventListener(
    'click',
    () => {

      searchExistingClient();

    }
  );

}


/* =========================================
   SEARCH EXISTING CLIENT
========================================= */

function searchExistingClient() {

  const searchValue =

    clientSearchInput
    ?.value
    ?.trim()
    ?.toLowerCase();


  /* =========================================
     VALIDATION
  ========================================= */

  if (!searchValue) {

    showMessage(

      'Please enter a client or environment name.',

      'warning'

    );

    return;

  }


  /* =========================================
     LOADING EXPERIENCE
  ========================================= */

  showMessage(

    'Restoring operational environment...',

    'loading'

  );


  /* =========================================
     SIMULATED CRM SEARCH
  ========================================= */

  setTimeout(() => {

    const existingClient =

      mockClientDatabase.find(
        (client) =>

          client.clientName
          .toLowerCase()
          .includes(searchValue)

      );


    /* =========================================
       CLIENT FOUND
    ========================================= */

    if (existingClient) {

      hydrateOperationalEnvironment(
        existingClient
      );

      renderPackages(
        existingClient
      );

      showMessage(

        `
        Operational environment restored for
        ${existingClient.clientName}.
        `,

        'success'

      );

      return;

    }


    /* =========================================
       CLIENT NOT FOUND
    ========================================= */

    showMessage(

      `
      No existing operational environment
      was found. Creating a new experience.
      `,

      'neutral'

    );

  }, 1800);

}


/* =========================================
   HYDRATE ENVIRONMENT
========================================= */

function hydrateOperationalEnvironment(
  client
) {

  /* =========================================
     SERVICE TYPE
  ========================================= */

  const serviceType =
  document.getElementById(
    'serviceType'
  );

  if (serviceType) {

    serviceType.value =
    client.serviceType;

  }


  /* =========================================
     SQUARE FOOTAGE
  ========================================= */

  const squareFootage =
  document.getElementById(
    'squareFootage'
  );

  if (squareFootage) {

    squareFootage.value =
    client.squareFootage;

  }


  /* =========================================
     VISITS PER MONTH
  ========================================= */

  const visitsPerMonth =
  document.getElementById(
    'visitsPerMonth'
  );

  if (visitsPerMonth) {

    visitsPerMonth.value =
    client.visitsPerMonth;

  }


  /* =========================================
     COMPLEXITY LEVEL
  ========================================= */

  const complexityLevel =
  document.getElementById(
    'complexityLevel'
  );

  if (complexityLevel) {

    complexityLevel.value =
    client.complexityLevel;

  }


  /* =========================================
     PREMIUM RESTORE EFFECT
  ========================================= */

  animateRestoreExperience();

}


/* =========================================
   MESSAGE SYSTEM
========================================= */

function showMessage(
  message,
  type
) {

  if (!clientSearchMessage) return;


  clientSearchMessage.innerHTML =
  message;


  clientSearchMessage.className =
  'memory-search-message';


  /* =========================================
     STATUS TYPES
  ========================================= */

  if (type === 'success') {

    clientSearchMessage.classList.add(
      'success-message'
    );

  }

  else if (type === 'warning') {

    clientSearchMessage.classList.add(
      'warning-message'
    );

  }

  else if (type === 'loading') {

    clientSearchMessage.classList.add(
      'loading-message'
    );

  }

  else {

    clientSearchMessage.classList.add(
      'neutral-message'
    );

  }

}


/* =========================================
   PREMIUM RESTORE EXPERIENCE
========================================= */

function animateRestoreExperience() {

  const memoryCard =
  document.querySelector(
    '.client-memory-card'
  );

  if (!memoryCard) return;


  memoryCard.style.transition =
  '0.6s ease';


  memoryCard.style.transform =
  'scale(1.01)';


  memoryCard.style.boxShadow =
  `
  0 0 60px
  rgba(74,155,140,0.18)
  `;


  setTimeout(() => {

    memoryCard.style.transform =
    'scale(1)';

    memoryCard.style.boxShadow =
    '';

  }, 700);

}


/* =========================================
   LIVE CONFIGURATION LISTENERS
========================================= */

const liveInputs = [

  'serviceType',

  'squareFootage',

  'visitsPerMonth',

  'complexityLevel'

];


/* =========================================
   LIVE PACKAGE REGENERATION
========================================= */

liveInputs.forEach(
  (inputId) => {

    const input =
    document.getElementById(
      inputId
    );

    if (!input) return;


    input.addEventListener(
      'input',
      regeneratePackages
    );

    input.addEventListener(
      'change',
      regeneratePackages
    );

  }
);


/* =========================================
   REGENERATE PACKAGES
========================================= */

function regeneratePackages() {

  const configuration = {

    serviceType:
    document.getElementById(
      'serviceType'
    )?.value || '',

    squareFootage:
    document.getElementById(
      'squareFootage'
    )?.value || 0,

    visitsPerMonth:
    document.getElementById(
      'visitsPerMonth'
    )?.value || 1,

    complexityLevel:
    document.getElementById(
      'complexityLevel'
    )?.value || 'Low'

  };


  renderPackages(
    configuration
  );

}


/* =========================================
   INITIAL EXPERIENCE
========================================= */

showMessage(

  `
  Returning clients may restore
  recurring operational environments.
  `,

  'neutral'

);


/* =========================================
   SYSTEM STATUS
========================================= */

console.log(

  'Client Memory System Active'

);
