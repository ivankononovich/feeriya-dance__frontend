import fetch from 'isomorphic-unfetch'

const SAVE_SHARED_CONTENT = 'SAVE_SHARED_CONTENT'
const LOGIN_ADMIN = 'LOGIN_ADMIN'

function saveSharedContent(data) {
  return {
    type: SAVE_SHARED_CONTENT,
    payload: data,
  }
}

function loginAdmin(data) {
  return {
    type: LOGIN_ADMIN,
    payload: data,
  }
}

function loadCategories() {
  return async (dispatch) => {
    const res = await fetch(`/api/categories`)
    const categories = await res.json()

    dispatch(
      saveSharedContent({
        categories,
      }),
    )

    return res
  }
}

function removeCategory(name_en) {
  return async (dispatch) => {
    const res = await fetch('/api/remove-categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name_en }),
    })

    dispatch(loadCategories())

    return res
  }
}

function addCategory(data) {
  return async (dispatch) => {
    const res = await fetch('/api/add-categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    dispatch(loadCategories())

    return res
  }
}

export {
  SAVE_SHARED_CONTENT,
  LOGIN_ADMIN,
  saveSharedContent,
  loginAdmin,
  loadCategories,
  removeCategory,
  addCategory,
}
