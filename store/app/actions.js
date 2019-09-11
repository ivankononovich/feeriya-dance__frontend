const SAVE_CONTACTS = 'SAVE_CONTACTS';

function saveContacts(data) {
    return {
        type: SAVE_CONTACTS,
        payload: data,
    }
}

export {
    SAVE_CONTACTS,
    saveContacts,
}
