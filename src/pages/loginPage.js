export default function renderLoginPage() {
  const markup = `
  <div class="login-signup-container">
    <div class="top-buttons">
      <div class="active"></div>
      <div class="button-left">Login</div>
      <div class="button-right">Sign up</div>
    </div>
    <div class="block-log-in">
      <h1>Log in</h1>
      <input type="text" id="loginEmail" placeholder="email">
      <input type="password" id="loginPassword" placeholder="password">
      <div id="forgotPassword" class="forgot-password">Forgot your password?</div>
      <button id="loginButton" class="button log-in-button">
        <i class="fas fa-user-circle fa-fw"></i>
        Log In
      </button>
    </div>
    <div class="block-sign-up js-hidden">
      <h1>Sign Up</h1>
      <input type="text" id="signUpEmail" placeholder="email">
      <input type="password" id="signUpPassword" placeholder="password">
      <input type="password" id="verifySignUpPassword" placeholder="verify password">
      <button id="signUpButton" class="button sign-up-button">
        <i class="fas fa-user-circle fa-fw"></i>
        Sign Up
      </button>
    </div>
  </div>
  `;
  document.querySelector('#root').innerHTML = markup;
}
