import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ImportFile from './import';
import SignIn from './Components/SignIn/SignIn';
import Signup from './Components/SignUp/SignUp';
import Header from "./Components/Header/Header"
import { ContextProvider } from './Components/ContextApi/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path='/' element={ <SignIn/> } />
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contacts' element={<Header/>}/>
        <Route path='/import' element={<ImportFile/>}/>
    </Routes>
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

