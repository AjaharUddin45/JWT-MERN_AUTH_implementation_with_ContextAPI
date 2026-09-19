
import { useState } from 'react';
import  {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./register.css";
import { Link } from 'react-router-dom'



export default function  Register() {
  const navigate = useNavigate();
  const [data,setData] = useState({
      name:"",
      email:"",
      password:"",
    });
  
  const handelInputChange = (event)=>{
    setData((currVal)=>{
      return {
        ...currVal, [event.target.name] : event.target.value,
      }
    })
  }
  
  const registerUser = async (event)=>{
    event.preventDefault();
    const {name,email,password } = data;
    try {
      const response  = await axios.post("/register",{
        name,email,password
      });
       const data = response.data;
      if(data.error){
        toast.error(data.error);
      }else{
        setData({});
        toast.success("Registration successful,welcome!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
  //   <div>
  // <form onSubmit={registerUser}>
  //   <label htmlFor="name">Email: </label>
  // <input type="text" name="name" id="name" value={data.name}  onChange={handelInputChange}/>  &nbsp; <br />
  // <label htmlFor="mail">Email: </label>
  // <input type="email" name="email" id="mail"  value={data.email} onChange={handelInputChange}/>  &nbsp; <br />
  // <label htmlFor="pass">Password: </label>
  // <input type="password" name="password" id="pass" value={data.password} onChange={handelInputChange}/>  &nbsp;<br />
  // <button type="submit">Register</button>
  //  </form>
  //   </div>
   <div className="container">
      <form onSubmit={registerUser}>
        <div className="form__top ">
          <h2>Signup</h2>
          <p>It will take only 3 sec.</p>
        </div>
        <div className="form__body">
          <div>
            <label htmlFor="fullname_input">
              Name<sup>*</sup>
            </label>
            <input
              type="text"
              id="fullname_input"
              placeholder="Enter fullname"
              name="name"
              value={data.name}
              onChange={handelInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email_input">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              id="email_input"
              placeholder="xyz@gmail.com"
              name="email"
              value={data.email}
              onChange={handelInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password_input">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              id="password_input"
              placeholder="at least 6 characters"
              name='password'
              value={data.password}
              onChange={handelInputChange}
              required
            />
          </div>
        </div>
        <div className="form__bottom">
          <div className="btn__container">
            <button type="submit">Signup</button>
            
          </div>
          <p>
            Already have an account?<Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
);
}