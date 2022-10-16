import { createContext, useReducer } from 'react';
import StoreActions from '../../constants/actions';

const ProductStore = {
  products: [
    {
      productName: 'Tomato',
      price: 20,
      quantity: 100,
    }
  ]
};

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.UpdateProducts:
        // return { state: action.payload}
        return { ...state, changed: true }
   default:
    return { ...state }
  }
}

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductsReducer, ProductStore);

  return (
    <ProductsContext.Provider value={{productState, productDispatch}}>
      {children}
    </ProductsContext.Provider>
  );
};