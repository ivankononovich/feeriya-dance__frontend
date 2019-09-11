import css from './../styles/container.scss';


export default ({ children, additionalClasses }) => 
    <div className={ `${css.container} ${css[additionalClasses]}`}>
        { children }
    </div>