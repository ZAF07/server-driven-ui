import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPageProvider } from './store/aboutPageStore/aboutStore';
import { AboutPageLoader } from './loaders/aboutPageLoader'; 
import { ContactPageLoader } from './loaders/contactPageLoader';

/* JSX */
import Root from './Root';
import ContactPageDefault from './pages/contact-page/Contact-page-default';
import AboutPageDefault from './pages/about-page/About-page-default';
import EmailContactPage from './pages/contact-page/child-contact-pages/Email';
import DefaultErrorpage from './pages/error-page/DefaultErrorPage';

const userData = {
  name: 'Zaffere',
  age: 20,
};
console.log("RENDER");
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
    loader: () => {
      return AboutPageLoader();
    }
  },
  {
    path: '/contact',
    element: <ContactPageDefault/>,
    errorElement: <DefaultErrorpage/>,
    loader: () => {
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
])

export default function App() {
  return (
    // State is provided in main.jsx. This consists of product listing, user details and cart state
      <RouterProvider router={router}/>
  )
}