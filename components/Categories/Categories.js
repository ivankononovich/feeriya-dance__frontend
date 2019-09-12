import Link from 'next/link';


export default ({ categories }) => {
    let renderContent = <li>Loading categories...</li>;

    if (categories) {
        renderContent = categories.map((category) => {
            const urlReq = '/category?';

            return (
                <li key={ category.id }>
                    <Link href={ `${urlReq}id=${category.id}` }>
                        <a>{ category.nameRU }</a>
                    </Link>
                    
                    <ul>
                        {
                            category.subcategories.map((subcategory) => {
                                return (
                                    <li key={ subcategory.id }>
                                        <Link href={ `${urlReq}id=${subcategory.id}` }>
                                            <a>{ subcategory.nameRU }</a>
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
        <ul>
            { renderContent }
        </ul> 
    )
}
    