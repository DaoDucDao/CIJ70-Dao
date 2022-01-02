class buttonComponent {

    $button;

    constructor(text, classList, type, callBack){
        this.$button =document.createElement('button');
        this.$button.type = type;
        this.$button.innerText = text;
        this.$button.classList.add(...classList);
        if (callBack){
            this.$button.addEventListener('click', callBack);
        }
    }

    renderButton (){
        return this.$button;
    }
}

export default buttonComponent;