import { Link, Outlet } from 'react-router-dom';

//  Root/Home component (Parent to all components)
export default function Root() {
  return (
    <>
      <h1>Home page/ Main page</h1>
      <Link to={`/about`}>About Page</Link>
      <Link to={`/contact`}>Contact Page</Link>
      <Outlet/>
    </>
  )
}