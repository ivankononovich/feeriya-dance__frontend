import css from './../styles/container.scss';


export default (props) => {
    const additionalClasses = props.additionalClasses || '';

    return  <div className={ `${css.container} ${additionalClasses}`}>
        { props.children }
    </div> 
}
   