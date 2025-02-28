import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login() {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password
      });

      if (res.data.user == null) {
        toast.error(res.data.message);
        return;
      }

      toast.success("Login successful!");
      localStorage.setItem("token", res.data.token);

      if (res.data.user.type === "admin") {
        navigate ("/admin");
        
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-screen bg-red-900'>
      <div className='w-[450px] h-[450px] bg-blue-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-lg'>
        <img src='/crystal beauty clear logo.png' className='rounded-full w[10px]' />

        <span className="text-white">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email address'
          className='p-2 rounded w-64 mb-2'
        />

        <span className="text-white">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
          className='p-2 rounded w-64 mb-4'
        />

        <button onClick={login} className='bg-white px-4 py-2 rounded font-bold'>
          Login
        </button>
      </div>
    </div>
  );
}
