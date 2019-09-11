export default ({ categories }) => {
    let renderContent = <li>Loading categories...</li>

    if (categories) {
        renderContent = categories.map((item) => {
            return <li key={ item.id }>
                {item.nameRU}
                <ul>
                    {
                        item.subcategory.map((item) => {
                            return <li key={ item.id }>{ item.nameRU }</li>
                        })
                    }
                </ul>
            </li>
        });
    }

    return (
        <ul>
            { renderContent }
        </ul> 
    )
}
    