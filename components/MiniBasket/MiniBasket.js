import css from './mini-basket.scss';


export default ({ listProducts }) => 
    <div className={ css['mini-basket'] }>
        <span className={ css['mini-basket__text'] }>
            Корзина: { listProducts.length ? listProducts.length : ' пустая' }
        </span>
    </div>
