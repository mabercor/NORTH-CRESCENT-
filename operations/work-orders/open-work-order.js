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

  serviceTypeInput.value =
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
console.log(
  'SEARCH ENGINE READY'
);

if (clientSearchInput) {

  clientSearchInput.addEventListener(
    'input',
    searchOperationalClient
  );

}
