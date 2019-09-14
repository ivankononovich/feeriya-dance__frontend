import { 
    SAVE_SHARED_CONTENT,
} from './actions';


export default (store, action) => {
    switch(action.type) {
        case SAVE_SHARED_CONTENT:
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