import axios from 'axios';

const AboutPageLoader = async () => {
  const resp = await axios.get("http://localhost:8000/home")
  return { 
    page: 'About',
    description: 'This is the loader for about page. Here we make a fetch to our API to fetch layout information for SDUI',
    components: resp.data.Component,
  }
}

export {
  AboutPageLoader
}