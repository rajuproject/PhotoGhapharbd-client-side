
import './App.css';
import {RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Layout/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div data-theme="cupcake">
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer />
    </div>
  );
}

export default App;
