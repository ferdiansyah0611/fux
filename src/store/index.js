import { configureStore } from '@reduxjs/toolkit'
// reducer
import appReducer from './app'
import userReducer from './user'
import postReducer from './post'

var store = configureStore({
	reducer: {
    app: appReducer,
    user: userReducer,
		post: postReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // ignoredActions: ['app/setmyproject'],
        // Ignore these field paths in all actions
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        // ignoredPaths: ['items.dates'],
      },
    }),
})

export default store