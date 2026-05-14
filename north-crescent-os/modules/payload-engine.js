/* =========================================
   NORTH CRESCENT OS
   PAYLOAD ENGINE
========================================= */


/* =========================================
   GENERATE OPERATIONAL PAYLOAD
========================================= */

export function generateOperationalPayload(state) {

  return {

    /* =========================================
       CLIENT
    ========================================= */

    client: {

      clientName:
      state.clientName || '',

      companyName:
      state.companyName || '',

      mainContact:
      state.mainContact || '',

      phoneNumber:
      state.phoneNumber || '',

      emailAddress:
      state.emailAddress || ''

    },


    /* =========================================
       SERVICE
    ========================================= */

    service: {

      serviceType:
      state.serviceType || '',

      squareFootage:
      state.squareFootage || '',

      visitsPerMonth:
      state.visitsPerMonth || '',

      estimatedDuration:
      state.estimatedDuration || '',

      complexityLevel:
      state.complexityLevel || ''

    },


    /* =========================================
       SCHEDULING
    ========================================= */

    scheduling: {

      days:
      state.days || '',

      timeSlot:
      state.timeSlot || '',

      schedulingNotes:
      state.schedulingNotes || ''

    },


    /* =========================================
       FINANCIALS
    ========================================= */

    financials: {

      monthlyRevenue:
      state.monthlyRevenue || 0,

      estimatedProfit:
      state.estimatedProfit || 0,

      profitability:
      state.profitability || 0,

      operationalCost:
      state.operationalCost || 0,

      annualValue:
      state.annualValue || 0

    },


    /* =========================================
       OPERATIONAL
    ========================================= */

    operational: {

      operationalSummary:
      state.operationalSummary || '',

      priorityLevel:
      state.priorityLevel || '',

      contractStructure:
      state.contractStructure || ''

    }

  };

}
