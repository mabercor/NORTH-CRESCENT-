/* =========================================
   NORTH CRESCENT
   OPERATIONAL ACTIVATION CENTER
========================================= */


/* =========================================
   SYSTEM INITIALIZATION
========================================= */

console.log(
  'North Crescent Operational Activation Center Active'
);


/* =========================================
   LIVE STATUS DOT
========================================= */

const statusDot =
document.querySelector('.status-dot');

if (statusDot) {

  setInterval(() => {

    statusDot.classList.toggle('pulse');

  }, 1200);

}


/* =========================================
   CONTRACT ENGINE
========================================= */

const contractStructure =
document.querySelectorAll('select')[2];

const contractEndDate =
document.querySelectorAll('input[type="date"]')[1];

function handleContractLogic() {

  if (!contractStructure) return;

  const selectedValue =
  contractStructure.value;

  if (
    selectedValue ===
    'Indefinite / Auto Renewal'
  ) {

    contractEndDate.style.opacity = '0.3';
    contractEndDate.disabled = true;

    console.log(
      'Auto Renewal Contract Enabled'
    );

  } else {

    contractEndDate.style.opacity = '1';
    contractEndDate.disabled = false;

  }

}

if (contractStructure) {

  contractStructure.addEventListener(
    'change',
    handleContractLogic
  );

}


/* =========================================
   LIVE OPERATIONAL METRICS
========================================= */

const visitsInput =
document.querySelector(
  'input[type="number"]'
);

const estimatedRevenueCard =
document.querySelectorAll(
  '.metric-card strong'
)[0];

const recurringRevenueCard =
document.querySelectorAll(
  '.metric-card strong'
)[2];

function calculateOperationalMetrics() {

  if (!visitsInput) return;

  const visits =
  parseInt(visitsInput.value) || 0;

  const estimatedMonthlyRevenue =
  visits * 240;

  const annualRecurringRevenue =
  estimatedMonthlyRevenue * 12;

  if (estimatedRevenueCard) {

    estimatedRevenueCard.innerText =
      '$' +
      estimatedMonthlyRevenue.toLocaleString();

  }

  if (recurringRevenueCard) {

    recurringRevenueCard.innerText =
      '$' +
      annualRecurringRevenue.toLocaleString();

  }

}

if (visitsInput) {

  visitsInput.addEventListener(
    'input',
    calculateOperationalMetrics
  );

}


/* =========================================
   OPERATIONAL COMPLEXITY SCORE
========================================= */

const complexitySelect =
document.querySelectorAll('select')[6];

const complexityScoreCard =
document.querySelectorAll(
  '.metric-card strong'
)[3];

function updateComplexityScore() {

  if (!complexitySelect) return;

  const complexity =
  complexitySelect.value;

  let score = 40;

  if (complexity === 'Moderate') {
    score = 65;
  }

  if (complexity === 'High') {
    score = 82;
  }

  if (complexity === 'Extreme') {
    score = 96;
  }

  if (complexityScoreCard) {

    complexityScoreCard.innerText =
      score;

  }

}

if (complexitySelect) {

  complexitySelect.addEventListener(
    'change',
    updateComplexityScore
  );

}


/* =========================================
   FORM SAVE DRAFT
========================================= */

const saveDraftButton =
document.querySelectorAll(
  '.crm-btn.dark'
)[0];

if (saveDraftButton) {

  saveDraftButton.addEventListener(
    'click',
    () => {

      localStorage.setItem(
        'nc_workorder_draft',
        JSON.stringify({

          saved: true,
          timestamp: new Date()

        })
      );

      alert(
        'Operational draft saved successfully.'
      );

      console.log(
        'Operational Draft Saved'
      );

    }
  );

}


/* =========================================
   OPERATIONAL ACTIVATION
========================================= */

/* =========================================
   NORTH CRESCENT
   OPERATIONAL SECURITY LAYER
========================================= */


/* =========================================
   SUPERVISOR AUTHORIZATION
========================================= */

const supervisorCode =
'NC-SUPERVISOR-2026';


/* =========================================
   OPERATIONAL ACTIVATION
========================================= */

const operationalForm =
document.querySelector(
  '.workorder-form'
);

if (operationalForm) {

  operationalForm.addEventListener(
    'submit',
    (event) => {

      event.preventDefault();

      /* ========= CONFIRMATION ========= */

      const confirmActivation =
      confirm(
        'Confirm Operational Contract Activation?'
      );

      if (!confirmActivation) {

        return;

      }

      /* ========= SUPERVISOR CODE ========= */

      const enteredCode =
      prompt(
        'Supervisor Authorization Required\n\nEnter Supervisor Code:'
      );

      if (
        enteredCode !== supervisorCode
      ) {

        alert(
          'Invalid Supervisor Authorization Code.'
        );

        console.error(
          'Unauthorized Operational Activation Attempt'
        );

        return;

      }

      /* ========= SUCCESS ========= */

      alert(
        'Operational Contract Activated Successfully.'
      );

      console.log(
        'North Crescent Operational Contract Created'
      );

      /*
      FUTURE FLOW

      HTML FORM
      ↓
      MAKE WEBHOOK
      ↓
      AIRTABLE
      ↓
      DISPATCH EMAIL
      ↓
      RECURRING SCHEDULING
      ↓
      CRM UPDATE

      */

    }
  );

}


/* =========================================
   NORTH CRESCENT ADN
========================================= */

console.log(
  'Structured Thinking. Visible Results. Absolute Discipline.'
);

/* =========================================
   FUTURE AIRTABLE SEARCH ENGINE
========================================= */

/*

Future Logic:

Client Search
↓
Make Webhook
↓
Airtable Search
↓
Return Client Data
↓
Autofill Operational Form

*/


/* =========================================
   FUTURE AUTOMATION ENGINE
========================================= */

/*

Future Systems:

- Dispatch Email Automation
- Recurring Visit Generator
- Calendar Sync
- AI Operational Analysis
- Profitability Engine
- Team Capacity Analysis
- Route Optimization
- Supervisor Notifications

*/


/* =========================================
   NORTH CRESCENT ADN
========================================= */

console.log(
  'Structured Thinking. Visible Results. Absolute Discipline.'
);



/* =========================================
   CLIENT SEARCH AUTOFILL
========================================= */

const clientCards =
document.querySelectorAll(
  '.client-result-card'
);

const clientNameInput =
document.querySelectorAll(
  '.form-group input'
)[1];

const companyInput =
document.querySelectorAll(
  '.form-group input'
)[2];

const phoneInput =
document.querySelectorAll(
  '.form-group input'
)[4];

const addressInput =
document.querySelectorAll(
  '.form-group input'
)[6];

clientCards.forEach((card) => {

  card.addEventListener(
    'click',
    () => {

      const clientName =
      card.querySelector(
        'strong'
      ).innerText;

      if (
        clientName ===
        'Elmwood Medical'
      ) {

        clientNameInput.value =
          'Sarah Mitchell';

        companyInput.value =
          'Elmwood Medical';

        phoneInput.value =
          '(506) 555-2211';

        addressInput.value =
          '145 Elmwood Drive, Moncton NB';

      }

      if (
        clientName ===
        'Moncton Office Hub'
      ) {

        clientNameInput.value =
          'David Clarke';

        companyInput.value =
          'Moncton Office Hub';

        phoneInput.value =
          '(506) 555-8765';

        addressInput.value =
          '22 Main Street, Moncton NB';

      }

      if (
        clientName ===
        'Riverview Suites'
      ) {

        clientNameInput.value =
          'Amanda Lewis';

        companyInput.value =
          'Riverview Suites';

        phoneInput.value =
          '(506) 555-9821';

        addressInput.value =
          '88 River Road, Riverview NB';

      }

      console.log(
        'Client Operational Memory Loaded'
      );

    }
  );

});
