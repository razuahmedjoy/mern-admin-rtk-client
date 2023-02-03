import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state";
import { api } from 'state/api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
setupListeners(store.dispatch);

export default store;