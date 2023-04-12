import { dictionaryReduser} from 'redux/dictionarySlice';
import { currentTestReduser } from 'redux/curentTestSlice';
import { historyReduser } from 'redux/historyOfTestSlise';
import { combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  dictinary: dictionaryReduser, 
  currentTest: currentTestReduser, 
  testHistory: historyReduser,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['dictinary', ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
