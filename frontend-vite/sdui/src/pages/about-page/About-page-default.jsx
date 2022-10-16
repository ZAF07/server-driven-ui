import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AboutStoreContext} from '../../store/aboutPageStore/aboutStateProvider';
import { ProductsContext } from '../../store/ProductStore/ProductProvider';

export default function AboutPageDefault() {
  const { state, dispatch } = useContext(AboutStoreContext);
  console.log('FROM ABOUT; ', state);

  const { productState, productDispatch } = useContext(ProductsContext);
  console.log('PRODUCT STATE => ', productState);

  const { components } = useLoaderData();
  // console.log(loaderData);
  
  const handle = () => {
    dispatch({type: "SET_ABOUT_STORAGE", payload: "hi"})
  }
  return (
    <>
      Default about page
      TODO: Add sections and layouts to page
      <Link to={`/contact`}>Contact Page</Link>
      <Link to={`/`}>Main Page</Link>
      <h1>{components.header.title}</h1>
      <p>{components.header.desc}</p>
      <h1 style={{backgroundColor: components.header.backgroundColor}}>{state.type}</h1>
      <button onClick={handle}>Click</button>
    </>
  )
}