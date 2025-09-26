import React from 'react'
import NavBar from "./components/NavBar.jsx"

import Home from "./pages/Home.jsx"
import Doctors from "./pages/Doctors.jsx"
import DoctorDetails from "./pages/DoctorDetails.jsx"
import Treatments from "./pages/Treatments.jsx"


import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/doctors' element = {<Doctors/>} />
        <Route path='/doctors/details/:id' element = {<DoctorDetails/>} />
        <Route path='/treatments' element = {<Treatments/>} />
      </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}
