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

  calculateMetrics

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

const durationInput =
document.getElementById(
  'estimatedDuration'
);

const complexityInput =
document.getElementById(
  'complexityLevel'
);


/* =========================================
   DISCOUNT ENGINE
========================================= */

const discountCards =
document.querySelectorAll(
  '.discount-card'
);

let selectedDiscount = 0;

discountCards.forEach((card) => {

  card.addEventListener(
    'click',
    () => {

      discountCards.forEach((item) => {

        item.classList.remove(
          'active'
        );

      });

      card.classList.add(
        'active'
      );

      selectedDiscount =
      parseFloat(
        card.dataset.discount
      ) || 0;

      updateOperationalFlow();

    }
  );

});


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

    visitsPerMonth:
      parseInt(
        visitsInput?.value
      ) || 0,

    duration:
      parseFloat(
        durationInput?.value
      ) || 0,

    complexityLevel:
      complexityInput?.value || 'Low',

    discount:
      selectedDiscount

  });


  /* =========================================
     RUN PRICING ENGINE
  ========================================= */

  const pricingResults =

    calculateMetrics(
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

durationInput?.addEventListener(
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
