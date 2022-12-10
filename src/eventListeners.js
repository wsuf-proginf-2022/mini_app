import renderInnerPage from './pages/innerPage';
import renderLoginPage from './pages/loginPage';
import { signIn, signUp, signOut, resetPassword } from './auth';
import renderForgotPasswordPage from './pages/forgotPasswordPage';

document.querySelector('#root').addEventListener('click', (e) => {
  if (e.target.closest('#loginButton')) {
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;
    signIn(email, password).then((user) => {
      if (user) {
        console.log(user);
        renderInnerPage();
      }
    });
  }
  if (e.target.closest('.top-buttons .button-right')) {
    document.querySelector('.block-sign-up').classList.remove('js-hidden');
    document.querySelector('.block-log-in').classList.add('js-hidden');
    document.querySelector('.top-buttons .active').classList.add('js-left-50');
  }
  if (e.target.closest('.top-buttons .button-left')) {
    document.querySelector('.block-sign-up').classList.add('js-hidden');
    document.querySelector('.block-log-in').classList.remove('js-hidden');
    document.querySelector('.top-buttons .active').classList.remove('js-left-50');
  }
  if (e.target.closest('#signUpButton')) {
    const email = document.querySelector('#signUpEmail').value;
    const password = document.querySelector('#signUpPassword').value;
    const verifyPassword = document.querySelector('#verifySignUpPassword').value;
    if (password === verifyPassword) {
      signUp(email, password).then((user) => {
        if (user) {
          console.log(user);
          renderInnerPage();
        } else {
          renderLoginPage();
        }
      });
    } else {
      window.alert('Passwords do not match!');
    }
  }
  if (e.target.closest('#signOutButton')) {
    signOut().then(renderLoginPage);
  }
  if (e.target.closest('#forgotPassword')) {
    renderForgotPasswordPage();
  }
  if (e.target.closest('#backToLoginPage')) {
    renderLoginPage();
  }
  if (e.target.closest('#resetPasswordButton')) {
    const email = document.querySelector('#forgotPasswordEmail').value;
    resetPassword(email);
    renderLoginPage();
  }
});
