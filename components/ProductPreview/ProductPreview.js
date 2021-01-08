import Link from 'next/link'

import css from './product-preview.scss'

const ProductPreview = ({
  products,
  index
}) => {
  // console.log(res)
  if (!products || typeof products === 'undefined')
    return <div>Загрузка товаров...</div>
  let renderContent
  renderContent = products.map((product, i) => {
    return (
      <>
        <li className={css['product-preview']} key={i}>
          <img
            src={`/static/products/${product.image}`}
            alt={product.name_ru}
            className={css['product-preview__img']}
          />
          <span className={css['product-preview__price']}>
            {product.price} BYN
        </span>
          <h3 className={css['product-preview__prod-title']}>
            {product.name_ru}
          </h3>
          <Link href={`/product?id=${product.name_en}`}>
            <a className={css['product-preview__link']}>Подробнее</a>
          </Link>
          {index
            ? <span className={css['product-preview__counter']}>X {index}</span>
            : null
          }
        </li>
      </>
    )
  })

  return <ul className={css['product-preview-list']}>{renderContent}</ul>
}

export default ProductPreview
