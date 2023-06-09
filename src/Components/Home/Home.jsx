import React, { useState, useEffect } from 'react';

const Home = ({phoneScreen, tabletScreen, smallComputerScreen, computerScreen, windowDimensions}) => {

    const {width, height} = windowDimensions;


  return (
    <div style={{width:`${width}px`, height:`${height}px`}}>My viewport is {width}px wide and {height} px tall</div>
  )
}

export default Home