import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const context = createContext();

export const ContextProvider = (props) => {
  const [email,setEmail]=useState("")

  const navigate = useNavigate();

  // ***************posting signin details**************

  const signInUser=(loginData)=>{
      console.log(loginData);
      axios
      .post("http://localhost:5000/login", loginData)
      .then((res) => {
        const myToken = res.data.token;
        console.log(myToken);
        localStorage.setItem("token", myToken);
        localStorage.setItem("email", loginData.email);
        navigate("/contacts");
        // fetchContacts();
        document.location.reload();
        setEmail(loginData.email);
      })
      .catch((err) => {
        window.alert(err.response.data.message)
        console.log(err)});
  };
  



  // ************posting contacts **************
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  
   const postContacts = async (ContactsData) => {
  
      return await axios
        .post("http://localhost:5000/add", ContactsData, config)
        .then((res) => console.log(res))
        .catch((err)=> {
         console.log(err.response.data.message)
          // console.log(err)
        })
   
  };
//   fetching the contacts;
const fetchContacts = () => {
  axios
    .get("http://localhost:5000/alldata", config)
    .then((res) => {
      console.log(res.data[0].contact);
      // const data = res.data.message[0].Contacts;
      // setContacts(data);
      // setIsLoading(false);
    })
    .catch((err) => console.log(err));
};
useEffect(() => {
  fetchContacts();
}, []);

  // *************posting signup detailes ***********
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
          window.alert(err.response.data.message);
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
          signUpUser,
          signInUser,
          email,
          fetchContacts
        }
      }>
      {props.children}
    </context.Provider>
  )
}