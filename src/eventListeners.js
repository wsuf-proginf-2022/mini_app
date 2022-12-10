import renderInnerPage from './pages/innerPage';
import { signIn } from './auth';

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
});
