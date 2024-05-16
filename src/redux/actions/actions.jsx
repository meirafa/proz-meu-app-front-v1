// src/redux/actions/actions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import {LocationDataService } from "../../services/locationDataService";
import {NameRankingService} from "../../services/nameRankingService";

const createAsyncAction = (name, thunkAction) =>
    createAsyncThunk(name, async (payload, { rejectWithValue }) => {
        try {
            return await thunkAction(payload);
        } catch (error) {
            console.error(`Error fetching ${name}:`, error);
            return rejectWithValue(error.message);
        }
    });

export const statesFetch = createAsyncAction("states/statesFetch", LocationDataService.getStatesData);
export const citiesFetch = createAsyncAction("cities/citiesFetch", LocationDataService.getCitiesData);
export const infoFetch = createAsyncAction("cities/infoFetch", LocationDataService.getInfoData);
export const imageFetch = createAsyncAction("imageState/fetchData", LocationDataService.getImageData);
export const rankingFetch = createAsyncAction("nameRanking/fetchData", NameRankingService.getRankingData);