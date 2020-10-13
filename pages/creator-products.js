import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { loginAdmin } from 'store/app/actions'

import Container from 'components/Container/Container'
import CreatorCategories from 'components/CreatorCategories/CreatorCategoriesContainer'

function Admin({ loginAdmin, adminLogin }) {
  const router = useRouter()
  const { type } = router.query

  useEffect(() => {
    if (!adminLogin) {
      // router.push('/')
    }
  }, [])

  return (
    <>
      <Container additionalClasses={['container_product-preview-container']}>
        <CreatorCategories />
      </Container>
    </>
  )
}

export default connect((store) => ({ adminLogin: store.app.adminLogin }), {
  loginAdmin,
})(Admin)
