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
