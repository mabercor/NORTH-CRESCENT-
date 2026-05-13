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

  /* BASE REVENUE */

  const baseRevenue =

    serviceRate *
    state.squareFootage *
    state.visitsPerMonth;

  /* COMPLEXITY */

  const adjustedRevenue =

    baseRevenue *
    complexityMultiplier;

  /* DISCOUNT */

  const discountAmount =

    adjustedRevenue *
    (state.discount / 100);

  /* FINAL MONTHLY REVENUE */

  const monthlyRevenue =

    adjustedRevenue -
    discountAmount;

  /* LABOR HOURS */

  const laborHours =

    state.duration *
    state.visitsPerMonth;

  /* ESTIMATED PROFIT */

  const estimatedProfit =

    monthlyRevenue * 0.42;

  /* PROFIT MARGIN */

  const margin =

    monthlyRevenue > 0

      ? Math.round(
          (estimatedProfit / monthlyRevenue) * 100
        )

      : 0;

  return {

    monthlyRevenue,
    estimatedProfit,
    laborHours,
    margin

  };

}
