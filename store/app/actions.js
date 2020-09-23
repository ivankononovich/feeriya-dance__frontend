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

export { SAVE_SHARED_CONTENT, LOGIN_ADMIN, saveSharedContent, loginAdmin }
