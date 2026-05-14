/* =========================================
   NORTH CRESCENT OS
   PAYLOAD ENGINE
========================================= */

export function generateOperationalPayload(state) {

  return {

    client: {

      clientName:
      state.client?.clientName || '',

      companyName:
      state.client?.companyName || '',

      mainContact:
      state.client?.mainContact || '',

      phoneNumber:
      state.client?.phoneNumber || '',

      emailAddress:
      state.client?.emailAddress || '',

      serviceAddress:
      state.client?.serviceAddress || ''

    },


    service: {

      serviceType:
      state.service?.serviceType || '',

      squareFootage:
      state.service?.squareFootage || '',

      visitsPerMonth:
      state.service?.visitsPerMonth || '',

      estimatedDuration:
      state.service?.estimatedDuration || '',

      complexityLevel:
      state.service?.complexityLevel || ''

    },


    scheduling: {

      days:
      state.service?.days || '',

      timeSlot:
      state.service?.timeSlot || '',

      schedulingNotes:
      state.service?.schedulingNotes || ''

    },


    pricing: {

      monthlyRevenue:
      state.pricing?.monthlyRevenue || 0,

      estimatedProfit:
      state.pricing?.estimatedProfit || 0,

      profitability:
      state.pricing?.profitability || 0,

      operationalCost:
      state.pricing?.operationalCost || 0,

      annualValue:
      state.pricing?.annualValue || 0

    }

  };

}
