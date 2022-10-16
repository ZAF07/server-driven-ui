import { createContext, useReducer } from 'react';
import StoreActions from '../../constants/actions';

const AboutStore = {
  type: "drawer",
  active: true,
  location: "right",
  mainNavItems: ["Inbox","Profile","Items","Browse","Cart"],
  subNavItems: ["Trash","Help","Contact"]
};

const AboutReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case StoreActions.SetAboutStore:
        // return { state: action.payload}
        return { ...state, type: "Hello" }
   default:
    return { ...state }
  }
}

export const AboutStoreContext = createContext();

export const AboutPageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AboutReducer, AboutStore);

  return (
    <AboutStoreContext.Provider value={{state, dispatch}}>
      {children}
    </AboutStoreContext.Provider>
  );
};