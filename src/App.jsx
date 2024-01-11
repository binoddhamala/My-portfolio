import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Pages/Home/Navbar";
import React from "react";

function App() {
  

  return (
    <>
    <div className="App">
      <Router>
        <div>
          <Navbar />

        </div>
      </Router>

    </div>
    </>
  )
}

export default App
