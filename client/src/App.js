import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/header'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import AddCategory from './pages/AddCategory'
import SingleBlog from './pages/SingleBlog'
import ProtectedRoute from './Services/ProtectedRoutes'
import MyBlogs from './pages/MyBlogs'
import Working from './pages/Working'
import EditBlog from './pages/EditBlog'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Navigate to='/home' />} /> {/* ✅ Correct */}

        {/* ✅ Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/working' element={<Working />} />
          <Route path='/add-category' element={<AddCategory />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/my-blogs' element={<MyBlogs />} />
          <Route path="/edit/:id" element={<EditBlog />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
