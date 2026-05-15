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

  discount:
  state.pricing?.discount || 0

},

analytics: {

  monthlyRevenue:
  state.analytics?.monthlyRevenue || 0,

  estimatedProfit:
  state.analytics?.estimatedProfit || 0,

  profitability:
  state.analytics?.margin || 0,

  operationalCost:
  state.analytics?.operationalCost || 0,

  annualValue:
  state.analytics?.annualValue || 0

},

contract: {

  contractStatus:
  state.contract?.contractStatus || '',

  autoRenewal:
  state.contract?.autoRenewal || '',

  monthlyContractValue:
  state.contract?.monthlyContractValue || '',

  contractStartDate:
  state.contract?.contractStartDate || ''

},

operations: {

  supervisorAssigned:
  state.operations?.supervisorAssigned || '',

  accessInstructions:
  state.operations?.accessInstructions || '',

  sensitiveAreas:
  state.operations?.sensitiveAreas || '',

  operationalSummary:
  state.operations?.operationalSummary || '',

  assignedTeam:
  state.operations?.assignedTeam || ''

}

  };

}
