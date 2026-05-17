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
   ACTIVE CONTRACT BUTTON
========================================= */

if (activateOperationalContractBtn) {

  activateOperationalContractBtn
  .addEventListener(
    'click',
    () => {

      operationalStatusInput.value =
      'Active';

      console.log(
        'OPERATIONAL STATUS: Active'
      );

    }
  );

}
