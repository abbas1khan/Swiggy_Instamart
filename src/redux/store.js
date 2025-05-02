import { configureStore, combineReducers } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer';
import CartSlice from './CartSlice';
import { mmkvStorage } from './storage';

let persistConfig = {
    key: 'root',
    storage: mmkvStorage,
    whitelist: ['cartData']
}

let rootReducer = combineReducers({
    cartData: CartSlice,
})

let persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
})