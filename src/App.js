import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './Styles/main.scss';

import Home from './Components/Home/Home.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';


function App() {
  const [phoneScreen, setPhoneScreen] = useState(false)
  const [tabletScreen, setTabletScreen] = useState(false)
  const [smallComputerScreen, setSmallComputerScreen] = useState(false)
  const [computerScreen, setComputerScreen] = useState(false)
  
  const [windowDimensions, setWindowDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
  });

  useEffect(() => {
      function handleResize() {
      setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
      });
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);


  const {width, height} = windowDimensions;

  

  useEffect(() => {
      
      if (width >= 412 && width < 912){
          //console.log("Tablet");
          setTabletScreen("True");
      } else if (width >= 912 && width < 1024){
          //console.log("Small Computer");
          setSmallComputerScreen("True");
      } else if (width >= 1024) {
          //console.log("Computer");
          setComputerScreen("True");
      } else {
          //console.log("Phone screen");
          setPhoneScreen("True");
      }
      
  }, []);

  return (
      <div className='App'>
        <BrowserRouter>
          <Navigation phoneScreen={phoneScreen} tabletScreen={tabletScreen} smallComputerScreen={smallComputerScreen} computerScreen={computerScreen} windowDimensions={windowDimensions}/>
          <Routes>
            <Route exact path='/' element={<Home phoneScreen={phoneScreen} tabletScreen={tabletScreen} smallComputerScreen={smallComputerScreen} computerScreen={computerScreen} windowDimensions={windowDimensions}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;