const buttons = document.querySelectorAll(".ncs-store-button");

const selectedPlanElement =
document.getElementById("selectedPlan");

const selectedFrequency =
document.getElementById("selectedFrequency");

const selectedPrice =
document.getElementById("selectedPrice");

const selectedFeatures =
document.getElementById("selectedFeatures");

const selectedBenefits =
document.getElementById("selectedBenefits");

const stepSelect =
document.getElementById("stepSelect");

const stepAdvisor =
document.getElementById("stepAdvisor");

const advisorButton =
document.getElementById("advisorButton");

const params =
new URLSearchParams(window.location.search);

const leadRecordId =
params.get("leadRecordId");
if (!leadRecordId) {

  console.error(
    "Missing leadRecordId"
  );

}
fetch(
  "https://hook.us2.make.com/9icq4nevaaot2s9eamw36at8zaud6anl?leadRecordId=" +
  leadRecordId
)

.then(response => response.json())

.then(data => {

  console.log(
  JSON.stringify(data, null, 2)
);

const clientName =
data.clientName || "Client";

  document.getElementById(
    "clientNameWelcome"
  ).innerText =
  "Welcome " + clientName;

})

.catch(error => {

  console.error(
    "Portal Error:",
    error
  );

});

const advisor =
params.get("advisor");

const welcome =
document.getElementById("clientNameWelcome");

const advisorAssigned =
document.getElementById("advisorAssigned");

/* =========================================
   CLIENT INFO
========================================= */
if (advisor && advisorAssigned) {

  advisorAssigned.innerText =
  `Your advisor: ${advisor}`;

}

/* =========================================
   PLAN FEATURES
========================================= */

const features = {

  "Basic Plan": [
    "Initial environment stabilization",
    "Essential recurring maintenance",
    "Basic operational consistency",
    "Structured cleaning visits"
  ],

  "Standard Plan": [
    "Operational consistency",
    "Priority scheduling",
    "High traffic maintenance",
    "Structured supervision",
    "Recurring quality control"
  ],

  "Intensive Plan": [
    "Full operational support",
    "Advanced environment control",
    "High frequency maintenance",
    "Priority response system",
    "Detailed supervision structure"
  ]

};
const operationalBenefits = {

  "Basic Plan": [

    "Initial environment stabilization",
    "Basic operational consistency",
    "Functional organization of common areas",
    "Cleaner and healthier environments"

  ],

  "Standard Plan": [

    "Real consistency across all areas",
    "Functional organization of common areas",
    "Service adapted to building flow",
    "Reduction of operational issues",
    "Improved property image"

  ],

  "Intensive Plan": [

    "Advanced operational environment control",
    "Priority response system",
    "Full high-traffic maintenance structure",
    "Enhanced property value",
    "Maximum operational consistency"

  ]

};

/* =========================================
   CURRENT SELECTION
========================================= */

let currentPlan = "";
let currentPrice = "";
let currentFrequency = "";

/* =========================================
   SELECT PLAN
========================================= */

function selectPlan(button) {

  const card =
  button.closest(".ncs-store-card");

  // REMOVE ACTIVE
  document
    .querySelectorAll(".ncs-store-card")
    .forEach(item => {

      item.classList.remove(
        "ncs-store-card-active"
      );

    });

  // ADD ACTIVE
  card.classList.add(
    "ncs-store-card-active"
  );

  // STEP ACTIVE
  stepSelect.classList.add(
    "ncs-store-step-active"
  );

  // DATA
  const plan =
  button.dataset.plan;

  const price =
  button.dataset.price;

  const frequency =
  button.dataset.frequency;

  // SAVE
  currentPlan = plan;
  currentPrice = price;
  currentFrequency = frequency;

  // SUMMARY
 selectedPlanElement.innerText = plan;

  selectedFrequency.innerText =
  frequency;

  selectedPrice.innerText =
  price;

   // FEATURES
  selectedFeatures.innerHTML = "";

  features[plan].forEach(feature => {

    const li =
    document.createElement("li");

    li.innerText = feature;

    selectedFeatures.appendChild(li);
     
      });
     
     /* BENEFITS */

selectedBenefits.innerHTML = "";

operationalBenefits[plan]
.forEach(benefit => {

  const li =
  document.createElement("li");

  li.innerText = benefit;

  selectedBenefits
    .appendChild(li);

});

 
   document
  .querySelector(".ncs-store-summary")
  .scrollIntoView({

    behavior: "smooth",
    block: "start"

  });

   }
/* =========================================
   BUTTON EVENTS
========================================= */

buttons.forEach(button => {

  button.addEventListener("click", () => {

    selectPlan(button);

  });

});

/* =========================================
   URL AUTO SELECT
========================================= */

const urlPlan =
params.get("plan");

if (urlPlan) {

  buttons.forEach(button => {

    const buttonPlan =
    button.dataset.plan.toLowerCase();

    if (
      buttonPlan.includes(
        urlPlan.toLowerCase()
      )
    ) {

      selectPlan(button);

    }

  });

}


/* =========================================
   ADVISOR BUTTON
========================================= */

if (advisorButton) {

  advisorButton.addEventListener(
    "click",
    (e) => {

      e.preventDefault();

      const leadRecordId =
      params.get("leadRecordId");

      const selectedMethod =
      document.querySelector(
        'input[name="contactMethod"]:checked'
      )?.value || "sms";

      const callback =
      document.getElementById(
        "callbackTime"
      ).value;

      const selectedPlanText =
      document.getElementById(
        "selectedPlan"
      )?.innerText;

      fetch(
        "https://hook.us2.make.com/w3j4di3f3cfnwi1dfpcbhmw07thsvfrc",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            leadRecordId,
            selectedMethod,
            callback,
            selectedPlan: selectedPlanText

          })

        }

      );

      // STEP 3
      stepAdvisor.classList.add(
        "ncs-store-step-active"
      );

      const clientName =
      document.getElementById(
        "clientNameWelcome"
      ).innerText.replace(
        "Welcome ",
        ""
      );

      const method =
      document.querySelector(
        'input[name="contactMethod"]:checked'
      )?.value || "sms";

      const callbackTime =
      document.getElementById(
        "callbackTime"
      ).value;

      const message =
`North Crescent Facility Solutions

Your structured recommendation has been prepared.

Client:
${clientName}

Selected Plan:
${currentPlan}

Service Frequency:
${currentFrequency}

Estimated Investment:
${currentPrice}

Preferred Callback Window:
${callbackTime}

Assigned Advisor:
${advisor || "North Crescent B2B Team"}

I would like to continue with the recommendation review process.`;

      // SMS
      if (method === "sms") {

        window.location.href =
`sms:+14288880542?body=${encodeURIComponent(message)}`;

      }

      // WHATSAPP
      if (method === "whatsapp") {

        const url =
`https://wa.me/14288880542?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

      }

      // PHONE CALL
      if (method === "call") {

        window.location.href =
        "tel:+14288880542";

      }

    }

  );

}
