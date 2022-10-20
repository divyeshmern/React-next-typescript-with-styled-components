import {
  applyMiddleware,
  Middleware,
  StoreEnhancer,
  legacy_createStore as createStore,
} from "redux";
import { createWrapper, MakeStore, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducer/rootReducer";
import { rootSaga } from "./sagas/rootSaga";
import { PostState } from "../redux/type/postType";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require('@redux-devtools/extension')
    return composeWithDevTools(applyMiddleware(...middleware));
  }
};

export const makeStore: MakeStore<PostState> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware, logger])
  );
  // store.sagaTask = sagaMiddleware.run(rootSaga);
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<PostState>(makeStore, { debug: true });
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
// sagaMiddleware.run(rootSaga);
// export default store;
