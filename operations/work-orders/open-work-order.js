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
   OPERATIONAL ACTIVATION
========================================= */

function handleOperationalActivation(event) {

  event.preventDefault();

  const payload =
  generateOperationalPayload(
    operationalState
  );

  console.log(
    'OPERATIONAL PAYLOAD:',
    payload
  );

}


/* =========================================
   INITIALIZATION
========================================= */

function initializeOpenWorkOrder() {

  console.log(
    'OPEN WORK ORDER READY'
  );

  if (workOrderForm) {

    workOrderForm.addEventListener(
      'submit',
      handleOperationalActivation
    );

  }

}


/* =========================================
   START SYSTEM
========================================= */

initializeOpenWorkOrder();
