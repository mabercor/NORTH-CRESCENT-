/* =========================================
   NORTH CRESCENT OS
   CENTRAL OPERATIONAL STATE
========================================= */



/* =========================================
   OPERATIONAL STATE
========================================= */

export const operationalState = {


  /* =========================================
     CLIENT DATA
  ========================================= */

  client: {

  clientName: '',

  companyName: '',

  mainContact: '',

  phoneNumber: '',

  emailAddress: '',

  serviceAddress: ''

},

service: {

  serviceType: '',

  days: '',

  timeSlot: ''

},

  /* =========================================
     PRICING DATA
  ========================================= */

  pricing: {

    serviceType: 'Residential Cleaning',

    squareFootage: 0,

    visits: 1,

    estimatedDuration: 1,

    complexity: 'Low',

    discount: 0

  },


  /* =========================================
     ANALYTICS RESULTS
  ========================================= */

  analytics: {

    monthlyRevenue: 0,

    estimatedProfit: 0,

    margin: 0,

    laborHours: 0,

    operationalRisk: 'Low',

    serviceFrequency: 'Custom Schedule'

  },


  /* =========================================
     SCHEDULING DATA
  ========================================= */

 scheduling: {

  recurringVisits: []

},
/* =========================================
   CONTRACT DATA
========================================= */

contract: {

  contractStatus: '',

  autoRenewal: '',

  monthlyContractValue: '',

  contractStartDate: ''

},

/* =========================================
   OPERATIONS DATA
========================================= */

operations: {

  supervisorAssigned: '',

  accessInstructions: '',

  sensitiveAreas: '',

  operationalSummary: '',

  assignedTeam: ''

},

  /* =========================================
     OPERATIONAL FLAGS
  ========================================= */

  operational: {

    alerts: [],

    recommendations: [],

    operationalStatus: 'Stable'

  }

};


/* =========================================
   UPDATE PRICING STATE
========================================= */

export function updatePricingState(data) {

  operationalState.pricing = {

    ...operationalState.pricing,

    ...data

  };

}


/* =========================================
   UPDATE ANALYTICS STATE
========================================= */

export function updateAnalyticsState(data) {

  operationalState.analytics = {

    ...operationalState.analytics,

    ...data

  };

}


/* =========================================
   UPDATE CLIENT STATE
========================================= */

export function updateClientState(data) {

  operationalState.client = {

    ...operationalState.client,

    ...data

  };

}


/* =========================================
   UPDATE SCHEDULING STATE
========================================= */

export function updateSchedulingState(data) {

  operationalState.scheduling = {

    ...operationalState.scheduling,

    ...data

  };

}


/* =========================================
   UPDATE OPERATIONAL STATE
========================================= */

export function updateOperationalState(data) {

  operationalState.operational = {

    ...operationalState.operational,

    ...data

  };

}
