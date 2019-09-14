export default ({ image, nameRU, price, options }) => 
    <div>
        <img src={ image } alt={ nameRU }/>
        <span>{ price }</span>
        <h3>{ nameRU }</h3>
        <ul>
            {
                options.map((item, index) => 
                    <li key={ index }>
                        <span key='name'>{ item.name }</span>
                        <span key='value'>{ item.value }</span>
                    </li>
                )
            }
        </ul>
    </div>