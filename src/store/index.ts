import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import manageLayers from '../Pages/LayerViewer/reducers';
import uploadFile from '../Pages/LayerUpload/reducers';

const rootReducer = combineReducers({uploadFile, manageLayers});
const store = createStore(rootReducer,  applyMiddleware(thunk));


export default store;
export type TRootState = ReturnType<typeof rootReducer>;