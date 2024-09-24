import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productcard from './component/Productcard'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Productdetails from './component/Productdetails'

function App() {
  const [count, setCount] = useState(0)
  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Productcard/>}/>
      <Route path='/Productdetails' element={<Productdetails/>}/>
    </Route>

  ))

  return (
    <>
      
      <RouterProvider router={route} />
    </>
  )
}

export default App
