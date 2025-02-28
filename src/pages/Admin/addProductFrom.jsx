export default function AddProductForm() {
    return (
        <div className="w-full h-full flex flex-col items-center p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Product</h1>

            <div className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Product ID</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter Product ID"/>
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Product Name</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="Product Name" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Alternative Names</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="Alternative Names" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Image URLs</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="mage URLs" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Price</label>
                    <input type="number" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="Price" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Last Price</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="Last Price" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Stock</label>
                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="Stock" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-medium text-gray-700">Description</label>
                    <textarea className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="3" placeholder="Description"> </textarea>
                </div>

                <button className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition duration-300">Add Product</button>
            </div>
        </div>
    );
}
