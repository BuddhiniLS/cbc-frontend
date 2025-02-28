import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log("Fetched products:", res.data); // Debugging
        setProducts(res.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-6 relative">
     
     <Link
  to={"/admin/products/addProduct"}
  className="absolute right-[25px] bottom-[25px] text-[25px] border-[#3682f6] border text-[#3682f6] p-5 rounded-xl hover:rounded-full shadow-lg hover: transition-all cursor-pointer"
  aria-label="Add New Product"
>
  <FaPlus />
</Link>


      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Admin Products Page
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Product ID</th>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Last Price</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Static Data for Testing */}
            {[
              {
                productId: "1234",
                productName: "Face Serum",
                price: "25.99",
                lastPrice: "28.98",
                stock: "200",
                description: "The Ordinary's New Serum Ended",
              },
              {
                productId: "1235",
                productName: "Face Cream",
                price: "125.99",
                lastPrice: "228.98",
                stock: "30",
                description: "Hydrating face cream",
              },
              {
                productId: "1236",
                productName: "Face Mask",
                price: "130.99",
                lastPrice: "230.98",
                stock: "35",
                description: "Hydrating face mask",
              },
            ].map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 transition-all"
              >
                <td className="py-3 px-4">{product.productId}</td>
                <td className="py-3 px-4">{product.productName}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4 text-red-500">${product.lastPrice}</td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4">{product.description}</td>
                <td className="py-3 px-4 flex justify-center space-x-3">
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-all cursor-pointer"
                    aria-label="Edit Product"
                  >
                    <FaPencil />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 transition-all cursor-pointer"
                    aria-label="Delete Product"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {/* Dynamic Data from API */}
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-200 hover:bg-gray-100 transition-all"
                >
                  <td className="py-3 px-4">{product._id}</td>
                  <td className="py-3 px-4">{product.productName}</td>
                  <td className="py-3 px-4">${product.price}</td>
                  <td className="py-3 px-4 text-red-500">${product.lastPrice}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4">{product.description}</td>
                  <td className="py-3 px-4 flex justify-center space-x-3">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition-all cursor-pointer"
                      aria-label="Edit Product"
                    >
                      <FaPencil />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 transition-all cursor-pointer"
                      aria-label="Delete Product"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
