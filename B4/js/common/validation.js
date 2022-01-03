export const checkEmail = (email) => {
	if (!email || email.length === 0) {
		return 'Email is required!';
	}
	const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
	if (!regex.test(email)) {
		return 'Email is Invalid!';
	}
	return null;
};

export const checkPassword = (password) => {
	if (!password || password.length === 0) {
		return 'Password is required!';
	}
	if (password.length < 8 || password.length > 16) {
		return 'Password is Invalid!';
	}
	return null;
};
