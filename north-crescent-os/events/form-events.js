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

const selectedPlanInput =
document.getElementById(
  'selectedPlan'
);
/* =========================================
   CLIENT INPUTS
========================================= */

const companyNameInput =
document.getElementById(
  'companyName'
);

const phoneNumberInput =
document.getElementById(
  'phoneNumber'
);

const emailAddressInput =
document.getElementById(
  'emailAddress'
);

const serviceAddressInput =
document.getElementById(
  'serviceAddress'
);
const leadRecordIdInput =
document.getElementById(
  'leadRecordId'
);
const operationalStatusInput =
document.getElementById(
  'operationalStatus'
);

/* =========================================
   CONTRACT INPUTS
========================================= */
const crmClientStatusInput =
document.getElementById(
  'crmClientStatus'
);

const contractStatusInput =
document.getElementById(
  'contractStatus'
);

const autoRenewalInput =
document.getElementById(
  'autoRenewal'
);

const monthlyContractValueInput =
document.getElementById(
  'monthlyContractValue'
);

const contractStartDateInput =
document.getElementById(
  'contractStartDate'
);

/* =========================================
   OPERATIONS INPUTS
========================================= */

const supervisorAssignedInput =
document.getElementById(
  'supervisorAssigned'
);

const accessInstructionsInput =
document.getElementById(
  'accessInstructions'
);

const sensitiveAreasInput =
document.getElementById(
  'sensitiveAreas'
);

const operationalSummaryInput =
document.getElementById(
  'operationalSummary'
);

const assignedTeamInput =
document.getElementById(
  'assignedTeam'
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
   operationalState.service.squareFootage =
  parseFloat(
    squareFootageInput?.value
  ) || 0;

operationalState.service.visitsPerMonth =
  parseInt(
    visitsInput?.value
  ) || 0;

operationalState.service.estimatedDuration =
  parseFloat(
    durationInput?.value
  ) || 0;

operationalState.service.complexityLevel =
  complexityInput?.value || 'Low';

   operationalState.service.selectedPlan =
  selectedPlanInput?.value || '';
   
   /* =========================================
   RECURRING SCHEDULE ENGINE
========================================= */

const recurringVisits = [];

const scheduleRowsList =
document.querySelectorAll(
  '.schedule-row'
);

scheduleRowsList.forEach((row) => {

  const daySelect =
  row.querySelector(
    '.schedule-day'
  );

  const windowSelect =
  row.querySelector(
    '.schedule-window'
  );

  const selectedDay =
  daySelect?.value || '';

  const selectedWindow =
  windowSelect?.value || '';

  if (
    selectedDay &&
    selectedWindow
  ) {

    recurringVisits.push({

      day: selectedDay,

      window: selectedWindow

    });

  }

});

/* =========================================
   UPDATE SCHEDULING STATE
========================================= */

operationalState.scheduling.recurringVisits =
  recurringVisits;
  /* =========================================
   UPDATE CLIENT MEMORY
========================================= */

operationalState.client.companyName =
  companyNameInput?.value || '';

operationalState.client.phoneNumber =
  phoneNumberInput?.value || '';

operationalState.client.emailAddress =
  emailAddressInput?.value || '';

operationalState.client.serviceAddress =
  serviceAddressInput?.value || '';
   
   operationalState.client.leadRecordId =
  leadRecordIdInput?.value || '';

/* =========================================
   UPDATE CONTRACT STATE
========================================= */

operationalState.contract =
  operationalState.contract || {};
   
operationalState.client.crmClientStatus =
  crmClientStatusInput?.value || '';
   
operationalState.contract.contractStatus =
  contractStatusInput?.value || '';

operationalState.contract.autoRenewal =
  autoRenewalInput?.value || '';

operationalState.contract.monthlyContractValue =
  monthlyContractValueInput?.value || '';

operationalState.contract.contractStartDate =
  contractStartDateInput?.value || '';

/* =========================================
   UPDATE OPERATIONS STATE
========================================= */

operationalState.operations =
  operationalState.operations || {};

operationalState.operations.supervisorAssigned =
  supervisorAssignedInput?.value || '';

operationalState.operations.accessInstructions =
  accessInstructionsInput?.value || '';

operationalState.operations.sensitiveAreas =
  sensitiveAreasInput?.value || '';

operationalState.operations.operationalSummary =
  operationalSummaryInput?.value || '';
   
console.log(
  operationalState.operations.operationalSummary
);
   
   operationalState.operations.operationalStatus =
  operationalStatusInput?.value || '';

operationalState.operations.assignedTeam =
  assignedTeamInput?.value || ''; 
   
operationalState.pricing.discount =
  selectedDiscount;

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
updateOperationalPipeline();
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

selectedPlanInput?.addEventListener(
  'change',
  updateOperationalFlow
);

/* =========================================
   CLIENT EVENT LISTENERS
========================================= */

clientNameInput?.addEventListener(
  'input',
  updateOperationalFlow
);

companyNameInput?.addEventListener(
  'input',
  updateOperationalFlow
);

phoneNumberInput?.addEventListener(
  'input',
  updateOperationalFlow
);

emailAddressInput?.addEventListener(
  'input',
  updateOperationalFlow
);

serviceAddressInput?.addEventListener(
  'input',
  updateOperationalFlow
);

leadRecordIdInput?.addEventListener(
  'input',
  updateOperationalFlow
);
operationalStatusInput?.addEventListener(
  'input',
  updateOperationalFlow
);

/* =========================================
   CONTRACT EVENT LISTENERS
========================================= */
crmClientStatusInput?.addEventListener(
  'change',
  updateOperationalFlow
);

contractStatusInput?.addEventListener(
  'change',
  updateOperationalFlow
);

autoRenewalInput?.addEventListener(
  'change',
  updateOperationalFlow
);

monthlyContractValueInput?.addEventListener(
  'input',
  updateOperationalFlow
);

contractStartDateInput?.addEventListener(
  'change',
  updateOperationalFlow
);

/* =========================================
   OPERATIONS EVENT LISTENERS
========================================= */

supervisorAssignedInput?.addEventListener(
  'input',
  updateOperationalFlow
);

accessInstructionsInput?.addEventListener(
  'input',
  updateOperationalFlow
);

sensitiveAreasInput?.addEventListener(
  'input',
  updateOperationalFlow
);

operationalSummaryInput?.addEventListener(
  'input',
  updateOperationalFlow
);

assignedTeamInput?.addEventListener(
  'change',
  updateOperationalFlow
);

/* =========================================
   INITIAL LOAD
========================================= */

updateOperationalFlow();
/* =========================================
   PIPELINE UI SYNCHRONIZATION
========================================= */

function updateOperationalPipeline() {

  const pipelineSteps =

    document.querySelectorAll(
      '.pipeline-step'
    );

  const currentStatus =

    operationalState.operations
      ?.operationalStatus || 'Lead';

  pipelineSteps.forEach((step) => {

    step.classList.remove(
      'active'
    );

    const stepLabel =

      step.textContent.trim();

    if (
      stepLabel === currentStatus
    ) {

      step.classList.add(
        'active'
      );

    }

  });

}
/* =========================================
   RECURRING SCHEDULE BUILDER
========================================= */
const scheduleRows =
document.getElementById("scheduleRows");

const addScheduleRowBtn =
document.getElementById("addScheduleRow");

/* =========================================
   ADD NEW SCHEDULE ROW
========================================= */

addScheduleRowBtn.addEventListener(
  "click",
  () => {

    const row =
    document.createElement("div");

    row.className =
    "schedule-row";

    row.innerHTML = `

      <!-- DAY -->

      <select class="schedule-day">

        <option value="">
          Select Day
        </option>

        <option value="Monday">
          Monday
        </option>

        <option value="Tuesday">
          Tuesday
        </option>

        <option value="Wednesday">
          Wednesday
        </option>

        <option value="Thursday">
          Thursday
        </option>

        <option value="Friday">
          Friday
        </option>

        <option value="Saturday">
          Saturday
        </option>

        <option value="Sunday">
          Sunday
        </option>

      </select>

      <!-- WINDOW -->

      <select class="schedule-window">

        <option value="">
          Arrival Window
        </option>

        <option value="12AM-4AM">
          12AM – 4AM
        </option>

        <option value="4AM-8AM">
          4AM – 8AM
        </option>

        <option value="8AM-12PM">
          8AM – 12PM
        </option>

        <option value="12PM-4PM">
          12PM – 4PM
        </option>

        <option value="4PM-8PM">
          4PM – 8PM
        </option>

        <option value="8PM-12AM">
          8PM – 12AM
        </option>

      </select>

      <!-- REMOVE -->

      <button
        type="button"
        class="remove-schedule-row">

        ✕

      </button>

    `;

    scheduleRows.appendChild(row);

  }
);

/* =========================================
   REMOVE ROW
========================================= */

scheduleRows.addEventListener(
  "click",
  (event) => {

    if (
      event.target.classList.contains(
        "remove-schedule-row"
      )
    ) {

      const row =
      event.target.closest(
        ".schedule-row"
      );

      row.remove();

    }

  }
);

