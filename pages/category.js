import fetch from 'isomorphic-unfetch';

import css from './../styles/category.scss';
import Header from './../components/Header/Header';


function CategoryPage({ products }) {
    return <>
        <Header />
        <h2 className={ css.title }>Category</h2>
    </>
}

CategoryPage.getInitialProps = async (ctx) => {
    const protocol = ctx.req.connection.encrypted ? 'https://' : 'http://';

    const req = await fetch(`${protocol}${ctx.req.headers.host}/api/content?name=products`);
    const products = await req.json();

    return {
        products,
    }
}

export default CategoryPage;