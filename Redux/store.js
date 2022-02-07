// import { configureStore } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig)

// export const store = configureStore({
//   reducer: {
//     blogs: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export const persistor = persistStore(store)

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
