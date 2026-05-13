export function calculateMetrics(state) {

  const serviceRates = {

    "Residential Cleaning": 0.15,

    "Commercial Cleaning": 0.16,

    "Deep Cleaning": 0.22,

    "Move-In / Move-Out": 0.24,

    "Airbnb Cleaning": 0.18,

    "Janitorial Cleaning": 0.14,

    "Post-Construction Cleaning": 0.30

  };

  const complexityMultipliers = {

    Low: 1,

    Moderate: 1.15,

    High: 1.30,

    Extreme: 1.50

  };

  const serviceRate =
    serviceRates[state.serviceType] || 0;

  const complexityMultiplier =
    complexityMultipliers[state.complexityLevel] || 1;

  /* =========================================
     BASE REVENUE
  ========================================= */

  const baseRevenue =

    serviceRate *
    state.squareFootage *
    state.visitsPerMonth;

  /* =========================================
     COMPLEXITY ADJUSTMENT
  ========================================= */

  const adjustedRevenue =

    baseRevenue *
    complexityMultiplier;

/* =========================================
   EXTENDED DURATION CHARGE
========================================= */

let durationCharge = 0;

if ((state.estimatedDuration || 0) > 4) {

  const extraHours =

    (state.estimatedDuration || 0) - 4;

  durationCharge =

    adjustedRevenue *
    (0.25 * extraHours);

}
  /* =========================================
     DISCOUNT
  ========================================= */

  const discountAmount =

    adjustedRevenue *
    ((state.discount || 0) / 100);

  /* =========================================
     FINAL MONTHLY REVENUE
  ========================================= */
const monthlyRevenue =

  adjustedRevenue +
  durationCharge -
  discountAmount;

  /* =========================================
     LABOR HOURS
  ========================================= */

const laborHours =

  state.estimatedDuration *
  state.visitsPerMonth;

  /* =========================================
     ESTIMATED OPERATIONAL COST
  ========================================= */

const operationalBase =

  adjustedRevenue +
  durationCharge;

const operationalCost =

  operationalBase * 0.80;

  /* =========================================
     ESTIMATED PROFIT
  ========================================= */

  const estimatedProfit =

    monthlyRevenue -
    operationalCost;

  /* =========================================
     PROFIT MARGIN
  ========================================= */

  const margin =

    monthlyRevenue > 0

      ? Math.round(
          (estimatedProfit / monthlyRevenue) * 100
        )

      : 0;

  /* =========================================
     OPERATIONAL PRESSURE
  ========================================= */

  let operationalRisk = "Low";

  if (laborHours >= 12) {

    operationalRisk = "Moderate";

  }

  if (laborHours >= 24) {

    operationalRisk = "High";

  }

  if (laborHours >= 40) {

    operationalRisk = "Extreme";

  }

  /* =========================================
     SERVICE FREQUENCY
  ========================================= */

  let serviceFrequency =
    "Custom Schedule";

  if (state.visitsPerMonth === 1) {

    serviceFrequency =
      "One-Time Service";

  }

  else if (state.visitsPerMonth <= 4) {

    serviceFrequency =
      "Weekly Service";

  }

  else if (state.visitsPerMonth <= 8) {

    serviceFrequency =
      "Bi-Weekly Recurring";

  }

  else if (state.visitsPerMonth <= 12) {

    serviceFrequency =
      "Recurring Maintenance";

  }

  else {

    serviceFrequency =
      "High Frequency Operations";

  }
  /* =========================================
   LABOR COST
========================================= */

const laborCost =

  laborHours * 30;

/* =========================================
   DISCOUNT IMPACT
========================================= */

const discountImpact =

  discountAmount;

/* =========================================
   BREAK-EVEN POINT
========================================= */

const breakEvenPoint =

  operationalCost;

/* =========================================
   ANNUAL CONTRACT VALUE
========================================= */

const annualContractValue =

  monthlyRevenue * 12;

/* =========================================
   MARGIN HEALTH
========================================= */

let marginHealth = "Healthy";

if (margin < 30) {

  marginHealth = "Warning";

}

if (margin < 20) {

  marginHealth = "Critical";

}

if (margin >= 45) {

  marginHealth = "Premium";

}

  return {

  monthlyRevenue,

  operationalCost,

  laborCost,

  discountImpact,

  estimatedProfit,

  laborHours,

  margin,

  marginHealth,

  breakEvenPoint,

  annualContractValue,

  operationalRisk,

  serviceFrequency

};
  
}
