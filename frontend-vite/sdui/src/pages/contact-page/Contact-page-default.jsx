import { useContext } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AboutStoreContext} from '../../store/aboutPageStore/aboutStateProvider';

export default function ContactPageDefault() {
  const { state, dispatch } = useContext(AboutStoreContext) 
  console.log('state contact: ', state);

  const loaderData = useLoaderData();
  console.log('Contact page loader data -> ', loaderData);
  
  const handle = () => {
    dispatch({type: "SET_ABOUT_STORAGE", payload: "hi"})
  }
  return (
    <>
      Contact Page Default
      TODO: Add sections and layouts
      <Link to={`/about`}>About Page</Link>
      <Link to={`/`}>Main Page</Link>

    <li><Link to={`/contact/email`}>Email Contact</Link></li>
    <button onClick={handle}>Change state</button>
     <h1>{state.type}</h1>
      Child Routes: 
      <Outlet />
    </>
  )
}