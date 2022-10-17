import React from "react";
import'./SignIn.css';
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { useState,useContext,useEffect } from "react";
import { context } from "../ContextApi/context"
import {Link} from "react-router-dom"
const SignIn = ()=>{
    const {signInUser}=useContext(context);
    const [userDetailes,setUserDetailes]=useState({
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({})
    const [submit,setsubmit]=useState(false);
    const [eyeClick,setEyeClick]=useState(false);
    const [passwordtype,setPasswordtype]=useState("password");

   const handleEyeClick=()=>{
    setEyeClick(false)
   if(eyeClick){
    setPasswordtype("text")
   }
   else{
    setPasswordtype("password")
    setEyeClick(true)
   }
    
   }
   const handleChange=(e)=>{
      setUserDetailes({...userDetailes,[e.target.name]:e.target.value})
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate(userDetailes));
    setsubmit(true);
    }
    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length==0 && submit){
            signInUser(userDetailes)
        }
    },[errors])
   const validate=(values)=>{
    const error={};
    const regex_email= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    if(!values.email){
        error.email="*email is required"
    }
   else if(!regex_email.test(values.email)){
        error.email="*email is invalid"
    }
    if(!values.password){
        error.password="*password is required"
    }
    return error
}
   
   
    return(  
        <div className="signIn-container">
        <div className="signIn-header">
            <h4>Logo</h4>
        <p>Enter your credentials to access your account</p>
        </div>
       
       <div className="signIn-form">
       <form method="POST" onSubmit={handleSubmit}>
        <div>
       <input 
       type = "text" 
       name="email"
       placeholder="Mail ID"
       onChange={handleChange}
       />
       <p style={{color:"red"}}>{errors.email}</p>
       </div>
       
       <div style={{position:"relative"}}>
       <input 
       type ={passwordtype}
       name="password" 
       placeholder="Password"
       onChange={handleChange}
       />
     
           {
            (eyeClick)? <AiFillEye className="eye" onClick={handleEyeClick}/>  :<AiFillEyeInvisible className="eye" onClick={handleEyeClick}/> 
           }
       </div>
       <p style={{color:"red"}}>{errors.password}</p>
        <div className="signIn-button-1">
        <button>Sign In</button>
        </div>
        </form>
        </div>
        <div className="signIn-button-2">
            <Link to="/register">
            <button>Sign Up</button>
            </Link>
        </div>
    </div>
      )
}
   

export default SignIn ;