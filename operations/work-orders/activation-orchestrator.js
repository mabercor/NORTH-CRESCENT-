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
     
     /* =========================================
   RESPONSE PERSISTENCE
========================================= */

if (result.clientId) {

  operationalState.client.clientId =

    result.clientId;

}

if (result.operationalStatus) {

  operationalState.operations
    .operationalStatus =

      result.operationalStatus;

}

console.log(
  'UPDATED OPERATIONAL STATE:',
  operationalState
);

    console.log(
      'ACTIVATION SUCCESS:',
      result
    );
     
     /* =========================================
   SUCCESS STATE
========================================= */

submitButton.innerHTML =
'✅ Operational Contract Activated';
     
     /* SUCCESS MESSAGE */

const activationSuccessMessage =
document.getElementById(
  'activationSuccessMessage'
);

if (activationSuccessMessage) {

  activationSuccessMessage.innerText =
  '✅ Operational Activation Successfully Created';

  activationSuccessMessage.style.display =
  'block';

}
     /* =========================================
   FORM RESET
========================================= */

setTimeout(() => {

  workOrderForm.reset();
   /* RESET OPERATIONAL STATE */

Object.keys(
  operationalState
).forEach((section) => {

  operationalState[section] = {};

});

  /* RESET OPERATIONAL STATUS */

  const operationalStatusInput =
  document.getElementById(
    'operationalStatus'
  );

  if (operationalStatusInput) {

    operationalStatusInput.value =
    'Lead';

  }

  /* RESET WORKFLOW VISUAL */

  const operationalWorkflowStatus =
  document.getElementById(
    'operationalWorkflowStatus'
  );

  if (operationalWorkflowStatus) {

    operationalWorkflowStatus.innerText =
    'No operational workflow selected';

    operationalWorkflowStatus.style.background =
    'rgba(30, 58, 95, 0.08)';

    operationalWorkflowStatus.style.border =
    '1px solid rgba(30, 58, 95, 0.15)';

    operationalWorkflowStatus.style.color =
    '#1E3A5F';

  }

  /* HIDE SUCCESS MESSAGE */

const activationSuccessMessage =
document.getElementById(
  'activationSuccessMessage'
);

if (activationSuccessMessage) {

  activationSuccessMessage.style.display =
  'none';

}
   /* RESET BUTTON */

  submitButton.disabled = false;

  submitButton.innerHTML =
  '🚀 Activate Operational Contract';

}, 2500);
     
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


