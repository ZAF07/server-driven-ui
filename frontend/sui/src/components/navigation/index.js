import LeftLogoNav from "./LeftLogoNav";

/*
  Attempting to consolidate all nav components here and return to App.js as a map from which App.js can simply select the required component by its key
*/
const navigationMap = {
  leftNavHeader: LeftLogoNav,
}

export default navigationMap;