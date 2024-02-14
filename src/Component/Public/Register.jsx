import React, { useState } from "react";

const Register = ({ role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const respond = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(role);
  };

  return (
    <header className="flex justify-center ">
      <div className="w-1/2 h-96 bg-red-300 mt-32">
        <div className="h-96 bg-green-400 w-72">
          <h3 className="text-2xl pt-6 pl-2.5 font-bold">
            Looks like you're new here!
          </h3>
          <h4 className="text-1xl pt-4 pl-2.5">
            Sign up with your email to get started
          </h4>
          <img src="/Images\login@4x.png" alt="" />
        </div>

        <div className="ml-80 -mt-80">
          <label htmlFor="" className="pr-8">
            Email
          </label>
          <input
            type="email"
            className="w-60 pl-3 "
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="" className="pr-8 ">
            Password
          </label>
          <input
            type="text"
            className="w-60 pl-3"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />

          <button
            onClick={respond}
            className="border-2  border-black  px-1 py-0.5 bg-white " >
            Submit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Register;
