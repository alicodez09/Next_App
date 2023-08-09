"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

const loginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
     
      <label htmlFor="email">Email</label>
      <input
        className="p-2  text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter Your Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border  text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter Your Password"
      />
      <button className="p-2 border  border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        Login 
      </button>
      <Link href="/signup">Visit SignUp</Link>
    </div>
  );
};

export default loginPage;
