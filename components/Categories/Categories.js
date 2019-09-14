import Link from 'next/link';

import css from './categories.scss';


export default ({ categories }) => {
    let renderContent;

    if (categories) {
        renderContent = categories.map((category) => {
            const urlReq = `/category?id=${category.id}`;

            return (
                <li className={ css.categories__item } key={ category.id }>
                    <Link href={ urlReq }>
                        <a className={ css.categories__link }>{ category.nameRU }</a>
                    </Link>
                    
                    <ul className={ css.categories__subcategories }>
                        {
                            category.subcategories.map((subcategory) => {
                                return (
                                    <li key={ subcategory.id }>
                                        <Link href={ `${urlReq}-${subcategory.id}` }>
                                            <a className={ css['categories__subcategory-link'] }>{ subcategory.nameRU }</a>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </li>
            );
        });
    }

    return (
        <ul className={ css.categories }>
            { renderContent }
        </ul> 
    )
}
    