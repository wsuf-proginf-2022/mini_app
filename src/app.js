import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './scss/index.scss';
import './index.html';
import renderPreLoaderPage from './pages/preloaderPage';
import renderLoginPage from './pages/loginPage';
import './eventListeners';

// signUp('zsolt.lengyel21@gmail.com', '123456');

// MVC - Model View Controller

renderPreLoaderPage();

async function main() {
  renderLoginPage();
}
main();
