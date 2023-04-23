import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { createForms } from "react-redux-form";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./form";

const rootReducer = combineReducers({
    dishes: Dishes,
    promotions: Promotions,
    comments: Comments,
    leaders: Leaders,
    ...createForms({
        feedback: InitialFeedback
    })
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( thunk, logger )
  })
