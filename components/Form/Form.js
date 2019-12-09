import { Component, createRef } from 'react';

import css from './form.scss';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneValue: '',
            status: '',
        }

        this.sendForm = this.sendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.form = createRef();
    }

    validationCheck(type, value) {
        const listFields = {
        phone: /^\+375[44|33|29|25][0-9]{8}$/
        };

        return value.match(listFields[type]);
    }

    sendForm(event) {
        event.preventDefault();

        const { status } = this.state;
        if (status === 'pending') return;

        const { current: form } = this.form;
        const { elements: { phone } } = form;
        const inputs = [...form.querySelectorAll('input')];
        let message = '';

        let isSomeNotValid = inputs.some(item => {
            const { name, value } = item;

            if (this.validationCheck(name, value)) {
                message += `${name}: <b>${value}</b>\n`;
            }

            return !this.validationCheck(name, value);
        });

        if (!isSomeNotValid) {
            const { listProducts } = this.props;
            const botID = '1051580117:AAEPtvahxccJV6XUR1VXyOySNNhJTpuCrIQ';
            const chatId = '498967090';
            phone.classList.remove(css.form__input_err);
            
            message += `products: \n`;

            listProducts.forEach((item) => {
                message += `https://feeriya-dance.herokuapp.com/product?id=${item} \n`
            });

            const url = `https://api.telegram.org/bot${botID}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURI(
                message
            )}`;

            fetch(url, {
                method: 'POST'
            })
            .then(({status}) => {
                if (status === 200) {
                    this.setState({
                        status: 'send',
                    });

                    this.clearBasket();
                } else {
                    this.setState({
                        status: 'err',
                    });
                }
            })
            
            this.setState({
                status: 'pending',
            });
        } else {
            phone.classList.add(css.form__input_err);
        }
    }

    clearBasket() {
        const {listProducts, removeProductToBasket} = this.props;

        [...listProducts].forEach((item) => {
            removeProductToBasket({product: item, price: 1});
        });
    }

    handleChange() {
        const { current: { elements: { phone } } } = this.form;
        const { value } = phone;

        this.setState({
            phoneValue: value.replace(/[^\+|\d]/gi, ''),
        });
    }

    render() {
        const { phoneValue, status } = this.state;
        
        if (status === 'send') {
            return (
                <div className={css.successful}>
                    Ваш заказ отправлен!
                </div>
            )
        }

        return (
            <>
                <h2 className={css.title}>Оформление заказа</h2>
                <form ref={this.form} className={css.form}>
                    <div className={css.form__row}>
                        <span className={css.form__text}>Телефон</span>
                        <input 
                            className={css.form__input} 
                            type='text' 
                            name='phone' 
                            onChange={this.handleChange} 
                            value={phoneValue}
                            placeholder='+375XXXXXXXXX'
                            disabled={status === 'pending' ? true : false}
                        />
                    </div>
                   
                    <button className={css.form__button} onClick={this.sendForm}>Отправить заказ</button>
                </form>
            </>
        );
    }
}
