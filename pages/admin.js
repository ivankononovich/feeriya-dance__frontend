import { useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { loginAdmin } from 'store/app/actions'

import Container from 'components/Container/Container'

// const [input, setInput] = useState({})

function Admin({ loginAdmin, adminLogin }) {
  const router = useRouter()

  const myFunc = async () => {
    const email = document.getElementById('1').value
    const password = document.getElementById('2').value

    // console.log('email: ', email)
    // console.log('password: ', password)
    const data = {
      email,
      password,
    }
    // console.log('data: ', data)

    const response = await fetch('http://localhost:5000/api/admin', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    const json = await response.json()
    // console.log(json)

    if (json === 'user is admin') {
      loginAdmin(true)
      router.push('/')
    } else alert('Логин или парооль неверны!')
  }

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
          <>
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
                myFunc()
                // if (myFunc()) {
                //   loginAdmin(true)
                //   router.push('/')
                // } else {
                //   return (
                //     <div>Логин или парооль неверны!</div>
                //   )
                // }
              }}
            >
              Войти как администратор
            </button>
            <input id="1" type="text" placeholder="Логин" />
            <input id="2" type="text" placeholder="Пароль" />
          </>
        )}
      </Container>
    </>
  )
}

export default connect((store) => ({ adminLogin: store.app.adminLogin }), {
  loginAdmin,
})(Admin)
