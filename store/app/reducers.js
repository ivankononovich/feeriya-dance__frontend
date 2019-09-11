import { 
    SAVE_CONTACTS,
    CHANGE_STATE_CONTENT_UPLOADED,
} from './actions';


export default (store, action) => {
    switch(action.type) {
        case SAVE_CONTACTS:
            return {
                ...store,
                sharedContent: { 
                    ...store.sharedContent,
                    ...action.payload,
                },
            };

        default: 
            return {
                ...store
            };
    }
}