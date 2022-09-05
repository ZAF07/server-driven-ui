import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/header/Header.jsx'

/*
  TODO: Add a map of the types of navigation components available. then in the render, we map the value of the component type to the actual component
*/ 


function App() {
  const [bgColor, setBgColor] = useState();
  const [headerProps, setHeaderProps] = useState();

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async () => {
    const d = await axios.get("http://localhost:8000/home")
    setHeaderProps(d.data.Component.header)
      // .then(res => {
        console.log(d.data.Component.header);
      //   // setBgColor(res.data.Component.header.backgroundColor)
      //   setHeaderProps(res.data.Component.header)
      // })

  }
  return (
    <div className="App">
      <p>{bgColor}</p>
      { headerProps && < Header component={headerProps}/> }
    </div>
  );
}

export default App;
