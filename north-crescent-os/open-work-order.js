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
import
'/operations/work-orders/activation-orchestrator.js';

/* =========================================
   SYSTEM INITIALIZATION
========================================= */

initializeClientSearch();

console.log(
  'North Crescent OS Active'
);
