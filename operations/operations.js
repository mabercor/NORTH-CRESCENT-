/* =========================================
NORTH CRESCENT OPERATIONS CENTER
Operational Intelligence Environment
========================================= */

/* ========= PASSWORD PROTECTION ========= */

const password = "northcrescent2026";

const userPassword = prompt(
"North Crescent Operations Center\n\nEnter Password:"
);

if (userPassword !== password) {

document.body.innerHTML = `

```
<div class="access-denied-container">

  <div class="access-denied-box">

    <h1>Access Restricted</h1>

    <p>
      This operational environment is restricted
      to authorized North Crescent personnel only.
    </p>

  </div>

</div>
```

`;

throw new Error("Unauthorized Access");

}

/* ========= SYSTEM INITIALIZATION ========= */

console.log(
"North Crescent Operations Center Initialized"
);

/* ========= LIVE SYSTEM STATUS ========= */

const statusDot = document.querySelector('.status-dot');

if (statusDot) {

setInterval(() => {

```
statusDot.classList.toggle('pulse');
```

}, 1200);

}

/* ========= TOOL CARD HOVER EFFECT ========= */

const toolCards = document.querySelectorAll('.tool-card');

toolCards.forEach(card => {

card.addEventListener('mouseenter', () => {

```
card.style.transform = 'translateY(-10px)';
```

});

card.addEventListener('mouseleave', () => {

```
card.style.transform = 'translateY(0px)';
```

});

});

/* ========= FUTURE CRM CONNECTION ========= */

/*

Future Architecture:

GitHub Frontend
↓
Make Webhook
↓
Airtable CRM
↓
OpenAI Analysis

*/

/* ========= FUTURE SYSTEM MODULES ========= */

/*

Planned Systems:

* CRM Dashboard
* Proposal Generator
* Sales Intelligence
* Revenue Dashboard
* AI Operational Analysis
* Client History System

*/

/* ========= NORTH CRESCENT ADN ========= */

console.log(
"Structured Thinking. Visible Results. Absolute Discipline."
);

