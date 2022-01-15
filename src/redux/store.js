import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import menuReducer from './menu/menu-slice';
// import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const menuPersistConfig = {
  key: 'menu',
  storage,
  //   whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    menu: persistReducer(menuPersistConfig, menuReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
