import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageURLs, setImageURLs] = useState("");
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    async function handleSubmit() {
        const althName = alternativeNames.split(",");
        const imgURLs = imageURLs.split(",");

        const product = {
            productId,
            productName,
            alternativeNames: althName,
            images: imgURLs,
            price: price,
            lastPrice: lastPrice,
            stock: stock,
            description: description
        };

        const token = localStorage.getItem("token")
        try {
            await axios.post("http://localhost:5000/api/products", product, {
                headers: { Authorization: "Bearer" + token }
            })
            navigate("/admin/products")
            toast.success("product added successfully")
            toast.error("faild to add product");




        } catch (err) {


        }





    }

    return (
        <div className="h-full flex flex-col items-center p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Product</h1>

            <div className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Product ID</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Product Name</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Alternative Names</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Alternative Names" value={alternativeNames} onChange={(e) => setAlternativeNames(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Image URLs</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Image URLs" value={imageURLs} onChange={(e) => setImageURLs(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Price</label>
                    <input type="number" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Last Price</label>
                    <input type="number" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Last Price" value={lastPrice} onChange={(e) => setLastPrice(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Stock</label>
                    <input type="number" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Description</label>
                    <textarea className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <button className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    onClick={handleSubmit}>Add Product</button>
            </div>
        </div>
    );
}
