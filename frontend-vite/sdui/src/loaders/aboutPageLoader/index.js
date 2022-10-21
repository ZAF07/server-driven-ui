import axios from 'axios';

const AboutPageLoader = async () => {
  const resp = await axios.get("http://localhost:8000/about")
  
  // Here i should destructure the response for the page layout.return ACTIVE==false if there are no customisation details. This will result in the page having a default layout

  return { 
    active: true,
    page: 'About',
    description: 'This is the loader for about page. Here we make a fetch to our API to fetch layout information for SDUI',
    components: resp.data.Component,
  }
}

export {
  AboutPageLoader
}