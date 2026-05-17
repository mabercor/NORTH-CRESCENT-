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
   PENDING ACTIVATION BUTTON
========================================= */

const savePendingActivationBtn =
document.getElementById(
  'savePendingActivationBtn'
);

if (savePendingActivationBtn) {

  savePendingActivationBtn
  .addEventListener(
    'click',
    () => {

      console.log(
        'PENDING ACTIVATION SAVED'
      );

      alert(
        'Pending Activation Saved'
      );

    }
  );

}
