import './App.css';
import Main from './layout/Main';
import Orders from './components/Orders/Orders';
import Home from './components/Home/Home';
import Products from './components/Products/Products'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Error from './components/Error/Error';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>, 
      children:[
        {
          path:'/',
          loader:() => fetch('tShirt.json'),
          element: <Home/>
        },

        {
          path:'/Orders',
          element: <Orders/>
        },
        
        {
          path:'/Products',
          element:<Products/>
        }, 

        {
          path:'/About',
          element:<About></About>
        },

        {
          path:'/Contact',
          element:<Contact></Contact>
        },

        {
          path:'*',
          element:<Error></Error>
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router= {router} />
    </div>
  );
}

export default App;
