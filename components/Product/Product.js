import css from './product.scss';


export default ({ image, nameRU, price, options, id, addProductToBasket }) => 
    <div className={ css.product }>
        <div className={ css.product__column }>
            <img className={ css.product__img } src={ `/static/products/${image}` } alt={ nameRU }/>
        </div>
        <div className={ `${css.product__column} ${css.product__column_margin_left}` }>
            <h3 className={ css.product__title }>{ nameRU }</h3>
            <span className={ css.product__price }>{ price } бел.руб</span>
            <h4 className={ css['product__about-product'] }>О товаре</h4>
            <ul className={ css.product__options }>
                {
                    options.map((item, index) => 
                        <li key={ index }>
                            <span key='name'>{ item.name }</span> <span key='value'>{ item.value }</span>
                        </li>
                    )
                }
            </ul>
            <button 
                onClick={ 
                    () => addProductToBasket({ product: id, price }) 
                }
            >Добавить в корзину</button>
        </div>
    </div>