import { Component, createRef } from "react";

export default class extends Component {
    constructor(props) {
        super(props);

        this.sendForm = this.sendForm.bind(this);

        this.form = createRef();
    }

    validationCheck(type, value) {
        const listFields = {
        phone: /^[44|33|29|25][0-9]{8}$/
        };

        return value.match(listFields[type]);
    }

    sendForm(event) {
        event.preventDefault();
        const { form: { current: form } } = this;
        const inputs = [...form.querySelectorAll("input")];
        let message = "";

        let isSomeNotValid = inputs.some(item => {
            const { name, value } = item;

            if (this.validationCheck(name, value)) {
                message += `${name}: <b>${value}</b>\n`;
            }

            return !this.validationCheck(name, value);
        });

        if (!isSomeNotValid) {
            const { listProducts } = this.props;
            const botID = "1051580117:AAEPtvahxccJV6XUR1VXyOySNNhJTpuCrIQ";
            const chatId = "498967090";
            
            message += `protducts: \n`;

            listProducts.forEach((item) => {
                message += `https://feeriya-dance.herokuapp.com/product?id=${item} \n`
            });

            const url = `https://api.telegram.org/bot${botID}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURI(
                message
            )}`;

            fetch(url, {
                method: "POST"
            });
        }
    }

    render() {
        console.log(this.props);
        return (
            <form ref={this.form}>
                <input type="text" name="phone" />
                <button onClick={this.sendForm}>Send</button>
            </form>
        );
    }
}
