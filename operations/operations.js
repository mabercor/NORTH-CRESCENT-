/* =========================================
NORTH CRESCENT OPERATIONS CENTER
Operational Intelligence Environment
========================================= */

/* ========= PASSWORD PROTECTION ========= */
/* ========= LOGIN ACCESS ========= */

const allowedUsername = "northcrescent";
const allowedPassword = "NC-OPS-2026";

const username = prompt(
"North Crescent Operations Center\n\nEnter Username:"
);

const password = prompt(
"North Crescent Operations Center\n\nEnter Password:"
);

if (
username !== allowedUsername ||
password !== allowedPassword
) {

document.body.innerHTML = `

```
<div class="access-denied-container">

  <div class="access-denied-box">

    <h1>Access Restricted</h1>

    <p>
      Invalid operational credentials.
      This environment is restricted to
      authorized North Crescent personnel only.
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

