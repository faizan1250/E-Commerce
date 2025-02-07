import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post('http://localhost:3000/api/order/list', {}, { headers: { token } });
      console.log(response.data.orders);

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async(e,orderId) => {
    try {
      const response = await axios.post('http://localhost:3000/api/order/status' , {orderId,status:e.target.value}, {headers:{ token }})
      if(response.data.success){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-5 md:p-8">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-5">Orders</h3>

      {/* If no orders are available */}
      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, idx) => (
            <div key={idx} className="border border-gray-300 p-5 rounded-lg shadow-md bg-white">
              {/* Order Header */}
              <div className="flex flex-wrap justify-between items-center border-b pb-3 mb-3">
                <div>
                  <p className="text-sm text-gray-600">Order for</p>
                  <h4 className="text-base font-medium text-gray-800">
                    {order.address.firstName} {order.address.lastName}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm truncate w-full sm:w-auto">
                  <span className="font-semibold">Order ID:</span> {order._id}
                </p>
              </div>

              {/* Order Details */}
              <div className="flex flex-col gap-4">
                {/* Order Items */}
                <div className="flex items-center gap-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/726/726455.png" className="w-12 md:w-16" alt="Order" />
                  <div className="text-sm">
                    {order.items.map((item, idx) => (
                      <p key={idx} className="text-gray-700">
                        {item.name} x {item.quantity} <span className="text-gray-500">{item.size}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Address Details */}
                <div className="text-sm">
                  <p className="text-gray-700">
                    <span className="font-medium">Address:</span> {order.address.street}, {order.address.city},{" "}
                    {order.address.state}, {order.address.country}, {order.address.zipcode}
                  </p>
                  <p className="text-gray-700 mt-1">
                    <span className="font-medium">Phone:</span> {order.address.phone}
                  </p>
                </div>

                {/* Order Summary */}
                <div className="text-sm space-y-1">
                  <p className="text-gray-700">
                    <span className="font-medium">Items:</span> {order.items.length}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Method:</span> {order.paymentMethod}
                  </p>
                  <p className={`font-medium ${order.payment ? "text-green-600" : "text-red-600"}`}>
                    Payment: {order.payment ? "Done" : "Pending"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Total:</span> ${order.amount}
                  </p>
                </div>
              </div>

              {/* Order Status */}
              <div className="mt-4 flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">Order Status:</label>
                <select onChange={(e) => statusHandler(e,order._id)} value={order.status} className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out For Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
