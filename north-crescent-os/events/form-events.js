/* =========================================
   NORTH CRESCENT OS
   FORM EVENTS
========================================= */

import {

  operationalState,

  updatePricingState,

  updateAnalyticsState

} from '../state/state.js';


import {

  calculatePricing

} from '../engines/pricing-engine.js';


import {

  renderMetrics

} from '../ui/render-metrics.js';


/* =========================================
   FORM ELEMENTS
========================================= */

const serviceTypeInput =
document.getElementById(
  'serviceType'
);

const squareFootageInput =
document.getElementById(
  'squareFootage'
);

const visitsInput =
document.getElementById(
  'visitsPerMonth'
);

const complexityInput =
document.getElementById(
  'complexityLevel'
);


/* =========================================
   UPDATE OPERATIONAL FLOW
========================================= */

function updateOperationalFlow() {

  /* =========================================
     UPDATE STATE
  ========================================= */

  updatePricingState({

    serviceType:
      serviceTypeInput?.value || '',

    squareFootage:
      parseFloat(
        squareFootageInput?.value
      ) || 0,

    visits:
      parseInt(
        visitsInput?.value
      ) || 0,

    complexity:
      complexityInput?.value || 'Low',

    discount: 0

  });


  /* =========================================
     RUN PRICING ENGINE
  ========================================= */

  const pricingResults =

    calculatePricing(
      operationalState.pricing
    );


  /* =========================================
     UPDATE ANALYTICS STATE
  ========================================= */

  updateAnalyticsState(
    pricingResults
  );


  /* =========================================
     RENDER UI
  ========================================= */

  renderMetrics(
    operationalState.analytics
  );

}


/* =========================================
   EVENT LISTENERS
========================================= */

serviceTypeInput?.addEventListener(
  'change',
  updateOperationalFlow
);

squareFootageInput?.addEventListener(
  'input',
  updateOperationalFlow
);

visitsInput?.addEventListener(
  'input',
  updateOperationalFlow
);

complexityInput?.addEventListener(
  'change',
  updateOperationalFlow
);


/* =========================================
   INITIAL LOAD
========================================= */

updateOperationalFlow();
