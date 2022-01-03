import loginScreen from './containers/Login/login.js';

const app = document.getElementById('app');

const LoginScreen = new loginScreen();

app.appendChild(LoginScreen.renderLogin());
