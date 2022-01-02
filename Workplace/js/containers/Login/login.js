import inputComponent from '../../components/input.js';
import buttonComponent from '../../components/button.js';
import { checkEmail, checkPassword } from '../../common/validation.js';
class loginScreen {
	$email;
	$password;

	$container;

	$imageCover;
	$formLogin;
	$buttonSubmit;
	$titlescreen;

	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('login-form', 'd-flex');

		this.$imageCover = document.createElement('div');
		this.$imageCover.classList.add('img-cover');

		this.$formLogin = document.createElement('form');
		this.$formLogin.classList.add('form-container');
		this.$formLogin.addEventListener('submit', this.handleSubmit);

		this.$titlescreen = document.createElement('div');
		this.$titlescreen.classList.add('big-title');
		this.$titlescreen.innerText = 'Welcome';

		this.$email = new inputComponent(
			'Email adress',
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
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		let isError = false;
		// console.log(e);
		// console.log(e.target);
		// console.log('email', email.value, 'password', password.value);
		if (checkEmail(email.value) !== null) {
			console.log('Invalid Email!');
			this.$email.setError(checkEmail(email.value));
			isError = true;
		}
		if (checkPassword(password.value) !== null) {
			console.log('Invalid Password!');
			this.$password.setError(checkPassword(password.value));
			isError = true;
		}
		if (!isError) {
			console.log('Success!!');
		}
	};

	renderLogin() {
		this.$formLogin.append(
			this.$titlescreen,
			this.$email.renderInput(),
			this.$password.renderInput(),
			this.$buttonSubmit.renderButton()
		);

		this.$container.append(this.$imageCover, this.$formLogin);
		return this.$container;
	}
}
export default loginScreen;
