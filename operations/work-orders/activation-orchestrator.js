/* =========================================
   NORTH CRESCENT OS
   ACTIVATION ORCHESTRATOR
========================================= */


/* =========================================
   IMPORT MODULES
========================================= */

import {

  generateOperationalPayload

} from '/north-crescent-os/modules/payload-engine.js';
import {

  operationalState

} from '/north-crescent-os/state/state.js';


/* =========================================
   FORM REFERENCES
========================================= */

const workOrderForm =
document.getElementById(
  'workOrderForm'
);
const submitButton =
document.querySelector(
  '.crm-btn.primary'
);

/* =========================================
   MAKE ACTIVATION WEBHOOK
========================================= */

const activationWebhookURL =
'https://hook.us2.make.com/65u2dlcqylj2rgonnihjefvqhlebjkuj';


/* =========================================
   OPERATIONAL ACTIVATION
========================================= */

async function handleOperationalActivation(event) {

  event.preventDefault();
   /* =========================================
   LOADING STATE
========================================= */

submitButton.disabled = true;

submitButton.innerHTML =
'⏳ Activating Operational Infrastructure...';

  const payload =
  generateOperationalPayload(
    operationalState
  );
/* =========================================
   ORCHESTRATION CONTEXT
========================================= */

payload.orchestration = {

  source: 'open-operation',

  conversionFlow: true,

  hasLeadRecord:

    !!payload.client
      ?.leadRecordId,

  timestamp:

    new Date().toISOString()

};
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
     
     /* =========================================
   SUCCESS STATE
========================================= */

submitButton.innerHTML =
'✅ Operational Contract Activated';

  }

  catch (error) {

    console.error(
      'ACTIVATION ERROR:',
      error
    );
/* =========================================
   ERROR STATE
========================================= */

submitButton.disabled = false;

submitButton.innerHTML =
'❌ Activation Failed — Try Again';
     
  }

}


/* =========================================
   INITIALIZATION
========================================= */

export function initializeOpenWorkOrder() {

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

}


