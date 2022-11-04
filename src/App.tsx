import React, { useState } from "react";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";

//pages import
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import Profile from "./pages/profile";
import AuthContextProvider from "./components/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/sign" element={<SignIn />}></Route>
          <Route path="/sign/:id" element={<Profile />}></Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
