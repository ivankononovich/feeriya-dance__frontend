import { Component, createRef } from 'react'

import css from './form.scss'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneValue: '',
      nameValue: '',
      status: '',
      basketIsEmpty: props.listProducts.length === 0,
    }

    this.sendForm = this.sendForm.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.form = createRef()
  }

  static getDerivedStateFromProps(props, state) {
    state.basketIsEmpty = props.listProducts.length === 0
    return state
  }

  validationCheck(type, value) {
    const listFields = {
      phone: /^\+375[44|33|29|25][0-9]{8}$/,
      name: /\D+$/,
    }

    return value.match(listFields[type])
  }

  sendForm(event) {
    event.preventDefault()

    const { status } = this.state
    if (status === 'pending') return

    const { current: form } = this.form
    const {
      elements: { phone },
    } = form
    const inputs = [...form.querySelectorAll('input')]
    let message = ''

    let isSomeNotValid = inputs.some((item) => {
      const { name, value } = item

      if (this.validationCheck(name, value)) {
        message += `${name}: <b>${value}</b>\n`
      }

      return !this.validationCheck(name, value)
    })

    if (!isSomeNotValid) {
      const { listProducts } = this.props
      const botID = '1475044414:AAH3o2vbW4qULw4KfccOejJMkslYQDWWE5g'
      const chatId = '722454253'
      phone.classList.remove(css.form__input_err)

      message += `products: \n`

      listProducts.forEach((item) => {
        message += `https://feeriya-dance.herokuapp.com/product?id=${item} \n`
      })

      const url = `https://api.telegram.org/bot${botID}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURI(
        message,
      )}`

      fetch(url, {
        method: 'POST',
      }).then(({ status }) => {
        if (status === 200) {
          this.setState({
            status: 'send',
            basketIsEmpty: true,
          })

          this.clearBasket()
        } else {
          this.setState({
            status: 'err',
          })
        }
      })

      this.setState({
        status: 'pending',
      })
    } else {
      phone.classList.add(css.form__input_err)
    }
  }

  clearBasket() {
    const { listProducts, removeProductToBasket, totalPrice } = this.props

      ;[...listProducts].forEach((item) => {
        removeProductToBasket({ product: item, price: 0 })
      })

    removeProductToBasket({ product: '', price: totalPrice })
  }

  handleChange() {
    const { current: form } = this.form
    const inputs = [...form.querySelectorAll('input')]
    const listRegx = {
      phone: /[^\+|\d]/gi,
      name: /[^\D]/gi,
    }
    const values = {}

    inputs.forEach(({ name, value }) => {
      values[`${name}Value`] = value.replace(listRegx[name], '')
    })

    this.setState({
      ...values,
    })
  }

  render() {
    const { phoneValue, nameValue, status, basketIsEmpty } = this.state

    if (status === 'send') {
      return <div className={css.successful}>Ваш заказ отправлен! Вам перезвонят в течение 10 минут!</div>
    }

    if (basketIsEmpty) {
      return <div className={css.successful}>Корзина пустая</div>
    }

    return (
      <>
        <h2 className={css['form-title']}>Оформление заказа</h2>
        <form ref={this.form} className={css.form}>
          <div className={css.form__row}>
            <span className={css.form__text}>Ваше имя</span>
            <input
              className={css.form__input}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={nameValue}
              placeholder="Ваше имя"
              disabled={status === 'pending' ? true : false}
            />
          </div>
          <div className={css.form__row}>
            <span className={css.form__text}>Телефон</span>
            <input
              className={css.form__input}
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={phoneValue}
              placeholder="+375XXXXXXXXX"
              disabled={status === 'pending' ? true : false}
            />
          </div>

          <button className={css.form__button} onClick={this.sendForm}>
            Отправить заказ
          </button>
        </form>
      </>
    )
  }
}
