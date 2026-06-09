/* =========================================
   NORTH CRESCENT SALES PORTAL
   RECOMMENDATION ENGINE
========================================= */

export function generateRecommendation(
  configuration
) {

  const {

    serviceType,

    squareFootage,

    visitsPerMonth,

    complexityLevel

  } = configuration;

  const sqft =
    Number(squareFootage) || 0;

  const visits =
    Number(visitsPerMonth) || 0;

  let recommendedPackage =
    'essential';

  let environmentType =
    'Standard Environment';

  let recommendationReason =
    '';

  /* =========================================
     ENVIRONMENT SIZE
  ========================================= */

  if (sqft >= 5000) {

    environmentType =
      'Large Environment';

  }

  if (sqft >= 12000) {

    environmentType =
      'Enterprise Environment';

  }

  /* =========================================
     PACKAGE LOGIC
  ========================================= */

  if (

    sqft < 5000 &&

    visits <= 2 &&

    complexityLevel === 'Low'

  ) {

    recommendedPackage =
      'essential';

    recommendationReason =
      'Low frequency maintenance environment';

  }

  else if (

    sqft < 12000 &&

    visits <= 4

  ) {

    recommendedPackage =
      'structured';

    recommendationReason =
      'Recurring operational environment';

  }

  else {

    recommendedPackage =
      'executive';

    recommendationReason =
      'High-demand operational environment';

  }

  return {

    recommendedPackage,

    environmentType,

    recommendationReason,

    essential: {

      oldPrice: 450,

      price: 396,

      savings: 12

    },

    structured: {

      oldPrice: 950,

      price: 765,

      savings: 19

    },

    executive: {

      oldPrice: 1450,

      price: 1100,

      savings: 24

    }

  };

}
