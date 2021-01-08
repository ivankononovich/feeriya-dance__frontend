import css from './product.scss'
import css1 from './../Counter/counter.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseCounterValue,
  reduceCounterValue,
  resetCounterValue,
} from './../../store/counter/actions'

import Counter from './../Counter/Counter'

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

  const counter = useSelector((state) => state.counter.counterValue)
  const dispatch = useDispatch()

  // console.log(price)
  // const st = useSelector((state => console.log(state.app.sharedContent.products)))

  return (
    // <div className={css.product}>
    //   <div className={css.product__column}>
    //     <img
    //       className={css.product__img}
    //       src={`/static/products/${image}`}
    //       alt={name_ru}
    //     />
    //   </div>
    //   <div
    //     className={`${css.product__column} ${css.product__column_margin_left}`}
    //   >
    //     <h3 className={css.product__title}>{name_ru}</h3>
    //     <span className={css.product__price}>{price} бел.руб</span>
    //     <h4 className={css['product__about-product']}>О товаре</h4>

    //     <p className={css.product__text}>{text}</p>
    //     {isShowProductBuy ? (
    //       <button
    //         className={css.product__buy}
    //         onClick={() => addProductToBasket({ product: name_en, price })}
    //       >
    //         Добавить в корзину
    //       </button>
    //     ) : (
    //         <>
    //           <button
    //             className={`${css.product__buy} ${css.product__buy_bought}`}
    //           >
    //             Товар в корзине &#10003;
    //         </button>
    //           <button
    //             className={`${css.product__remove}`}
    //             onClick={() => removeProductToBasket({ product: name_en, price })}
    //           >
    //             Удалить из корзины &#9587;
    //         </button>
    //         </>
    //       )}
    //   </div>
    // </div>
    <>
      <div className={css.product}>
        <div className={css['product__caption']}>
          <h2 className={css['product__name']}>{name_ru}</h2>
          <img
            className={css.product__img}
            src={`/static/products/${image}`}
            alt={name_ru}
          />
        </div>
        <div className={css['product__info']}>
          <span className={css.product__price}>{price} BYN</span>
          {/* <Counter /> */}
          <div className={css1['counter']}>
            <span
              className={css1['counter__btn']}
              onClick={() => {
                dispatch(reduceCounterValue())
              }}
            >
              –
            </span>
            <div className={css1['counter__value']}>{counter}</div>
            <span
              className={css1['counter__btn']}
              onClick={() => {
                dispatch(increaseCounterValue())
              }}
            >
              +
            </span>
          </div>
          {isShowProductBuy ? (
            <button
              className={`${css.product__remove}`}
              onClick={() => {
                for (let i = 0; i < counter; i++) {
                  addProductToBasket({ product: name_en, price })
                }

                dispatch(resetCounterValue())
              }}
            >
              Купить
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
                  onClick={() =>
                    removeProductToBasket({ product: name_en, price })
                  }
                >
                  Удалить из корзины &#9587;
              </button>
              </>
            )}
        </div>
      </div>
      <div className={css['description']}>
        <span className={css['description__name']}>Описание</span>
        <p className={css['description__text']}>{text}</p>
      </div>
    </>
  )
}

export default Product
