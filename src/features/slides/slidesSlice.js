import { createSlice } from "@reduxjs/toolkit";
import { getSlides as getSlidesServ } from "../../services/slidesService";

export const slidesSlice = createSlice({
    name: "slides",
    initialState: {
        slides: [],
        status: null,
        error: null,
    },
    reducers: {
        getSlides: state => {
            state = getSlidesServ();
        }
    }
});

export const { getSlides } = slidesSlice.actions;

export default slidesSlice.reducer;