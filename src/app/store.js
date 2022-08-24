import { configureStore } from '@reduxjs/toolkit'

import slidesSlice from '../features/slides/slidesSlice';

export default configureStore({
  reducer: {
    slides: slidesSlice,
  }
})