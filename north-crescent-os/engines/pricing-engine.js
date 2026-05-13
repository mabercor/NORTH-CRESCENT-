/* =========================================
   NORTH CRESCENT
   PRICING ENGINE
========================================= */

import {

  SERVICE_RATES,

  COMPLEXITY_MULTIPLIERS,

  PROFITABILITY_CONFIG,

  OPERATIONAL_THRESHOLDS

} from '../config/pricing-config.js';


/* =========================================
   CALCULATE PRICING
========================================= */

export function calculatePricing(data) {

  /* =========================================
     INPUT DATA
  ========================================= */

  const {

    serviceType,

    squareFootage,

    visits,

    complexity,

    discount

  } = data;


  /* =========================================
     SERVICE RATE
  ========================================= */

  const serviceRate =

    SERVICE_RATES[serviceType] || 0;


  /* =========================================
     COMPLEXITY MULTIPLIER
  ========================================= */

  const complexityMultiplier =

    COMPLEXITY_MULTIPLIERS[complexity] || 1;


  /* =========================================
     BASE REVENUE
  ========================================= */

  const baseRevenue =

    serviceRate *
    squareFootage *
    visits;


  /* =========================================
     COMPLEXITY ADJUSTED REVENUE
  ========================================= */

  const adjustedRevenue =

    baseRevenue *
    complexityMultiplier;


  /* =========================================
     DISCOUNT
  ========================================= */

  const discountAmount =

    adjustedRevenue *
    (discount / 100);


  /* =========================================
     FINAL MONTHLY REVENUE
  ========================================= */

  const monthlyRevenue =

    adjustedRevenue -
    discountAmount;


  /* =========================================
     LABOR HOURS
  ========================================= */

  const laborHours =

    Math.round(
      squareFootage / 500
    ) * visits;


  /* =========================================
     ESTIMATED PROFIT
  ========================================= */

  const estimatedProfit =

    monthlyRevenue *
    PROFITABILITY_CONFIG
      .estimatedProfitMargin;


  /* =========================================
     PROFITABILITY MARGIN
  ========================================= */

  const margin =

    monthlyRevenue > 0

      ? Math.round(

          (estimatedProfit /
          monthlyRevenue) * 100

        )

      : 0;


  /* =========================================
     OPERATIONAL RISK
  ========================================= */

  let operationalRisk = 'Low';


  if (
    laborHours >=
    OPERATIONAL_THRESHOLDS
      .moderateLaborHours
  ) {

    operationalRisk = 'Moderate';

  }

  if (
    laborHours >=
    OPERATIONAL_THRESHOLDS
      .highLaborHours
  ) {

    operationalRisk = 'High';

  }

  if (
    laborHours >=
    OPERATIONAL_THRESHOLDS
      .extremeLaborHours
  ) {

    operationalRisk = 'Extreme';

  }


  /* =========================================
     SERVICE FREQUENCY
  ========================================= */

  let serviceFrequency =
    'Custom Schedule';


  if (visits === 1) {

    serviceFrequency =
    'One-Time Service';

  }

  else if (visits <= 4) {

    serviceFrequency =
    'Weekly Service';

  }

  else if (visits <= 8) {

    serviceFrequency =
    'Bi-Weekly Recurring';

  }

  else if (visits <= 12) {

    serviceFrequency =
    'Recurring Maintenance';

  }

  else if (visits <= 20) {

    serviceFrequency =
    'High Frequency Operations';

  }

  else {

    serviceFrequency =
    'Enterprise Operational Structure';

  }


  /* =========================================
     RETURN RESULTS
  ========================================= */

  return {

    monthlyRevenue,

    estimatedProfit,

    margin,

    laborHours,

    operationalRisk,

    serviceFrequency

  };

}
