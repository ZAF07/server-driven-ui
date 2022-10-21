import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPageLoader } from './loaders/aboutPageLoader'; 
import { ContactPageLoader } from './loaders/contactPageLoader';

/* JSX */
import Root from './Root';
import ContactPageDefault from './pages/contact-page/Contact-page-default';
import AboutPageDefault from './pages/about-page/About-page-default';
import EmailContactPage from './pages/contact-page/child-contact-pages/Email';
import DefaultErrorpage from './pages/error-page/DefaultErrorPage';

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
])

export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}