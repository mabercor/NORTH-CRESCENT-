/* =========================================
   NORTH CRESCENT SALES PORTAL
   RECOMMENDATION ENGINE
========================================= */


/* =========================================
   PACKAGE RECOMMENDATION ENGINE
========================================= */

export function generateRecommendation(
  configuration
) {

  /* =========================================
     INPUTS
  ========================================= */

  const {

    serviceType,

    squareFootage,

    visitsPerMonth,

    complexityLevel

  } = configuration;


  /* =========================================
     NORMALIZATION
  ========================================= */

  const sqft =
    Number(squareFootage) || 0;

  const visits =
    Number(visitsPerMonth) || 0;


  /* =========================================
     RECOMMENDATION VARIABLES
  ========================================= */

  let recommendedPackage =
    'essential';

  let environmentType =
    'Standard Environment';

  let operationalPriority =
    'Moderate';

  let recurringStructure =
    'Recurring Maintenance';

  let recommendationReason =
    '';

  let packageMultiplier =
    1;


  /* =========================================
     ENVIRONMENT CLASSIFICATION
  ========================================= */

  if (sqft >= 5000) {

    environmentType =
      'Large Operational Environment';

  }

  if (sqft >= 12000) {

    environmentType =
      'Enterprise Environment';

  }

  if (sqft >= 25000) {

    environmentType =
      'High-Traffic Operational Facility';

  }


  /* =========================================
     VISIT FREQUENCY ANALYSIS
  ========================================= */

  if (visits <= 2) {

    recurringStructure =
      'Low Frequency Maintenance';

  }

  else if (visits <= 4) {

    recurringStructure =
      'Structured Recurring Maintenance';

  }

  else if (visits <= 8) {

    recurringStructure =
      'Advanced Operational Coverage';

  }

  else {

    recurringStructure =
      'High-Frequency Operational Program';

  }


  /* =========================================
     COMPLE
