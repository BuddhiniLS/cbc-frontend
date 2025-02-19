import { Link } from "react-router-dom";
import React from "react";
import { BsGraphUp, BsBoxSeam, BsCartCheck, BsPeople } from "react-icons/bs";

export default function AdminHomePage() {
    return (
        <div className="bg-slate-700 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center p-4 space-y-6">
                <Link className="flex items-center space-x-2 text-white text-lg" to="/admin/dashboard">
                    <BsGraphUp /> <span>Dashboard</span>
                </Link>
                <Link className="flex items-center space-x-2 text-white text-lg" to="/admin/products">
                    <BsBoxSeam /> <span>Products</span>
                </Link>
                <Link className="flex items-center space-x-2 text-white text-lg" to="/admin/orders">
                    <BsCartCheck /> <span>Orders</span>
                </Link>
                <Link className="flex items-center space-x-2 text-white text-lg" to="/admin/customers">
                    <BsPeople /> <span>Customers</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="w-[80%] h-screen bg-red-600 flex justify-center items-center">
                
            </div>
        </div>
    );
}
