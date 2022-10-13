import { useState , useContext} from "react";
import "./SignUp.css"
import { context } from "../ContextApi/context"
const Signup=()=>{
const { signUpUser }=useContext(context);
const [isSubmit,setIsSubmit]=useState(false)
const [formErrors,setFormErrors]=useState({});
  const [userdata,setuserdata]=useState({
    email:"",
    password:"",
    confirmPass:""
  })
  const handlechnge=(e)=>{
    const {name,value}=e.target;
    setuserdata({...userdata, [name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(userdata));
    setIsSubmit(true);
    console.log(formErrors)
    if(Object.keys(formErrors).length==0 && isSubmit){
         signUpUser(userdata)
    }
   
  }
  const validate=(values)=>{
    const error={};
    const regex_email= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    if(!values.email){
        error.email="*email is required"
    }
   else if(!regex_email.test(values.email)){
        error.email="*email is invalid"
    }
 if(values.password.length<6){
        error.password="*Password must contain atleast 6 letters"
    }
    else if(values.password.length>16){
      error.password="*Password must contain less than 16 letters"
    }
if(values.confirmPass!==values.password){
  error.confirmPass="*password doesnot match"
}

   return error;
}
    return(
        <>
       
         <div className="signup-container">
          <div className="signup-logo">
            <h4>Logo</h4>
            <p>Create New Account</p>
          </div>
          <div className="signup-form">
            <form method="POST" onSubmit={handlesubmit}>
                <div>
                <input 
                type="text" 
                name="email" 
                placeholder="Mail ID"
                onChange={handlechnge}/>
                </div>
                <p>{formErrors.email}</p>
                <div>
                <input 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={handlechnge}/>
                </div>
                <p>{formErrors.password}</p>
                <div>
                <input 
                type="text" 
                name="confirmPass" 
                placeholder="Confirm Password"
                onChange={handlechnge}/>
                </div>
               <p>{formErrors.confirmPass}</p>
              <div className="signup-button">
                <button>Sign up</button>
              </div>
            </form>
          </div>
         </div>

        </>
    )
}
export default Signup;