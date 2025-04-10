import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Header from './components/header'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import AddCategory from './pages/AddCategory'
import SingleBlog from './pages/SingleBlog'


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/add-blog' element={<AddBlog/>}/>
      <Route path='/add-category' element={<AddCategory/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>



      </Routes>    </>
  )
}

export default App
