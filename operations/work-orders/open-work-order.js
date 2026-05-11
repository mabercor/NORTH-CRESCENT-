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
document.getElementById(
  'contractStructure'
);

const contractEndDate =
document.getElementById(
  'contractEndDate'
);

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
document.getElementById(
  'visitsPerMonth'
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
document.getElementById(
  'complexityLevel'
);

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
   CLIENT DATABASE
========================================= */

const clientDatabase = {

  "Elmwood Medical": {

    contact:
    "Sarah Mitchell",

    company:
    "Elmwood Medical",

    phone:
    "(506) 555-2211",

    address:
    "145 Elmwood Drive, Moncton NB",

    monthlyValue:
    "$2,400",

    visits:
    "12",

    preferredTeam:
    "Team Delta",

    contract:
    "Recurring",

    lastService:
    "May 6",

    profitability:
    "82%"

  },

  "Moncton Office Hub": {

    contact:
    "David Clarke",

    company:
    "Moncton Office Hub",

    phone:
    "(506) 555-8765",

    address:
    "22 Main Street, Moncton NB",

    monthlyValue:
    "$4,200",

    visits:
    "20",

    preferredTeam:
    "Team Alpha",

    contract:
    "Indefinite",

    lastService:
    "May 8",

    profitability:
    "91%"

  },

  "Riverview Suites": {

    contact:
    "Amanda Lewis",

    company:
    "Riverview Suites",

    phone:
    "(506) 555-9821",

    address:
    "88 River Road, Riverview NB",

    monthlyValue:
    "$1,600",

    visits:
    "8",

    preferredTeam:
    "Team Nova",

    contract:
    "Recurring",

    lastService:
    "May 5",

    profitability:
    "74%"

  }

};

/* =========================================
   CLIENT SEARCH AUTOFILL
========================================= */

const clientCards =
document.querySelectorAll(
  '.client-result-card'
);

const clientNameInput =
document.getElementById(
  'clientName'
);

const companyInput =
document.getElementById(
  'companyName'
);

const phoneInput =
document.getElementById(
  'phoneNumber'
);

const addressInput =
document.getElementById(
  'serviceAddress'

);
const mainContactInput =
document.getElementById(
  'mainContact'
);
const emailInput =
document.getElementById(
  'emailAddress'
);

const serviceTypeInput =
document.getElementById(
  'serviceType'
);

const squareFootageInput =
document.getElementById(
  'squareFootage'
);
/* =========================================
   CLIENT INTELLIGENCE ELEMENTS
========================================= */

const clientMonthlyValue =
document.getElementById(
  'clientMonthlyValue'
);

const clientVisits =
document.getElementById(
  'clientVisits'
);

const clientTeam =
document.getElementById(
  'clientTeam'
);

const clientContract =
document.getElementById(
  'clientContract'
);

const clientLastService =
document.getElementById(
  'clientLastService'
);

const clientProfitability =
document.getElementById(
  'clientProfitability'
);


/* =========================================
   OPERATIONAL ALERTS ELEMENT
========================================= */

const operationalAlerts =
document.getElementById(
  'operationalAlerts'
);


/* =========================================
   OPERATIONAL SUMMARY ELEMENT
========================================= */

const operationalSummaryText =
document.getElementById(
  'operationalSummaryText'
);


/* =========================================
   CLIENT CARD EVENTS
========================================= */

clientCards.forEach((card) => {

  card.addEventListener(
    'click',
    () => {
       const clientName =
card.querySelector('strong')
.innerText
.trim();
       
      /* REMOVE ACTIVE STATE */

      clientCards.forEach((item) => {

        item.classList.remove(
          'active'
        );

      });
       card.classList.add(
  'active'
);

       
const clientData =
clientDatabase[clientName];

if (clientData) {

  /* UPDATE OPERATIONAL ALERTS */

  if (clientName === 'Elmwood Medical') {

    operationalAlerts.innerHTML = `

      <div class="alert-card danger">
        🔴 Medical Protocol Required
      </div>

      <div class="alert-card warning">
        🟡 Supervisor Mandatory
      </div>

      <div class="alert-card success">
        🟢 VIP Recurring Client
      </div>

    `;

    operationalSummaryText.innerText =
      'Elmwood Medical is a high-priority recurring medical facility requiring strict protocol compliance, operational consistency, and supervisor oversight.';

  }

  else if (
    clientName ===
    'Moncton Office Hub'
  ) {

    operationalAlerts.innerHTML = `

      <div class="alert-card success">
        🟢 Enterprise Commercial Account
      </div>

      <div class="alert-card warning">
        🟡 High Traffic Property
      </div>

    `;

    operationalSummaryText.innerText =
      'Moncton Office Hub is a large recurring commercial account with high operational traffic, stable profitability, and long-term operational potential.';

  }

  else if (
    clientName ===
    'Riverview Suites'
  ) {

    operationalAlerts.innerHTML = `

      <div class="alert-card success">
        🟢 Airbnb Recurring Property
      </div>

      <div class="alert-card warning">
        🟡 Weekend Scheduling Priority
      </div>

    `;

    operationalSummaryText.innerText =
      'Riverview Suites is a recurring Airbnb property requiring flexible scheduling, rapid turnover coordination, and weekend operational readiness.';

  }

  /* UPDATE CLIENT MEMORY */

  clientNameInput.value =
    clientData.contact;

  companyInput.value =
    clientData.company;

  phoneInput.value =
    clientData.phone;

  addressInput.value =
    clientData.address;

  /* UPDATE INTELLIGENCE PANEL */

  clientMonthlyValue.innerText =
    clientData.monthlyValue;

  clientVisits.innerText =
    clientData.visits;

  clientTeam.innerText =
    clientData.preferredTeam;

  clientContract.innerText =
    clientData.contract;

  clientLastService.innerText =
    clientData.lastService;

 clientProfitability.innerText =
  clientData.profitability;

    }

  }
);

});

/* =========================================
   LIVE SCHEDULING ENGINE
========================================= */

const schedulePreview =
document.getElementById(
  'schedulePreview'
);

if (
  visitsInput &&
  schedulePreview
) {

  visitsInput.addEventListener(
    'input',
    () => {

      const visits =
      parseInt(
        visitsInput.value
      ) || 0;

      let scheduleHTML = '';

      if (visits <= 4) {

        scheduleHTML = `
          <div class="schedule-card">
            <strong>Monday</strong>
            <span>7:00 PM</span>
          </div>
        `;

      }

      else if (visits <= 8) {

        scheduleHTML = `
          <div class="schedule-card">
            <strong>Monday</strong>
            <span>7:00 PM</span>
          </div>

          <div class="schedule-card">
            <strong>Thursday</strong>
            <span>7:00 PM</span>
          </div>
        `;

      }

      else {

        scheduleHTML = `
          <div class="schedule-card">
            <strong>Monday</strong>
            <span>7:00 PM</span>
          </div>

          <div class="schedule-card">
            <strong>Wednesday</strong>
            <span>7:00 PM</span>
          </div>

          <div class="schedule-card">
            <strong>Friday</strong>
            <span>7:00 PM</span>
          </div>
        `;

      }

      schedulePreview.innerHTML =
      scheduleHTML;
    }
  );

}

     /* =========================================
   OPERATIONAL PAYLOAD ENGINE
========================================= */

const workOrderForm =
document.getElementById(
  'workOrderForm'
);

function generateOperationalPayload() {

  if (!workOrderForm) return;

  const formData =
  new FormData(workOrderForm);

  const payload =
  Object.fromEntries(
    formData.entries()
  );

  console.log(
    'Operational Payload:',
    payload
  );

  return payload;

}
/* =========================================
   LIVE AIRTABLE SEARCH ENGINE
========================================= */

const clientSearchInput =
document.getElementById(
  'clientSearchInput'
);

const searchWebhookURL =
'https://hook.us2.make.com/92wi6ng77ab71m3cs37svx35ds4nnaog';

async function searchOperationalClient() {

  if (!clientSearchInput) return;

  const searchValue =
  clientSearchInput.value.trim();

  if (searchValue.length < 3) return;

  try {

    const response =
    await fetch(searchWebhookURL, {

      method: 'POST',

      headers: {
        'Content-Type':
        'application/json'
      },

      body: JSON.stringify({

        search: searchValue

      })

    });

    const clientData =
    await response.text()
     
    console.log(
      'LIVE CLIENT DATA:',
      clientData
    );
     if (clientData.clientName) {

  clientNameInput.value =
  clientData.clientName;

}

if (clientData.mainContact) {

  mainContactInput.value =
  clientData.mainContact;

}

if (clientData.phoneNumber) {

  phoneInput.value =
  clientData.phoneNumber;

}

if (clientData.emailAddress) {

  emailInput.value =
  clientData.emailAddress;

}

if (clientData.serviceType) {

  serviceTypeInput.value =
  clientData.serviceType;

}

if (clientData.squareFootage) {

  squareFootageInput.value =
  clientData.squareFootage;

}

  }

  catch (error) {

    console.error(
      'LIVE SEARCH ERROR:',
      error
    );

  }

}

if (clientSearchInput) {

  clientSearchInput.addEventListener(
    'input',
    searchOperationalClient
  );

}


