import css from './loader.scss'

export default () => (
  <div className={css.loader}>
    <span className={css['loader__dot-move']} />
    <div className={css['loader__dots-wrapper']}>
      <span className={css.loader__dot} />
      <span className={css.loader__dot} />
      <span className={css.loader__dot} />
    </div>
  </div>
)
