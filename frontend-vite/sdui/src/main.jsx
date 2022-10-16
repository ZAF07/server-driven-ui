import ReactDOM from 'react-dom/client';
import { AboutPageProvider } from './store/aboutPageStore/aboutStore';
import App from './App';
console.log("MAIN RENDER");
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { AboutStore, AboutReducer, AboutStoreContext } from './store/aboutPageStore/aboutStore';

// /* Component imports */
// import Root from './Root';
// import DefaultErrorpage from './components/error-components/default-error';
// import AboutPageDefault from './pages/about-page/About-page-default';
// import ContactPageDefault from './pages/contact-page/Contact-page-default';
// import EmailContactPage from './pages/contact-page/child-contact-pages/Email';


// Create application Routes and components mapping
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root/>,
//     errorElement: <DefaultErrorpage/>,
//   },
//   {
//     path: '/about',
//     element: <AboutPageDefault/>,
//     errorElement: <DefaultErrorpage/>,
//     loader: () => {
//       return { AboutStore, AboutReducer }
//     }
//   },
//   {
//     path: '/contact',
//     element: <ContactPageDefault/>,
//     errorElement: <DefaultErrorpage/>,
//     loader: () => {
//       return { AboutStore, AboutReducer }
//     },
//     children: [
//     {
//       path: '/contact/email',
//       element: <EmailContactPage/>,
//       errorElement: <DefaultErrorpage/>,
//     },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AboutPageProvider> // this should be user details, product listing and cart state
      <App/>
    </AboutPageProvider>
)
