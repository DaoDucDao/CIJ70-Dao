class buttonComponent {
	$button;

	constructor(text, classList, type, callBack) {
		this.$button = document.createElement('button');
		this.$button.classList.add(...classList);
		this.$button.innerText = text;
		this.$button.type = type;
		if (callBack) {
			this.$button.addEventListener('click', callBack);
		}
	}
	renderButton() {
		return this.$button;
	}
}

export default buttonComponent;
