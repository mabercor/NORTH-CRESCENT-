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
const clientNameInput =
document.getElementById(
  'clientName'
);

const daysInput =
document.getElementById(
  'days'
);

const timeSlotInput =
document.getElementById(
  'timeSlot'
);

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

      const cardDiscount =

        parseFloat(
          card.dataset.discount
        ) || 0;

      /* TOGGLE OFF */

      if (
        selectedDiscount ===
        cardDiscount
      ) {

        selectedDiscount = 0;

        card.classList.remove(
          'active'
        );

        updateOperationalFlow();

        return;

      }

      /* REMOVE ACTIVE */

      discountCards.forEach((item) => {

        item.classList.remove(
          'active'
        );

      });

      /* ACTIVATE */

      card.classList.add(
        'active'
      );

      selectedDiscount =
        cardDiscount;

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
   
   /* =========================================
   UPDATE CLIENT STATE
========================================= */

operationalState.client.clientName =
  clientNameInput?.value || '';


/* =========================================
   UPDATE SERVICE STATE
========================================= */

operationalState.service.serviceType =
  serviceTypeInput?.value || '';

operationalState.service.days =
  daysInput?.value || '';

operationalState.service.timeSlot =
  timeSlotInput?.value || '';

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

    estimatedDuration:

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
