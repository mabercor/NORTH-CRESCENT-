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
  '
   if (workOrderForm) {

  workOrderForm
  .addEventListener(
    'submit',
    (event) => {

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
