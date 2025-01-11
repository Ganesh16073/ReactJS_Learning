import {configureStore} from '@reduxjs/toolkit' // import configureStore form redux and toolkit
import todoReducer from '../features/todo/todoSlice'

export const store=configureStore({
    reducer:todoReducer
}) // export thr Store