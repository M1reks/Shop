import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { RoutesData } from "./app/RoutesData.js";
import Loader from "./components/UI/Loader/Loader.jsx";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {RoutesData.map(route => (
            <Route path={route.path} key={route.path} element={<route.element />} />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
