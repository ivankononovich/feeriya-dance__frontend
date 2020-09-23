import css from './product.scss'

const Product = ({
  image,
  nameRU,
  nameEN,
  price,
  options_name,
  options_value,
  addProductToBasket,
  removeProductToBasket,
  listProductsInBasket,
}) => {
  const isShowProductBuy = !listProductsInBasket.some((item) => item === nameEN)

  return (
    <div className={css.product}>
      <div className={css.product__column}>
        <img
          className={css.product__img}
          src={`/static/products/${image}`}
          alt={nameRU}
        />
      </div>
      <div
        className={`${css.product__column} ${css.product__column_margin_left}`}
      >
        <h3 className={css.product__title}>{nameRU}</h3>
        <span className={css.product__price}>{price} бел.руб</span>
        <h4 className={css['product__about-product']}>О товаре</h4>
        <ul className={css.product__options}>
          {options_name.map((item, index) => (
            <li key={`${options_value[index]}-${item}`}>
              <span key="name">{item}</span>{' '}
              <span key="value">{options_value[index]}</span>
            </li>
          ))}
        </ul>
        {isShowProductBuy ? (
          <button
            className={css.product__buy}
            onClick={() => addProductToBasket({ product: nameEN, price })}
          >
            Добавить в корзину
          </button>
        ) : (
          <>
            <button
              className={`${css.product__buy} ${css.product__buy_bought}`}
            >
              Товар в корзине &#10003;
            </button>
            <button
              className={`${css.product__remove}`}
              onClick={() => removeProductToBasket({ product: nameEN, price })}
            >
              Удалить из корзины &#9587;
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Product
