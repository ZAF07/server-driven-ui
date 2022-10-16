import ReactDOM from 'react-dom/client';
import { AboutPageProvider } from './store/aboutPageStore/aboutStateProvider';
import App from './App';
import { ProductsProvider } from './store/ProductStore/ProductProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsProvider>
    <AboutPageProvider> // this should be user details, product listing and cart state
      <App/>
    </AboutPageProvider>
    </ProductsProvider>
)
