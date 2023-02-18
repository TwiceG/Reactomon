import './App.css';
import { Navbar } from './Navbar';
import { ReactDOM } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div className="App">
        <Navbar />
      </div>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
