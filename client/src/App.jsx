import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import RecipeSubmission from './rSubmit'
import RecipeList from './rList'
import UserProfile from './userProfile'
import Navbar from './navbar'
import Home from './home'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/recipesubmission' element={<RecipeSubmission />}></Route>
        <Route path='/recipelist' element={<RecipeList />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
