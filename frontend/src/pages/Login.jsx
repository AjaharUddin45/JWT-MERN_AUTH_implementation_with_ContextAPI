import  { useState,useContext } from 'react'
import axios from 'axios';
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/userContext";
import "./register.css";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [data,setData] = useState({
  email:"",
  password:"",
});

const handelInputChange = (event)=>{
    setData((currVal)=>{
      return {
        ...currVal, [event.target.name] : event.target.value,
      }
    });
  }

  const loginUser = async (event)=>{
    event.preventDefault();
    const {email,password} = data;
    try{
        const response = await axios.post("/login",{
          email,
          password,
        });
        const data = response.data;
        if(data.error){
              toast.error(data.error);
        }else{
          setUser(response.data.user);
          setData({});
           toast.success("Login successful,welcome!");
          navigate("/dashboard");

        }

    }catch(err){
      console.log(err);
    }
    
  }
  return (
  //   <div>
  // <form onSubmit={loginUser}>
   
  // <label htmlFor="mail">Email: </label>
  // <input type="email" name="email" id="mail"  value={data.email} onChange={handelInputChange}/>  &nbsp; <br />
  // <label htmlFor="pass">Password: </label>
  // <input type="password" name="password" id="pass" value={data.password} onChange={handelInputChange}/>  &nbsp;<br />
  // <button type="submit">Login</button>
  //  </form>
  //   </div>

 <div className="container">
      <form onSubmit={loginUser}>
        <div className="form__top ">
          <h2>Login</h2>
        </div>
        <div className="form__body">
          
          <div>
            <label htmlFor="email_input">
              Email
            </label>
            <input
              type="email"
              id="email_input"
              name="email"
              value={data.email}
              onChange={handelInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password_input">
              Password
            </label>
            <input
              type="password"
              id="password_input"
              name="password"
              value={data.password}
              onChange={handelInputChange}
              required
            />
          </div>
        </div>
        <div className="form__bottom">
          <div className="btn__container">
            <button type="submit">Login</button>
          </div>
          
        </div>
      </form>
    </div>


  )
}
//devdependencies -> tools used in development testing.
//dependency -> tools need to run our project in production.