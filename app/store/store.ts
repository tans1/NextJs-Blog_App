"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlices";


const rootReducer = combineReducers({
  blog : blogReducer
},);

export const store = configureStore({
  reducer: rootReducer,
 });
    