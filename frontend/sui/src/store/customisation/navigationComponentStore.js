import { createContext } from 'react';
import { Actions } from '../../constants/constants';

export const NavigationComponentState = {
  type: "drawer",
  active: true,
  location: "right",
  mainNavItems: ["Inbox","Profile","Items","Browse","Cart"],
  subNavItems: ["Trash","Help","Contact"]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SetDrawerCustomisation:
        return { state: action.payload}
   default:
    return { ...state }
  }
}

export const NavigationComponentContext = createContext();