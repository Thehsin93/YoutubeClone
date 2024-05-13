import './App.css';
import Head from './components/Head';
import Body from "./components/Body";
import appStore from "./utils/appStore"
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from "./components/Demo"
const appRouter = createBrowserRouter([
{
  
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'/watch',
      element:<WatchPage/>
    },
    {
      path:'/demo',
      element:<Demo/>
    }

  ]
}
])
function App() {
  
  return (
    <Provider store={appStore}>
    <div className="App">
   
   
    <RouterProvider router={appRouter}/>
    
    </div>
    </Provider>
  );
}

export default App;
