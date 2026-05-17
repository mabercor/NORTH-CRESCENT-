/* =========================================
   NORTH CRESCENT OPERATIONS CENTER
   Operational Intelligence Environment
========================================= */
if (
  localStorage.getItem('nc_access')
  === 'granted'
) {

  console.log('Access Granted');

} else {
   

/* ========= LOGIN SYSTEM ========= */
   /* TEMP DISABLED LOGIN OVERLAY */

/*document.body.innerHTML = `

<div class="login-overlay">

  <div class="login-box">

    <div class="login-logo"></div>

    <h1>North Crescent Operations</h1>

    <p>
      Secure operational intelligence environment
    </p>

    <input
      type="text"
      id="username"
      placeholder="Username"
      class="login-input"
    >

    <input
      type="password"
      id="password"
      placeholder="Password"
      class="login-input"
    >

    <button
      id="loginButton"
      class="login-button">

      Access Operations

    </button>

    <div
      id="loginError"
      class="login-error">

      Invalid operational credentials

    </div>

  </div>

</div>

`;*/


/* ========= LOGIN VALIDATION ========= */

const allowedUsername = "northcrescent";
const allowedPassword = "NC-OPS-2026";

const loginButton =
document.getElementById('loginButton');
   
if (!loginButton) return;
loginButton.addEventListener('click', () => {

  const username =
  document.getElementById('username').value;

  const password =
  document.getElementById('password').value;

  if (
    username === allowedUsername &&
    password === allowedPassword
  ) {

  localStorage.setItem(
  'nc_access',
  'granted'
);

location.reload();

  } else {

    document
      .getElementById('loginError')
      .style.display = 'block';

  }

});

   }
