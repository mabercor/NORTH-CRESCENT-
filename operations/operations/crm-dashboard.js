/* =========================================
   NORTH CRESCENT CRM DASHBOARD
========================================= */


/* ========= STATUS DOT ========= */

const statusDot =
document.querySelector('.status-dot');

if (statusDot) {

  setInterval(() => {

    statusDot.classList.toggle('pulse');

  }, 1200);

}


/* ========= ACTION CARDS ========= */

const actionCards =
document.querySelectorAll('.action-card');

actionCards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.style.transform =
    'translateY(-5px)';

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
    'translateY(0px)';

  });

});


/* ========= CRM BUTTONS ========= */

const crmButtons =
document.querySelectorAll('.crm-btn');

crmButtons.forEach(button => {

  button.addEventListener('mouseenter', () => {

    button.style.opacity = '0.9';

  });

  button.addEventListener('mouseleave', () => {

    button.style.opacity = '1';

  });

});


/* ========= SYSTEM LOG ========= */

console.log(
  'North Crescent CRM Dashboard Active'
);


/* ========= FUTURE CRM MODULES ========= */

/*

Future Systems:

- Airtable Connection
- Make Automation
- Live Client Database
- Work Orders
- Profitability Tracking
- AI Operational Analysis
- Team Dispatch System

*/
