import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dragonsSlice from "./dragons/DragonsSlice";

const dragonListPersistConfig = {
  key: "rockets",
  version: 1,
  storage,
  whitelist: "items",
};

const dragonListPersistedReducer = persistReducer(
  dragonListPersistConfig,
  dragonsSlice
);

export const store = configureStore({
  reducer: {
    rockets: dragonListPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
