import { dictionaryReduser} from 'redux/dictionarySlice';
// import { filterReduser } from 'redux/filterSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  dictinary: dictionaryReduser, // масив всіх слів в словнику
  // currentTest: [], // масив слів, які використовуються в поточному тесті
  // currentQuestion: null, // поточне запитання в тесті
  // currentScore: 0, // поточний бал у тесті
  // testHistory: [],
});

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['contacts'],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
