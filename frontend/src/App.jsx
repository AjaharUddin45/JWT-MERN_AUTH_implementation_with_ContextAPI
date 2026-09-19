import { Routes, Route } from 'react-router-dom';
// import './App.css'
import Navbar from "./component/Navbar.jsx"; 
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import  UserProvider  from '../context/userContext.jsx';
import Dashboard from './pages/Dashboard.jsx';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
 

  return (
    <UserProvider>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </UserProvider>
  )
}

export default App;
