import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GenreProvider } from './context/GenreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
<GenreProvider>
  <App />
  </GenreProvider>
);
