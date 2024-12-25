
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Layout } from './Components/Layout'
import {Adminlogin}  from './Pages/AdminFolder/Adminlogin'
import { Dashboard } from './Pages/AdminFolder/Dashboard'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './Components/ProtectedRoute'
import { Nopage } from './Pages/AdminFolder/Nopage'
import { CreateBlog } from './Pages/AdminFolder/CreateBlog'
import { Blogs } from './Pages/Blogs'
import { Allblogs } from './Pages/Allblogs'
// import { New } from './Pages/New'
// import  {Calender}  from './Pages/Calender'

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Adminlogin' element={<Adminlogin/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path='*' element={<Nopage/>}/>
        <Route path='/createblog' element={<ProtectedRoute><CreateBlog/></ProtectedRoute>}/>
        <Route path='/blogs/:id' element={<Blogs/>}/>
        {/* <Route path='/calender' element={<Calender/>}/> */}
        <Route path='/allblogs' element={<Allblogs/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
