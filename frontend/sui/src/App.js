import React, { useEffect, useState, useReducer } from 'react';
import { NavigationComponentContext, reducer, NavigationComponentState } from './store/customisation/navigationComponentStore';
import {SetDrawerCustomisation} from './store/actions/drawerActions';
import axios from 'axios';

import Header from './components/header/Header.jsx'

import CustomDrawerComponent from './components/navigation/drawer/CustomDrawer';
import NavigationMap from './components/navigation';

/*
  TODO: Add a map of the types of navigation components available. then in the render, we map the value of the component type to the actual component

  TODO: Use global state instead. Some components may have to be children component to other components
*/ 


function App() {
  const [navState, dispatch] = useReducer(reducer, NavigationComponentState)
  
  const [headerProps, setHeaderProps] = useState();
  const [customNavigation, setCustomNavigation] = useState({});

  useEffect(() => {
    getData()
  }, [])
  
  // const navigationSection = NavigationMap[headerProps.navigation.type]

  const getData = async () => {
    const d = await axios.get("http://localhost:8000/home")
    // setHeaderProps(d.data.Component.header);
    // setCustomNavigation(d.data.Component.navigation);
    // SetDrawerCustomisation(d.data.Component.navigation);
    /*
      TODO: Create an API client to GET & Set the Customisation details
    */
 
        console.log(d.data.Component.navigation);
        console.log(d.data.Component.header);


  }

  const RenderNavFromJson = (type) => {
    const NavB = NavigationMap[type];
    return <NavB customDetails={customNavigation}/>
  }
  console.log("HAHA", navState);

  return (
    <NavigationComponentContext.Provider value={{ navState, dispatch }}>
      <div className="App">
        {/* < CustomDrawerComponent customDetails={customNavigation}/>  */}

        { headerProps && < Header component={headerProps}/> }
        {/* <NavB customDetails={customNavigation}/> */}
        {RenderNavFromJson(navState.type)}
      </div>
    </NavigationComponentContext.Provider>
  );
}

export default App;
