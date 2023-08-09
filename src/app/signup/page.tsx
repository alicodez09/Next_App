"use client";
import React ,{useEffect} from "react";
import { useRouter } from "next/router";
// import { axios } from "axios";
import Link from "next/link";

const signupPage = () => {
  // const router=useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled,setButtonDisabled]=React.useState(false);

  const onSignup = async () => {};

  useEffect(() => {
   if(user.email.length>8 && user.password.length>6 &&  user.username.length>3){
    setButtonDisabled(false)
   }else{
    setButtonDisabled(true)
   }
  }, [user])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter Your Name"
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter Your Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter Your Password"
      />
      <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
       {buttonDisabled?"Loading":"Signup"}
      </button>
      <Link href="/login">Visit Login</Link>
    </div>
  );
};

export default signupPage;
