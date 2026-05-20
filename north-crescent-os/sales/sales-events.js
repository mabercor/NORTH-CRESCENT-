/* =========================================
   NORTH CRESCENT SALES PORTAL
   SALES EVENTS
========================================= */


/* =========================================
   DOM REFERENCES
========================================= */


/* HERO BUTTONS */

const heroButtons =
document.querySelectorAll(
  'a[href^="#"]'
);


/* PACKAGE CARDS */

const packageCards =
document.querySelectorAll(
  '.package-card'
);


/* CONTACT OPTIONS */

const contactOptions =
document.querySelectorAll(
  '.contact-option'
);


/* GLASS CARDS */

const glassCards =
document.querySelectorAll(
  '.glass-card'
);


/* =========================================
   SMOOTH SCROLL EXPERIENCE
========================================= */

heroButtons.forEach(
  (button) => {

    button.addEventListener(
      'click',
      (event) => {

        const targetId =
        button.getAttribute(
          'href'
        );

        if (
          !targetId ||
          !targetId.startsWith('#')
        ) return;

        const targetElement =
        document.querySelector(
          targetId
        );

        if (!targetElement) return;

        event.preventDefault();

        targetElement.scrollIntoView({

          behavior: 'smooth',

          block: 'start'

        });

      }
    );

  }
);


/* =========================================
   PREMIUM PACKAGE HOVER SYSTEM
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
   PREMIUM GLASS CARD ATMOSPHERE
========================================= */

glassCards.forEach(
  (card) => {

    card.addEventListener(
      'mouseenter',
      () => {

        card.style.transition =
        '0.35s ease';

        card.style.borderColor =
        'rgba(74,155,140,0.22)';

      }
    );


    card.addEventListener(
      'mouseleave',
      () => {

        card.style.borderColor =
        'rgba(255,255,255,0.08)';

      }
    );

  }
);


/* =========================================
   CONTACT OPTION EXPERIENCE
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
   PREMIUM SECTION REVEAL
========================================= */

const revealSections =
document.querySelectorAll(

  `
  .sales-hero,
  .client-memory-layer,
  .packages-section,
  .recommendation-summary-section,
  .advisor-section,
  .advanced-section
  `

);


/* =========================================
   INTERSECTION OBSERVER
========================================= */

const revealObserver =
new IntersectionObserver(

  (entries) => {

    entries.forEach(
      (entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            'section-visible'
          );

        }

      }
    );

  },

  {

    threshold: 0.12

  }

);


/* =========================================
   OBSERVE SECTIONS
========================================= */

revealSections.forEach(
  (section) => {

    section.classList.add(
      'section-hidden'
    );

    revealObserver.observe(
      section
    );

  }
);


/* =========================================
   PREMIUM CURSOR ATMOSPHERE
========================================= */

document.addEventListener(
  'mousemove',
  (event) => {

    const glow =
    document.querySelector(
      '.cursor-glow'
    );

    if (!glow) return;

    glow.style.left =
    `${event.clientX}px`;

    glow.style.top =
    `${event.clientY}px`;

  }
);


/* =========================================
   CREATE CURSOR GLOW
========================================= */

const cursorGlow =
document.createElement(
  'div'
);

cursorGlow.className =
'cursor-glow';

document.body.appendChild(
  cursorGlow
);


/* =========================================
   CURSOR GLOW STYLE
========================================= */

const glowStyle =
document.createElement(
  'style'
);

glowStyle.innerHTML = `

.cursor-glow {

  position: fixed;

  width: 260px;
  height: 260px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(74,155,140,0.10),
      transparent 70%
    );

  pointer-events: none;

  transform:
    translate(-50%, -50%);

  z-index: 0;

  filter: blur(40px);

  transition:
    left 0.12s linear,
    top 0.12s linear;

}


/* SECTION REVEAL */

.section-hidden {

  opacity: 0;

  transform:
    translateY(40px);

  transition:
    opacity 0.9s ease,
    transform 0.9s ease;

}


.section-visible {

  opacity: 1;

  transform:
    translateY(0px);

}

`;

document.head.appendChild(
  glowStyle
);


/* =========================================
   PACKAGE ATMOSPHERE LOOP
========================================= */

setInterval(() => {

  packageCards.forEach(
    (card) => {

      if (
        card.classList.contains(
          'featured'
        )
      ) {

        card.style.boxShadow =
        `
        0 18px 60px
        rgba(74,155,140,0.12)
        `;

      }

    }
  );

}, 2400);


/* =========================================
   SCROLL ATMOSPHERE
========================================= */

window.addEventListener(
  'scroll',
  () => {

    const scrollPosition =
    window.scrollY;

    const hero =
    document.querySelector(
      '.sales-hero'
    );

    if (!hero) return;

    hero.style.transform =

      `translateY(${
        scrollPosition * 0.03
      }px)`;

  }
);


/* =========================================
   PREMIUM EXPERIENCE INITIALIZATION
========================================= */

window.addEventListener(
  'load',
  () => {

    document.body.classList.add(
      'portal-loaded'
    );

  }
);


/* =========================================
   SYSTEM STATUS
========================================= */

console.log(

  'Sales Events System Active'

);
