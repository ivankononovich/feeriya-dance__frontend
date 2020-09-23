import { SAVE_SHARED_CONTENT, LOGIN_ADMIN } from './actions'

export default (store, action) => {
  switch (action.type) {
    case SAVE_SHARED_CONTENT:
      return {
        ...store,
        sharedContent: {
          ...store.sharedContent,
          ...action.payload,
        },
      }

    case LOGIN_ADMIN:
      return {
        ...store,
        adminLogin: action.payload,
      }

    default:
      return {
        ...store,
      }
  }
}
