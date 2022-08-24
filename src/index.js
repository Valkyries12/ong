import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Campanias from "./pages/Campanias";
import Contacto from "./pages/Contacto";
import Novedades from "./pages/Novedades";
import Actividades from "./pages/Actividades";

//pages components

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="inicio" element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="actividades" element={<Actividades />} />
            <Route path="novedades" element={<Novedades />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="campanias" element={<Campanias />} />

          </Route>
            

          
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
