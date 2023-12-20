import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../features/getUserDetails";

export const Store = configureStore({
    reducer: {
        userinfo: userDetails,
    }
})