export default function renderForgotPasswordPage() {
  const markup = `
  <div class="login-signup-container">
    <button id="backToLoginPage" class="button">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      Go Back
    </button>
    <div class="block-log-in">
      <h2>Reset your password</h2>
      <input type="text" id="forgotPasswordEmail" placeholder="email">
      <button id="resetPasswordButton" class="button">Reset Password</button>
    </div>
  </div>
  `;
  document.querySelector('#root').innerHTML = markup;
}
