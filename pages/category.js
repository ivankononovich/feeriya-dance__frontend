import Link from 'next/link';

import css from '../styles/category.scss';


export default () => <>
    <h2 className={ css.title }>Category</h2>
    <Link href='/index' as='/'>
        <a>Main page link</a>
    </Link>
</>