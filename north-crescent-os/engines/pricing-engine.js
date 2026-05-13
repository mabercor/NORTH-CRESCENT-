export function calculateMetrics(state) {

  const serviceRates = {

    "Residential Cleaning": 0.12,
    "Commercial Cleaning": 0.10,
    "Deep Cleaning": 0.18,
    "Move-In / Move-Out": 0.20,
    "Airbnb Cleaning": 0.15,
    "Janitorial Cleaning": 0.09,
    "Post-Construction Cleaning": 0.25

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
