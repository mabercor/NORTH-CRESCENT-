/* =========================================
   NORTH CRESCENT OS
   RENDER METRICS UI
========================================= */


/* =========================================
   RENDER OPERATIONAL METRICS
========================================= */

export function renderMetrics(metrics) {

  /* =========================================
     LIVE ANALYTICS
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
     CLIENT OPERATIONAL INTELLIGENCE
  ========================================= */

  const clientOperationalCost =
  document.getElementById(
    'clientOperationalCost'
  );

  const clientLaborCost =
  document.getElementById(
    'clientLaborCost'
  );

  const clientDiscountImpact =
  document.getElementById(
    'clientDiscountImpact'
  );

  const clientMarginHealth =
  document.getElementById(
    'clientMarginHealth'
  );

  const clientProfitability =
  document.getElementById(
    'clientProfitability'
  );

  const clientBreakEven =
  document.getElementById(
    'clientBreakEven'
  );

  const clientAnnualValue =
  document.getElementById(
    'clientAnnualValue'
  );


  /* =========================================
     LIVE REVENUE
  ========================================= */

  if (liveRevenue) {

    liveRevenue.innerText =

      '$' +

      metrics.monthlyRevenue
        .toLocaleString();

  }


  /* =========================================
     LIVE PROFIT
  ========================================= */

  if (liveEstimatedProfit) {

    liveEstimatedProfit.innerText =

      '$' +

      metrics.estimatedProfit
        .toLocaleString();

  }


  /* =========================================
     LIVE MARGIN
  ========================================= */

  if (liveProfitabilityMargin) {

    liveProfitabilityMargin.innerText =

      metrics.margin + '%';

  }


  /* =========================================
     LIVE LABOR HOURS
  ========================================= */

  if (liveLaborHours) {

    liveLaborHours.innerText =

      metrics.laborHours + 'h';

  }


  /* =========================================
     LIVE OPERATIONAL RISK
  ========================================= */

  if (liveOperationalRisk) {

    liveOperationalRisk.innerText =

      metrics.operationalRisk;

  }


  /* =========================================
     LIVE SERVICE FREQUENCY
  ========================================= */

  if (liveServiceFrequency) {

    liveServiceFrequency.innerText =

      metrics.serviceFrequency;

  }

/* =========================================
   CLIENT OPERATIONAL INTELLIGENCE
========================================= */

const clientServiceValue =
document.getElementById(
  "clientServiceValue"
);

const clientEstimatedProfit =
document.getElementById(
  "clientEstimatedProfit"
);


/* SERVICE VALUE */

if (clientServiceValue) {

  clientServiceValue.textContent =

    `$${metrics.monthlyRevenue.toFixed(2)}`;

}


/* OPERATIONAL COST */

if (clientOperationalCost) {

  clientOperationalCost.textContent =

    `$${metrics.operationalCost.toFixed(2)}`;

}


/* LABOR COST */

if (clientLaborCost) {

  clientLaborCost.textContent =

    `$${metrics.laborCost.toFixed(2)}`;

}


/* DISCOUNT IMPACT */

if (clientDiscountImpact) {

  clientDiscountImpact.textContent =

    `$${metrics.discountImpact.toFixed(2)}`;

}


/* ESTIMATED PROFIT */

if (clientEstimatedProfit) {

  clientEstimatedProfit.textContent =

    `$${metrics.estimatedProfit.toFixed(2)}`;

}


/* PROFITABILITY */

if (clientProfitability) {

  clientProfitability.textContent =

    `${metrics.margin}%`;

}


/* MARGIN HEALTH */

if (clientMarginHealth) {

  clientMarginHealth.textContent =

    metrics.marginHealth;

}


/* BREAK-EVEN */

if (clientBreakEven) {

  clientBreakEven.textContent =

    `$${metrics.breakEvenPoint.toFixed(2)}`;

}


/* ANNUAL VALUE */

if (clientAnnualValue) {

  clientAnnualValue.textContent =

    `$${metrics.annualContractValue.toFixed(2)}`;

}
