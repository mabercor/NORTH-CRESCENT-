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
