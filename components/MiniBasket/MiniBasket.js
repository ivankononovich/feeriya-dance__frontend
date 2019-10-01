import Link from 'next/link';

import css from './mini-basket.scss';


export default ({ listProducts }) => 
    <Link href='/basket'>
        <a className={ css['mini-basket'] }>
        <span className={ css['mini-basket__text'] }>
            Корзина: { listProducts.length ? listProducts.length : ' пустая' }
        </span>
        </a>
    </Link>
