import React from "react";
import'./SignIn.css';


const SignIn = ()=>{
    return(  
        <div className="signIn-container">
        <div className="signIn-header">
            <h4>Logo</h4>
        <p>Enter your credentials to access your account</p>
        </div>
       
       <div className="signIn-form">
       <form method="POST">
        <div>
       <input type = "text" placeholder="User ID" ></input>
       </div>
       <div>
       <input type = "password" placeholder="Password"></input>
       </div>
        <div className="signIn-button-1">
        <button>Sign In</button>
        </div>
        </form>
        </div>
        <div className="signIn-button-2">
            <button>Sign Up</button>
        </div>
    </div>
      )
}
   

export default SignIn ;