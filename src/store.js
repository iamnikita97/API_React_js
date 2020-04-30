import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlewar from 'redux-saga';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

//old config
const sagaMiddlewar = createSagaMiddlewar();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddlewar)));

sagaMiddlewar.run(rootSaga);

export default store;