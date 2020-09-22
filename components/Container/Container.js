import css from './container.scss'

const Container = ({ children, additionalClasses }) => {
  let listClasses = ''

  if (additionalClasses) {
    listClasses = additionalClasses.map((item) => css[item])
    listClasses = listClasses.join(' ')
  }

  return <div className={`${css.container} ${listClasses}`}>{children}</div>
}

export default Container
