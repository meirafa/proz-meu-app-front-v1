// src/redux/reducers/reducers.js
import { createSlice } from "@reduxjs/toolkit";
import {citiesFetch, imageFetch, infoFetch, rankingFetch, statesFetch,} from "../actions/actions";

const createStatusReducer = (name, nameFetch) =>
    createSlice({
        name,
        initialState: { data: {}, status: "IDLE", error: null, selected: undefined },
        reducers: {
            select(state, action) {
                state.selected = action.payload;
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(nameFetch.pending, (state) => {
                    state.status = "PENDING";
                })
                .addCase(nameFetch.rejected, (state, action) => {
                    state.status = "FAILED";
                    state.error = action.payload;
                })
                .addCase(nameFetch.fulfilled, (state, action) => {
                    state.status = "SUCCEEDED";
                    state.data = action.payload;
                });
        },
    });

export const citiesSlice = createStatusReducer("cities", citiesFetch);
export const statesSlice = createStatusReducer("states", statesFetch);
export const infoSlice = createStatusReducer("info", infoFetch);
export const imageSlice = createStatusReducer("image", imageFetch);
export const rankingSlice = createStatusReducer("ranking", rankingFetch);

export const { reducer: citiesReducer } = citiesSlice;
export const { reducer: statesReducer } = statesSlice;
export const { reducer: infoReducer } = infoSlice;
export const { reducer: imageReducer } = imageSlice;
export const { reducer: rankingReducer } = rankingSlice;