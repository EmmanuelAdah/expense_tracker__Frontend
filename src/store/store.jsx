import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi.jsx'

const store = configureStore({
    reducer:{
        [userApi.reducerPath]: userApi.reducer
    },
    middleware:(getDefaultMiddleWare)=>(
        getDefaultMiddleWare()
        .concat(userApi.middleware)
    )
})

export default store;