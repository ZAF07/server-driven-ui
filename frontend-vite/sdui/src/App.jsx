import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPageLoader } from './loaders/aboutPageLoader'; 
import { ContactPageLoader } from './loaders/contactPageLoader';
// import { AboutStoreContext} from '../../store/aboutPageStore/aboutStateProvider';
import {  ProductsContext } from './store/ProductStore/ProductProvider';
import InitAPIClient from './api';

/* JSX */
import Root from './Root';
import ContactPageDefault from './pages/contact-page/Contact-page-default';
import AboutPageDefault from './pages/about-page/About-page-default';
import EmailContactPage from './pages/contact-page/child-contact-pages/Email';
import DefaultErrorpage from './pages/error-page/DefaultErrorPage';
import { useEffect } from 'react';

// Create application Routes and components mapping
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <DefaultErrorpage/>,
  },
  {
    path: '/about',
    element: <AboutPageDefault/>,
    errorElement: <DefaultErrorpage/>,
    loader: () => { // ✋ loaders are used for loading page layouts only
      return AboutPageLoader();
    }
  },
  {
    path: '/contact',
    element: <ContactPageDefault/>,
    errorElement: <DefaultErrorpage/>,
    loader: () => { // ✋ loaders are used for loading page layouts only
      return ContactPageLoader();
    },
    children: [
    {
      path: '/contact/email',
      element: <EmailContactPage/>,
      errorElement: <DefaultErrorpage/>,
    },
    ],
  },
  // {
  //   path: '/browse',
  //   element: <BrowsePageDefault/>,
  //   errorElement: <DefaultErrorpage/>,

  // },
])

const { InventoryAPIClient } = InitAPIClient();

export default function App() {
  /* 
    ❌ I had to use useContext instead of useReducer.
      When using useContext, I am using the same instance of the state that was provided by the ProductContext via its Parent Component
  */
  // UseContext
  const {productState, productDispatch } = useContext(ProductsContext);
  console.log('APP TEST --> ', productState);


  useEffect(() => {
    // Connect to WS server and get all inventories
    InventoryAPIClient.ConnectWSInventories(productDispatch);
    InventoryAPIClient.GetAllInventoriesCache(productDispatch);
    InventoryAPIClient.GetAllInventories(productDispatch, '0', '0');
  }, []);

  return (
      <RouterProvider router={router}/>
  )
}