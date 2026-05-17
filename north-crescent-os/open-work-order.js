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
/* =========================================
   FORM SUBMIT STATUS CONTROL
========================================= */

const workOrderForm =
document.getElementById(
  'workOrderForm'
);

if (workOrderForm) {

  workOrderForm
  .addEventListener(
    'submit',
    (event) => {

      /* =========================================
         REQUIRED FIELD VALIDATION
      ========================================= */

      const invalidField =

      workOrderForm.querySelector(
        ':invalid'
      );

      if (invalidField) {

        invalidField.classList.add(
          'field-error'
        );

        invalidField.scrollIntoView({

          behavior: 'smooth',

          block: 'center'

        });

      }

      const submitter =
      event.submitter;

      /* =========================================
         ACTIVE CONTRACT
      ========================================= */

      if (
        submitter?.id ===
        'activateOperationalContractBtn'
      ) {

        operationalStatusInput.value =
        'Active';

        console.log(
          'OPERATIONAL STATUS: Active'
        );

      }

      /* =========================================
         PENDING ACTIVATION
      ========================================= */

      if (
        submitter?.id ===
        'savePendingActivationBtn'
      ) {

        operationalStatusInput.value =
        'Pending';

        console.log(
          'OPERATIONAL STATUS: Pending'
        );

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
