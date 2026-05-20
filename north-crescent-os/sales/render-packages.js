/* =========================================
   NORTH CRESCENT SALES PORTAL
   RENDER PACKAGES
========================================= */

import {
  generateRecommendation
} from './recommendation-engine.js';


/* =========================================
   PACKAGE GRID
========================================= */

const packagesGrid =
document.getElementById(
  'packagesGrid'
);


/* =========================================
   PACKAGE STATE
========================================= */

let activePackage =
'structured';


/* =========================================
   RENDER PACKAGES
========================================= */

export function renderPackages(
  configuration
) {

  if (!packagesGrid) return;


  /* =========================================
     GENERATE RECOMMENDATION
  ========================================= */

  const recommendation =

    generateRecommendation(
      configuration
    );


  /* =========================================
     PACKAGE DATA
  ========================================= */

  const packageList = [

    {
      key: 'essential',

      badge:
      'Essential',

      title:
      'Essential Maintenance Program',

      frequency:
      '2 Visits / Month',

      description:
      'Ideal for maintaining recurring environmental consistency and foundational operational presentation.',

      oldPrice:
      recommendation.essential.oldPrice,

      price:
      recommendation.essential.price,

      savings:
      recommendation.essential.savings,

      benefits: [

        'Structured recurring maintenance',

        'Environment consistency tracking',

        'Standard operational support'

      ]

    },


    {
      key: 'structured',

      featured: true,

      badge:
      'Structured Coverage',

      title:
      'Operational Consistency Program',

      frequency:
      '4 Visits / Month',

      description:
      'Balanced operational structure designed for recurring presentation, consistency, and long-term environmental stability.',

      oldPrice:
      recommendation.structured.oldPrice,

      price:
      recommendation.structured.price,

      savings:
      recommendation.structured.savings,

      benefits: [

        'Priority operational scheduling',

        'Advanced consistency maintenance',

        'Recurring environment stabilization'

      ]

    },


    {
      key: 'executive',

      badge:
      'Executive Coverage',

      title:
      'Executive Environment Program',

      frequency:
      '8 Visits / Month',

      description:
      'Comprehensive operational support designed for high-traffic or executive-level environments.',

      oldPrice:
      recommendation.executive.oldPrice,

      price:
      recommendation.executive.price,

      savings:
      recommendation.executive.savings,

      benefits: [

        'High-frequency operational support',

        'Premium environment presentation',

        'Executive-level maintenance consistency'

      ]

    }

  ];


  /* =========================================
     CLEAR GRID
  ========================================= */

  packagesGrid.innerHTML = '';


  /* =========================================
     RENDER PACKAGE CARDS
  ========================================= */

  packageList.forEach(
    (pkg) => {

      const card =
      document.createElement(
        'article'
      );

      card.className =

        `
        package-card
        glass-card
        ${pkg.featured ? 'featured' : ''}
        ${activePackage === pkg.key ? 'active-package' : ''}
        `;


      /* =========================================
         CARD HTML
      ========================================= */

      card.innerHTML = `

        ${
          pkg.featured

          ? `

            <div class="featured-tag">
              MOST RECOMMENDED
            </div>

          `

          : ''
        }

        <div class="
          package-badge
          ${pkg.featured ? 'recommended' : ''}
        ">

          ${pkg.badge}

        </div>


        <h3>

          ${pkg.title}

        </h3>


        <p class="package-frequency">

          ${pkg.frequency}

        </p>


        <p class="package-description">

          ${pkg.description}

        </p>


        <div class="package-price-block">

          <p class="package-old-price">

            $${pkg.oldPrice}

          </p>


          <div class="package-price">

            $${pkg.price}

            <span>
              / month
            </span>

          </div>


          <div class="package-save">

            SAVE ${pkg.savings}%

          </div>

        </div>


        <ul class="package-benefits">

          ${pkg.benefits.map(
            (benefit) => `

              <li>

                ${benefit}

              </li>

            `
          ).join('')}

        </ul>


        <button
          class="
            package-btn
            ${pkg.featured ? 'featured-btn' : ''}
          "

          data-package="${pkg.key}"

        >

          ${
            activePackage === pkg.key

            ? 'Selected Program'

            : 'View Recommendation'
          }

        </button>

      `;


      /* =========================================
         PACKAGE SELECTION
      ========================================= */

      const button =
      card.querySelector(
        '.package-btn'
      );

      if (button) {

        button.addEventListener(
          'click',
          () => {

            activePackage =
            pkg.key;


            /* RE-RENDER */

            renderPackages(
              configuration
            );


            /* UPDATE SUMMARY */

            updateRecommendationSummary(
              pkg,
              recommendation
            );

          }
        );

      }


      /* =========================================
         APPEND CARD
      ========================================= */

      packagesGrid.appendChild(
        card
      );

    }
  );


  /* =========================================
     INITIAL SUMMARY
  ========================================= */

  const selectedPackage =

    packageList.find(
      (pkg) =>
      pkg.key === activePackage
    );

  if (selectedPackage) {

    updateRecommendationSummary(
      selectedPackage,
      recommendation
    );

  }

}


/* =========================================
   UPDATE SUMMARY
========================================= */

function updateRecommendationSummary(
  packageData,
  recommendation
) {

  const selectedPlan =
  document.getElementById(
    'selectedPlan'
  );

  const selectedFrequency =
  document.getElementById(
    'selectedFrequency'
  );

  const selectedPrice =
  document.getElementById(
    'selectedPrice'
  );

  const selectedBenefits =
  document.getElementById(
    'selectedBenefits'
  );


  /* =========================================
     TITLE
  ========================================= */

  if (selectedPlan) {

    selectedPlan.innerText =

      packageData.title;

  }


  /* =========================================
     FREQUENCY
  ========================================= */

  if (selectedFrequency) {

    selectedFrequency.innerText =

      `
      ${packageData.frequency}
      •
      ${recommendation.environmentType}
      `;

  }


  /* =========================================
     PRICE
  ========================================= */

  if (selectedPrice) {

    selectedPrice.innerText =

      `$${packageData.price}`;

  }


  /* =========================================
     BENEFITS
  ========================================= */

  if (selectedBenefits) {

    selectedBenefits.innerHTML = '';

    packageData.benefits.forEach(
      (benefit) => {

        const li =
        document.createElement(
          'li'
        );

        li.innerText =
        benefit;

        selectedBenefits
        .appendChild(li);

      }
    );

  }

}


/* =========================================
   INITIALIZE DEFAULT EXPERIENCE
========================================= */

renderPackages({

  serviceType:
  'Commercial Cleaning',

  squareFootage:
  6500,

  visitsPerMonth:
  4,

  complexityLevel:
  'Moderate'

});


/* =========================================
   SYSTEM STATUS
========================================= */

console.log(

  'Package Rendering Engine Active'

);
