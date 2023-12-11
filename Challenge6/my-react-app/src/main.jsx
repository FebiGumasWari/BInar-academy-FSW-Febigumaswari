import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './context/filterContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <FilterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FilterProvider>
);
