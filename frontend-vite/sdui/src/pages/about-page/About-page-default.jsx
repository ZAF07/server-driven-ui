import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AboutStoreContext} from '../../store/aboutPageStore/aboutStateProvider';
import { ProductsContext } from '../../store/ProductStore/ProductProvider';

export default function AboutPageDefault() {
  const { state, dispatch } = useContext(AboutStoreContext);
  console.log('FROM ABOUT; ', state);

  //  ONLY USECONTEXT ON COMPONENTS THAT NEEDS THE GLOBAL STATE (EG. CART, BROWSE, USER DETAILS)
  const { productState, productDispatch } = useContext(ProductsContext);
  console.log('PRODUCT STATE => ', productState);

  const pageData = useLoaderData();
  
  const handle = () => {
    dispatch({type: "SET_ABOUT_STORAGE", payload: "hi"})
  }

  // DEFAULT VIEW
  const DefaultPageView = (
    <>
     <h1> Default about page</h1>
      <h2>TODO: Add sections and layouts to page</h2>
      <Link to={`/contact`}>Contact Page</Link>
      <Link to={`/`}>Main Page</Link>
      <h1>{pageData.components.title}</h1>
      <p>{pageData.components.desc}</p>
      <h1 style={{backgroundColor: pageData.components.backgroundColor}}>{state.type}</h1>
      <button onClick={handle}>Click</button>  
    </>
  )

  /*💡 Custom sectioins should be shild components. Put them all into a map and destructure based on the type received from the layout response*/
  const CustomPageView = (
    <>
    <h1>Custom About Page</h1>
    <Link to={`/contact`}>Contact Page</Link>
    <Link to={`/`}>Main Page</Link>
    <h2>{pageData.components.title}</h2>
    <p>{pageData.components.desc}</p>
    <h1 style={{backgroundColor: pageData.components.backgroundColor}}>{state.type}</h1>
    <button onClick={handle}>Click</button> 
    </>
  )

  return (
    <>
      { pageData.active ? CustomPageView : DefaultPageView}
    </>
  )
}