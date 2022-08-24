import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSlides } from './features/slides/slidesSlice';

import Home from './pages/Home';
import Navbar from './common/Navbar';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSlides());  
  
    
  // }, [])
  

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
