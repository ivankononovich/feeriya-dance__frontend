import css from './contacts.scss'

const Contacts = ({ contacts }) => {
  let renderContent = <li>Loading contacts...</li>

  if (contacts) {
    renderContent = contacts.map((item) => (
      <li key={item.url}>
        <a href={item.url} className={css.contacts__link}>
          {item.text}
        </a>
      </li>
    ))
  }

  return <ul className={css.contacts}>{renderContent}</ul>
}

export default Contacts
