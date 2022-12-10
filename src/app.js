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
import { addData } from './database';

// signUp('zsolt.lengyel21@gmail.com', '123456');

addData({ name: 'zsolt', age: 21 });
// MVC - Model View Controller

renderPreLoaderPage();

async function main() {
  try {
    const user = await loginStatus();
    if (user) {
      console.log(user);
      renderInnerPage();
    }
  } catch (error) {
    renderLoginPage();
    console.log(error);
  }
}
main();
