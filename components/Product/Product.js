import css from './product.scss'

const Product = ({
  image,
  name_ru,
  name_en,
  price,
  options_name,
  // options_value,
  text,
  addProductToBasket,
  removeProductToBasket,
  listProductsInBasket,
}) => {
  const isShowProductBuy = !listProductsInBasket.some(
    (item) => item === name_en,
  )

  return (
    <div className={css.product}>
      <div className={css.product__column}>
        <img
          className={css.product__img}
          src={`/static/products/${image}`}
          alt={name_ru}
        />
      </div>
      <div
        className={`${css.product__column} ${css.product__column_margin_left}`}
      >
        <h3 className={css.product__title}>{name_ru}</h3>
        <span className={css.product__price}>{price} бел.руб</span>
        <h4 className={css['product__about-product']}>О товаре</h4>
        {/* <ul className={css.product__options}>
          {options_name.map((item, index) => (
            <li key={`${options_value[index]}-${item}`}>
              <span className={css['product__description']} key="name">
                {item}
              </span>{' '}
              <span className={css['product__description']} key="value">
                {options_value[index]}
              </span>
            </li>
          ))}
        </ul> */}
        {/* <ul className={css.product__options}>
          {options_name.map((item, index) => (
            <li key={`${options_value[index]}-${item}`}>
              <span className={css['product__description']} key="name">
                {item}
              </span>{' '}
              <span className={css['product__description']} key="value">
                {options_value[index]}
              </span>
            </li>
          ))}
        </ul> */}

        <p className={css.product__text}>{text}</p>
        {isShowProductBuy ? (
          <button
            className={css.product__buy}
            onClick={() => addProductToBasket({ product: name_en, price })}
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
              onClick={() => removeProductToBasket({ product: name_en, price })}
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
