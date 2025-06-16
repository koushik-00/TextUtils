// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // const [cMode, setCMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type   
    })
    setTimeout (() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // const toggleRedMode = () => {
  //   if (cMode === 'light') {
  //     setCMode('red');
  //     document.body.style.backgroundColor = 'gray';
  //     showAlert("Red mode has been enabled", "success");
  //   }
  //   else {
  //     setCMode('light'); // #2a0000 for red, #0a192f for blue, #2a4939 for green
  //     document.body.style.backgroundColor = 'white'; 
  //     showAlert(`Light mode has been enabled`, "success");
  //   }
  // }

  return (
    <>
    <Navbar title="TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert} />
    <div className="container">
        {/* <Routes>
          <Route exact path = '/' element = {<TextForm heading = "Enter the text to analyze below" mode = {mode} alert={showAlert} />} />
          <Route exact path='/about' element={<About/>} />
        </Routes> */}

        <TextForm heading = "Enter the text to analyze below" mode = {mode} alert={showAlert} />
    </div>
    
    
    </>
  );
}

export default App;
 