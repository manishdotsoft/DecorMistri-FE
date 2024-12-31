import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../features/signUpSlice";
import logInReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    logIn: logInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
