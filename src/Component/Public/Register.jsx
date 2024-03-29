import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ({ role }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    //fire request to the server
    //using axio

    const URL = "http://localhost:8080/api/v1/users/register";
    const body = {
      email: email,
      password: password,
      userRole: role,
    }
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredetials:true
    }
    try {
      const response = await axios.post(URL, body, header);
      console.log(response)
      sessionStorage.setItem("email",email)
      if(response.status===202)
      {
        navigate("/verify-otp")
      }
     
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex justify-center">
      <div className="w-1/2 h-96 bg-blue-500 mt-32  border-2 border-black shadow-2xl" >
        <div className="h-96 bg-white w-72 border-r-2 border-black border-b-2 ">
          <h3 className="text-2xl pt-4 pl-2.5 font-bold">Register</h3>
          <h4 className="text-1xl pt-1 pl-2.5 font-bold">
            Sign up with your email to get started
          </h4>
          <img src="/Images\login@4x.png" alt="" className="h-60" />
        </div>

        <div className="ml-80 -mt-80 font-bold ">
          <label htmlFor="" className="pr-8 text-white">
            Email
          </label>
          <input
            type="email"
            className="w-60 pl-3 "
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="" className="pr-8 font-bold text-white">
            Password
          </label>
          <input
            type="password"
            className="w-60 pl-3"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />

          <button
            onClick={handleRegistration}
            className="border-2  border-black  px-1 py-0.5 bg-white font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Register;
