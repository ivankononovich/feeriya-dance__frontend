const SAVE_SHARED_CONTENT = 'SAVE_SHARED_CONTENT'

function saveSharedContent(data) {
  return {
    type: SAVE_SHARED_CONTENT,
    payload: data,
  }
}

export { SAVE_SHARED_CONTENT, saveSharedContent }
