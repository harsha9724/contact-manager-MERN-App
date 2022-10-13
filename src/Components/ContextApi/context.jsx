import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const context = createContext();

export const ContextProvider = (props) => {

  const navigate = useNavigate();
  // const AddcontactUrl="http://localhost:5000/contacts"
  const postContacts = (data) => {
   if (data) {
      return fetch("http://localhost:5000/contacts", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
        .then((res) => console.log(res))
    }
  }
  const signUpUser = (userData) => {
    console.log(userData);
    try {
      axios
        .post("http://localhost:5000/register", userData)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          window.alert(`Registeration Failed`);
        });
    } catch (error) {
      window.alert(error.message);
    }
  };


  return (
    <context.Provider
      value={
        {
          postContacts,
          signUpUser
        }
      }>
      {props.children}
    </context.Provider>
  )
}