import { useState } from 'react'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import About from './pages/About'
import { Service } from './pages/Service'
import Blog from './pages/Blog'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/home' element={<Home/>}/>

    </Route>

      </>
 
    )
  );
  return (
    <>
   <RouterProvider
    router={router}
  />
  </>
  )
}

export default App
