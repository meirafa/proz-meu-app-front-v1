// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  citiesReducer,
  imageReducer,
  infoReducer,
  rankingReducer,
  statesReducer,
} from "./reducers/reducers";

export const createStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      states: statesReducer,
      cities: citiesReducer,
      info: infoReducer,
      image: imageReducer,
      ranking: rankingReducer,
    },
  });
};