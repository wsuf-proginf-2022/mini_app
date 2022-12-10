import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './scss/index.scss';
import './index.html';
import renderPreLoaderPage from './pages/preloaderPage';
import renderLoginPage from './pages/loginPage';
import renderInnerPage from './pages/innerPage';
import { loginStatus } from './auth';
import './eventListeners';

// signUp('zsolt.lengyel21@gmail.com', '123456');

// MVC - Model View Controller

renderPreLoaderPage();

async function main() {
  try {
    const user = await loginStatus();
    if (user) {
      console.log(user);
      renderInnerPage();
    } else {
      renderLoginPage();
    }
  } catch (error) {
    renderLoginPage();
    window.alert('hiba a loginStatus lekérdezésénél');
  }
}
main();
