

import{Link} from'react-router-dom';
import React from "react";


export default function homePage() {
  return (
    <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop solution for all your needs.</p>
      <button>Home</button>

      <Link to="/login">Login</Link>  

    </div>
  );
}
