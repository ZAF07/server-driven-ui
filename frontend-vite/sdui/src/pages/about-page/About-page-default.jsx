import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ProductsContext } from '../../store/ProductStore/ProductProvider';

import navigationComponentMap from '../../components/pageComponents/Navigation/index';
import footerComponentMap from '../../components/pageComponents/Footer';

export default function AboutPageDefault() {
  // const { state, dispatch } = useContext(AboutStoreContext);
  // console.log('FROM ABOUT; ', state);

  // //  ONLY USECONTEXT ON COMPONENTS THAT NEEDS THE GLOBAL STATE (EG. CART, BROWSE, USER DETAILS)
  const { productState, productDispatch } = useContext(ProductsContext);
  console.log('PRODUCT STATE => ', productState);

  // Gets pageData (page component data) from loader (just an API call to layout API)
  const pageData = useLoaderData();
  console.log("Page loader data: ", pageData);
  
  // Dispatch method for Products store
  const handle = () => {
    productDispatch({type: "SET_ABOUT_STORAGE", payload: "hi"})
  }
  
  // Products are retrieved from props. Made available from useContext && ProductProvider
  const mockProducts = {
    products: productState.products,
    dispatch: productDispatch,
  }
  
  // 💡 Gets each page component type from layout API and pass to component map to return desired component
  //  Retrieve data from loaders
  const PageNavigationComponent = navigationComponentMap[pageData.components.navigation.type];
  const PageFooterComponent = footerComponentMap['bottomFooter'];

  // DEFAULT VIEW
  const DefaultPageView = (
    <>
     <h1> Default about page</h1>
      <h2>TODO: Add sections and layouts to page</h2>
      <Link to={`/contact`}>Contact Page</Link>
      <Link to={`/`}>Main Page</Link>
      <h1>{pageData.components.title}</h1>
      <p>{pageData.components.desc}</p>
      <h1 style={{backgroundColor: pageData.components.backgroundColor}}>{productState.name}</h1>
      <button onClick={handle}>Click</button>  
    </>
  )

  /*💡 Custom sections should be child components. Put them all into a map and destructure based on the type received from the layout response*/
  const CustomPageView = (
    <>
    {/* <Link to={`/contact`}>Contact Page</Link>
    <Link to={`/`}>Main Page</Link> */}

    <PageNavigationComponent custom={pageData.components.navigation} product={mockProducts} /> 
    <h1>Custom About Page</h1>

    <h2>{pageData.components.title}</h2>
    <p>{pageData.components.desc}</p>
    <h1 style={{backgroundColor: pageData.components.backgroundColor}}>{productState.name}</h1>
    <button onClick={handle}>Click</button> 

    <PageFooterComponent custom={pageData} /> 
    </>
  )

  //  🚨 Default page should live here. Custom page and their page components should live in their own module to allow abstraction and decoupling...
  return (
    <>
      { pageData.active ? CustomPageView : DefaultPageView}
    </>
  )
}