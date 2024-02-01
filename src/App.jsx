import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<Registration />}>
    </Route>
    <Route
      path="/login"
      element={<Login />}>
    </Route>
   
   </>
  )
);
const App = () => {
 
  return (
    <div>
   <RouterProvider router={router} />
    </div>
  )
}

export default App