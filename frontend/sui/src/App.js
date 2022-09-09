import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/header/Header.jsx'

import NavigationSection from './components/navigation/CustomNavigation';
// import NavigationMap from './components/navigation';

/*
  TODO: Add a map of the types of navigation components available. then in the render, we map the value of the component type to the actual component

  TODO: Use global state instead. Some components may have to be children component to other components
*/ 


function App() {
  const [headerProps, setHeaderProps] = useState();
  const [customNavigation, setCustomNavigation] = useState({});

  useEffect(() => {
    getData()
  }, [])
  
  // const navigationSection = NavigationMap[headerProps.navigation.type]

  const getData = async () => {
    const d = await axios.get("http://localhost:8000/home")
    setHeaderProps(d.data.Component.header);
    setCustomNavigation(d.data.Component.navigation);

        console.log(d.data.Component.navigation);
        console.log(d.data.Component.header);


  }
  return (
    <div className="App">
      < NavigationSection customDetails={customNavigation}/> 

      { headerProps && < Header component={headerProps}/> }
    </div>
  );
}

export default App;
