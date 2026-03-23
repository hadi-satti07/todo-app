import { useContext, useState } from 'react'
import { ContextAPI } from './utils/ContextAPI'
import './App.css'
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login';
import { Navigate, Route,Routes } from 'react-router-dom';
import Dashboard from './screen/Dashboard/Dashboard';
import AuthHoc from './utils/AuthHoc';

function App() {

const {theme,user} = useContext(ContextAPI);
  return (
    <>
      <div className={theme==='light'?'App-light':'App-dark'}>
        <Header/>
        <Routes>
          <Route path='/' element={user?<Navigate to={'/dashboard'}/>:<Login/>}/>
          <Route path='/dashboard' element={<AuthHoc><Dashboard/></AuthHoc>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
