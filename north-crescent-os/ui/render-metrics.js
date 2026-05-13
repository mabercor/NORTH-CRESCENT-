/* =========================================
   NORTH CRESCENT OS
   RENDER METRICS UI
========================================= */


/* =========================================
   RENDER OPERATIONAL METRICS
========================================= */

export function renderMetrics(metrics) {

  /* =========================================
     METRIC ELEMENTS
  ========================================= */

  const liveRevenue =
  document.getElementById(
    'liveRevenue'
  );

  const liveEstimatedProfit =
  document.getElementById(
    'liveEstimatedProfit'
  );

  const liveProfitabilityMargin =
  document.getElementById(
    'liveProfitabilityMargin'
  );

  const liveLaborHours =
  document.getElementById(
    'liveLaborHours'
  );

  const liveOperationalRisk =
  document.getElementById(
    'liveOperationalRisk'
  );

  const liveServiceFrequency =
  document.getElementById(
    'liveServiceFrequency'
  );


  /* =========================================
     MONTHLY REVENUE
  ========================================= */

  if (liveRevenue) {

    liveRevenue.innerText =

      '$' +

      metrics.monthlyRevenue
        .toLocaleString();

  }


  /* =========================================
     ESTIMATED PROFIT
  ========================================= */

  if (liveEstimatedProfit) {

    liveEstimatedProfit.innerText =

      '$' +

      metrics.estimatedProfit
        .toLocaleString();

  }


  /* =========================================
     PROFITABILITY MARGIN
  ========================================= */

  if (liveProfitabilityMargin) {

    liveProfitabilityMargin.innerText =

      metrics.margin + '%';

  }


  /* =========================================
     LABOR HOURS
  ========================================= */

  if (liveLaborHours) {

    liveLaborHours.innerText =

      metrics.laborHours + 'h';

  }


  /* =========================================
     OPERATIONAL RISK
  ========================================= */

  if (liveOperationalRisk) {

    liveOperationalRisk.innerText =

      metrics.operationalRisk;

  }


  /* =========================================
     SERVICE FREQUENCY
  ========================================= */

  if (liveServiceFrequency) {

    liveServiceFrequency.innerText =

      metrics.serviceFrequency;

  }

}
