import buttonComponent from '../../components/button.js';
import inputComponent from '../../components/input.js';
import { checkEmail, checkPassword } from '../../common/validation.js';

class loginScreen {
	$container;

	$email;
	$password;

	$imageCover;
	$formLogin;
	$buttonSubmit;
	$titleScreen;

	$registerText;
	$registerLink;

	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('login-form', 'd-flex');

		this.$imageCover = document.createElement('div');
		this.$imageCover.classList.add('img-cover');

		this.$formLogin = document.createElement('form');
		this.$formLogin.classList.add('form-container');
		this.$formLogin.addEventListener('submit', this.handleSubmit);

		this.$titleScreen = document.createElement('div');
		this.$titleScreen.classList.add('big-title');
		this.$titleScreen.innerText = 'Welcome';

		this.$email = new inputComponent(
			'Email address',
			'email',
			'login-email',
			'email'
		);

		this.$password = new inputComponent(
			'Password',
			'password',
			'login-password',
			'password'
		);

		this.$buttonSubmit = new buttonComponent(
			'Sign in',
			['btn', 'btn-primary', 'd-block', 'mt-2'],
			'submit'
		);

		this.$registerText = document.createElement('p');
		this.$registerText.classList.add('regis-text');
		this.$registerText.innerText = 'Create an account!';

		this.$registerLink = document.createElement('a');
		this.$registerLink.innerText = 'Register';
		this.$registerLink.target = '_blank';
		this.$registerLink.setAttribute('href', './SignUp.html');
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		let isError = false;
		if (checkEmail(email.value) !== null) {
			// console.log('Invalid Email!');
			this.$email.setError(checkEmail(email.value));
			isError = true;
		}
		if (checkPassword(password.value) !== null) {
			// console.log('Invalid Password');
			this.$password.setError(checkPassword(password.value));
			isError = true;
		}
		if (!isError) {
			console.log('Success!');
		}
	};

	renderLogin() {
		this.$formLogin.append(
			this.$titleScreen,
			this.$email.renderInput(),
			this.$password.renderInput(),
			this.$buttonSubmit.renderButton(),
			this.$registerText,
			this.$registerLink
		);
		this.$container.append(this.$formLogin, this.$imageCover);
		return this.$container;
	}
}

export default loginScreen;
