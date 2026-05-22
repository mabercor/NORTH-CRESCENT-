/* =========================================
   NORTH CRESCENT SALES PORTAL
   PRIVATE CLIENT EXPERIENCE
========================================= */


/* =========================================
   PACKAGE DATA
========================================= */

const packageData = {

  essential: {

    title:
      'Essential Maintenance Program',

    frequency:
      '2 Visits / Month',

    price:
      '$396 / month',

    benefits: [

      'Structured recurring maintenance',

      'Environment consistency tracking',

      'Standard operational support'

    ]

  },


  structured: {

    title:
      'Operational Consistency Program',

    frequency:
      '4 Visits / Month',

    price:
      '$765 / month',

    benefits: [

      'Priority operational scheduling',

      'Advanced consistency maintenance',

      'Recurring environment stabilization'

    ]

  },


  executive: {

    title:
      'Executive Environment Program',

    frequency:
      '8 Visits / Month',

    price:
      '$1100 / month',

    benefits: [

      'High-frequency operational support',

      'Premium environment presentation',

      'Executive-level maintenance consistency'

    ]

  }

};


/* =========================================
   DOM REFERENCES
========================================= */


/* COLLAPSIBLE MODULES */

const toggleButtons =
document.querySelectorAll(
  '[data-toggle]'
);


/* PACKAGE CARDS */

const packageCards =
document.querySelectorAll(
  '.program-card'
);

const packageButtons =
document.querySelectorAll(
  '.program-btn'
);


/* SUMMARY */

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


/* CONTACT OPTIONS */

const contactOptions =
document.querySelectorAll(
  '.contact-buttons button'
);


/* =========================================
   COLLAPSIBLE MODULES
========================================= */

toggleButtons.forEach(
  (button) => {

    button.addEventListener(
      'click',
      () => {

        const targetId =
        button.getAttribute(
          'data-toggle'
        );

        const target =
        document.getElementById(
          targetId
        );

        if (!target) return;

        target.classList.toggle(
          'active'
        );

      }
    );

  }
);


/* =========================================
   PACKAGE SELECTION SYSTEM
========================================= */

packageButtons.forEach(
  (button, index) => {

    button.addEventListener(
      'click',
      () => {

        /* REMOVE ACTIVE STATE */

        packageCards.forEach(
          (card) => {

            card.classList.remove(
              'active-package'
            );

          }
        );


        /* ACTIVATE CURRENT CARD */

        const currentCard =
        packageCards[index];

        if (currentCard) {

          currentCard.classList.add(
            'active-package'
          );

        }


        /* DETERMINE PACKAGE */

        let selectedPackage =
        'essential';

        if (index === 1) {

          selectedPackage =
          'structured';

        }

        if (index === 2) {

          selectedPackage =
          'executive';

        }


        /* UPDATE SUMMARY */

        updateSummary(
          selectedPackage
        );

      }
    );

  }
);


/* =========================================
   UPDATE SUMMARY
========================================= */

function updateSummary(
  packageKey
) {

  const packageInfo =
  packageData[packageKey];

  if (!packageInfo) return;


  /* TITLE */

  if (selectedPlan) {

    selectedPlan.innerText =

      packageInfo.title;

  }


  /* FREQUENCY */

  if (selectedFrequency) {

    selectedFrequency.innerText =

      packageInfo.frequency;

  }


  /* PRICE */

  if (selectedPrice) {

    selectedPrice.innerText =

      packageInfo.price;

  }


  /* BENEFITS */

  if (selectedBenefits) {

    selectedBenefits.innerHTML = '';

    packageInfo.benefits
    .forEach(
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
   CONTACT OPTION SYSTEM
========================================= */

contactOptions.forEach(
  (option) => {

    option.addEventListener(
      'click',
      () => {

        contactOptions.forEach(
          (button) => {

            button.classList.remove(
              'active'
            );

          }
        );

        option.classList.add(
          'active'
        );

      }
    );

  }
);


/* =========================================
   PACKAGE HOVER ATMOSPHERE
========================================= */

packageCards.forEach(
  (card) => {

    card.addEventListener(
      'mouseenter',
      () => {

        if (
          !card.classList.contains(
            'active-package'
          )
        ) {

          card.style.transform =
          'translateY(-10px)';

        }

      }
    );

    card.addEventListener(
      'mouseleave',
      () => {

        if (
          !card.classList.contains(
            'active-package'
          )
        ) {

          card.style.transform =
          'translateY(0px)';

        }

      }
    );

  }
);


/* =========================================
   ACTIVE PACKAGE STYLE
========================================= */

const style =
document.createElement(
  'style'
);

style.innerHTML = `

.active-package {

  border:
    1px solid
    rgba(74,155,140,0.45);

  background:
    linear-gradient(
      180deg,
      rgba(74,155,140,0.10),
      rgba(255,255,255,0.04)
    );

  transform:
    translateY(-12px);

  box-shadow:
    0 18px 60px
    rgba(74,155,140,0.16);

}

`;

document.head.appendChild(
  style
);


/* =========================================
   PREMIUM INTRO ANIMATION
========================================= */

window.addEventListener(
  'load',
  () => {

    document.body.style.opacity =
    '1';

  }
);


/* =========================================
   INITIALIZE DEFAULT PACKAGE
========================================= */

updateSummary(
  'structured'
);


/* =========================================
   SYSTEM STATUS
========================================= */

console.log(

  'North Crescent Sales Portal Active'

);
