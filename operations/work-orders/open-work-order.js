/* =========================================
   NORTH CRESCENT OS
   OPEN WORK ORDER
========================================= */


/* =========================================
   IMPORT MODULES
========================================= */

import {

  generateOperationalPayload

} from './modules/payload-engine.js';

import {

  operationalState

} from './state/state.js';


/* =========================================
   FORM REFERENCES
========================================= */

const workOrderForm =
document.getElementById(
  'workOrderForm'
);
/* =========================================
   MAKE ACTIVATION WEBHOOK
========================================= */

const activationWebhookURL =
'https://YOUR-MAKE-WEBHOOK-URL';

/* =========================================
   OPERATIONAL ACTIVATION
========================================= */

async function handleOperationalActivation(event) {

  event.preventDefault();

  const payload =
  generateOperationalPayload(
    operationalState
  );

  console.log(
    'OPERATIONAL PAYLOAD:',
    payload
  );
try {

  const response =
  await fetch(
    activationWebhookURL,
    {

      method: 'POST',

      headers: {
        'Content-Type':
        'application/json'
      },

      body: JSON.stringify(
        payload
      )

    }
  );

  if (!response.ok) {

    throw new Error(
      `HTTP ERROR:
      ${response.status}`
    );

  }

  const result =
  await response.json();

  console.log(
    'ACTIVATION SUCCESS:',
    result
  );

}

catch (error) {

  console.error(
    'ACTIVATION ERROR:',
    error
  );

}
}


/* =========================================
   INITIALIZATION
========================================= */

function initializeOpenWorkOrder() {

  console.log(
    'OPEN WORK ORDER READY'
  );

  if (workOrderForm) {

  console.log(
    'FORM DETECTED'
  );

  workOrderForm.addEventListener(
    'submit',
    (event) => {

      console.log(
        'FORM SUBMIT WORKING'
      );

      handleOperationalActivation(
        event
      );

    }
  );

}
/* =========================================
   START SYSTEM
========================================= */

initializeOpenWorkOrder();
}
