import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { loginAdmin } from 'store/app/actions'

import Container from 'components/Container/Container'

function Admin({ loginAdmin, adminLogin }) {
  const router = useRouter()

  return (
    <>
      <Container additionalClasses={['container_product-preview-container']}>
        {adminLogin ? (
          <span
            style={{
              margin: '20px 0 0',
            }}
          >
            Вы вошли как администратор
          </span>
        ) : (
          <button
            style={{
              height: '48px',
              borderRadius: '3px',
              border: 'none',
              color: '#ffffff',
              backgroundColor: '#5983f0',
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
              fontWeight: '700',
              fontSize: '14px',
              margin: '20px 0 0',
              padding: '0 20px',
              cursor: 'pointer',
            }}
            onClick={() => {
              loginAdmin(true)
              router.push('/')
            }}
          >
            Войти как администратор
          </button>
        )}
      </Container>
    </>
  )
}

export default connect((store) => ({ adminLogin: store.app.adminLogin }), {
  loginAdmin,
})(Admin)
