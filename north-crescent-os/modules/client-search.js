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

    const clientData =
    await response.json();

    console.log(
      'LIVE CLIENT DATA:',
      clientData
    );


    /* =========================================
       CLIENT MEMORY AUTOFILL
    ========================================= */

    if (clientData.clientName) {

      clientNameInput.value =
      clientData.clientName;

    }

    if (clientData.companyName) {

      companyInput.value =
      clientData.companyName;

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

  clientServiceTypeInput.value =
  clientData.serviceType;

}

    if (clientData.squareFootage) {

      squareFootageInput.value =
      clientData.squareFootage;

    }

    if (clientData.frequency) {

      frequencyInput.value =
      clientData.frequency;

    }

    if (clientData.days) {

      daysInput.value =
      clientData.days;

    }

    if (clientData.timeSlot) {

      timeSlotInput.value =
      clientData.timeSlot;

    }

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

  if (clientSearchInput) {

    clientSearchInput.addEventListener(
      'input',
      searchOperationalClient
    );

  }

}
