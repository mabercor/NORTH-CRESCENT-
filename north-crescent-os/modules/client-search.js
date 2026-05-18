/* =========================================
   NORTH CRESCENT OS
   CLIENT SEARCH MODULE
========================================= */


/* =========================================
   CLIENT SEARCH REFERENCES
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

const clientNameInput =
document.getElementById(
  'clientName'
);

const companyInput =
document.getElementById(
  'companyName'
);

const mainContactInput =
document.getElementById(
  'mainContact'
);

const phoneInput =
document.getElementById(
  'phoneNumber'
);

const emailInput =
document.getElementById(
  'emailAddress'
);

const clientServiceTypeInput =
document.getElementById(
  'clientServiceType'
);

const squareFootageInput =
document.getElementById(
  'squareFootage'
);
const visitsPerMonthInput =
document.getElementById(
  'visitsPerMonth'
);

const frequencyInput =
document.getElementById(
  'frequency'
);

const daysInput =
document.getElementById(
  'days'
);

const timeSlotInput =
document.getElementById(
  'timeSlot'
);
const operationalSummaryInput =
document.getElementById(
  'clientOperationalSummary'
);
const schedulingNotesInput =
document.getElementById(
  'schedulingNotes'
);

/* =========================================
   HYDRATION CONTROL
========================================= */

let isHydrating = false;
/* =========================================
   MAKE WEBHOOK
========================================= */

const searchWebhookURL =
'https://hook.us2.make.com/92wi6ng77ab71m3cs37svx35ds4nnaog';


/* =========================================
   LIVE AIRTABLE SEARCH ENGINE
========================================= */

export async function searchOperationalClient() {

  console.log(
    'SEARCH FUNCTION RUNNING'
  );

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
     
     if (!response.ok) {

  throw new Error(
    `HTTP ERROR: ${response.status}`
  );

}

    const clientData =
    await response.json();

    console.log(
      'LIVE CLIENT DATA:',
      clientData
    );
     console.log(
  JSON.stringify(
    clientData,
    null,
    2
  )
);

     
    const client = clientData.records?.[0];

console.log("CLIENT RECORD:", client);
     isHydrating = true;
     
     if (clientSearchMessage) {

  clientSearchMessage.innerText = '';

}

if (!client) {

  console.error(
    "CLIENT NOT FOUND"
  );

  if (clientSearchMessage) {

    clientSearchMessage.innerText =
    'No client found. Try a different search criteria.';

  }

  return;

}


/* =========================================
   CLIENT MEMORY AUTOFILL
========================================= */

if (client.clientName) {

  clientNameInput.value =
  client.clientName;

}

if (client.companyName) {

  companyInput.value =
  client.companyName;

}

if (client.mainContact) {

  mainContactInput.value =
  client.mainContact;

}

if (client.phoneNumber) {

  phoneInput.value =
  client.phoneNumber;

}

if (client.emailAddress) {

  emailInput.value =
  client.emailAddress;

}

if (
  client.serviceType &&
  clientServiceTypeInput
) {

  clientServiceTypeInput.value =
  client.serviceType;

}

if (client.squareFootage) {

  squareFootageInput.value =
  client.squareFootage;

}

if (client.visitsPerMonth) {

  visitsPerMonthInput.value =
  client.visitsPerMonth;

}

if (
  client.frequency &&
  frequencyInput
) {

  frequencyInput.value =
  client.frequency;

}

if (client.days) {

  daysInput.value =
  client.days;

}

if (client.timeSlot) {

  timeSlotInput.value =
  client.timeSlot;

}

if (client.operationalSummary) {

  operationalSummaryInput.value =
  client.operationalSummary;

}

if (
  client.schedulingNotes &&
  schedulingNotesInput
) {

  schedulingNotesInput.value =
  client.schedulingNotes;

}
/* =========================================
   LIFECYCLE ID MEMORY
========================================= */

const leadRecordInput =
document.getElementById(
  'leadRecordId'
);

if (
  leadRecordInput &&
  client.leadRecordId
) {

  leadRecordInput.value =
  client.leadRecordId;
   if (!window.operationalState) {

  window.operationalState = {};

}

if (!window.operationalState.client) {

  window.operationalState.client = {};

}

window.operationalState.client.leadRecordId =
  client.leadRecordId;

  console.log(
    'LEAD RECORD ID RESTORED:',
    client.leadRecordId
  );

}
console.log(
  'FORM HYDRATION COMPLETE'
);
isHydrating = false;
  }

  catch (error) {

    console.error(
      'LIVE SEARCH ERROR:',
      error
    );

  }

}

/* =========================================
   CLIENT SEARCH INITIALIZATION
========================================= */

export function initializeClientSearch() {

  console.log(
    'SEARCH ENGINE READY'
  );

  if (searchClientBtn) {

    searchClientBtn.addEventListener(
      'click',
      () => {

        searchOperationalClient();

      }
    );

  }

}
