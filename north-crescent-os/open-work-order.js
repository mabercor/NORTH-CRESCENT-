/* =========================================
   NORTH CRESCENT OS
   OPEN WORK ORDER
========================================= */


/* =========================================
   MODULE IMPORTS
========================================= */

import './events/form-events.js';

import {
  initializeClientSearch
} from './modules/client-search.js';
import {

  initializeOpenWorkOrder

} from '/operations/work-orders/activation-orchestrator.js';

/* =========================================
   SYSTEM INITIALIZATION
========================================= */

initializeClientSearch();
initializeOpenWorkOrder();
console.log(
  'North Crescent OS Active'
);
/* =========================================
   OPERATIONAL STATUS BUTTONS
========================================= */

const activateOperationalContractBtn =
document.getElementById(
  'activateOperationalContractBtn'
);

const savePendingActivationBtn =
document.getElementById(
  'savePendingActivationBtn'
);

const operationalStatusInput =
document.getElementById(
  'operationalStatus'
);
const operationalWorkflowStatus =
document.getElementById(
  'operationalWorkflowStatus'
);
const workOrderForm =
document.getElementById(
  'workOrderForm'
);
/* =========================================
   OPERATIONAL STATUS BUTTONS
========================================= */

if (
  activateOperationalContractBtn &&
  operationalStatusInput
) {

  activateOperationalContractBtn
  .addEventListener(
    'click',
    () => {

      operationalStatusInput.value =
      'Active';
       
       workOrderForm.requestSubmit();
       
      console.log(
        'OPERATIONAL STATUS: Active'
      );
       if (operationalWorkflowStatus) {

  operationalWorkflowStatus.innerText =
  '🟢 Active Operational Workflow Selected';

  operationalWorkflowStatus.style.background =
  'rgba(74, 155, 140, 0.12)';

  operationalWorkflowStatus.style.border =
  '1px solid rgba(74, 155, 140, 0.28)';

  operationalWorkflowStatus.style.color =
  '#4A9B8C';

}

    }
  );

}

if (
  savePendingActivationBtn &&
  operationalStatusInput
) {

  savePendingActivationBtn
  .addEventListener(
    'click',
    () => {

      operationalStatusInput.value =
      'Pending';

      console.log(
        'OPERATIONAL STATUS: Pending'
      );
       if (operationalWorkflowStatus) {

  operationalWorkflowStatus.innerText =
  '🔵 Pending Operational Workflow Selected';

  operationalWorkflowStatus.style.background =
  'rgba(30, 58, 95, 0.10)';

  operationalWorkflowStatus.style.border =
  '1px solid rgba(30, 58, 95, 0.22)';

  operationalWorkflowStatus.style.color =
  '#1E3A5F';

}

    }
  );

}
/* =========================================
   REMOVE ERROR STATE ON INPUT
========================================= */

const requiredFields =
document.querySelectorAll(
  '[required]'
);

requiredFields.forEach((field) => {

  field.addEventListener(
    'input',
    () => {

      field.classList.remove(
        'field-error'
      );

    }
  );

  field.addEventListener(
    'change',
    () => {

      field.classList.remove(
        'field-error'
      );

    }
  );

});
