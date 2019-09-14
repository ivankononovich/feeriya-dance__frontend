import css from './container.scss';


export default ({ children, additionalClasses }) => {
    let listClasses = '';

    if (additionalClasses) {
        listClasses = additionalClasses.map((item) => css[item]);
        listClasses = listClasses.join(' ');
    }
    

    return (
        <div className={`${css.container} ${listClasses}`}>
            {children}
        </div>
    )
}
