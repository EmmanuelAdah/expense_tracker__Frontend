import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi.jsx'

const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer
    },
    middleware:(getDefaultMiddleWare)=>(
        getDefaultMiddleWare()
        .concat(authApi.middleware)
    )
})

export default store;