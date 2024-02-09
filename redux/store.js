import {configureStore} from '@reduxjs/toolkit' 
import currentUserSlice from './slices/currentUserSlice'

export const store = configureStore({
    reducer : {
        currentUser : currentUserSlice
    }
})