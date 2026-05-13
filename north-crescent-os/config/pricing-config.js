/* =========================================
   NORTH CRESCENT OS
   PRICING CONFIGURATION
========================================= */


/* =========================================
   SERVICE RATES
========================================= */

export const SERVICE_RATES = {

  'Residential Cleaning': 0.12,

  'Commercial Cleaning': 0.10,

  'Deep Cleaning': 0.18,

  'Move-In / Move-Out': 0.20,

  'Airbnb Cleaning': 0.15,

  'Janitorial Cleaning': 0.09,

  'Post-Construction Cleaning': 0.25

};


/* =========================================
   COMPLEXITY MULTIPLIERS
========================================= */

export const COMPLEXITY_MULTIPLIERS = {

  Low: 1,

  Moderate: 1.15,

  High: 1.3,

  Extreme: 1.5

};


/* =========================================
   PROFITABILITY SETTINGS
========================================= */

export const PROFITABILITY_CONFIG = {

  estimatedProfitMargin: 0.42

};


/* =========================================
   OPERATIONAL RISK THRESHOLDS
========================================= */

export const OPERATIONAL_THRESHOLDS = {

  moderateLaborHours: 12,

  highLaborHours: 24,

  extremeLaborHours: 40,

  overloadLaborHours: 60

};


/* =========================================
   SERVICE FREQUENCY RULES
========================================= */

export const SERVICE_FREQUENCY = {

  oneTime: 1,

  weeklyMax: 4,

  biWeeklyMax: 8,

  recurringMax: 12,

  highFrequencyMax: 20

};
