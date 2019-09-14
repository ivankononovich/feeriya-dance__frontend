export default ({ contacts }) => {
    let renderContent = <li>Loading contacts...</li>

    if (contacts) {
        renderContent = contacts.map((item) => {
            return <li key={ item.id }>
                {item.text}
            </li>
        });
    }

    return (
        <ul>
            { renderContent }
        </ul> 
    )
}
    