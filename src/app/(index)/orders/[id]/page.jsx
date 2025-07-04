const Order = ({ params }) => {
  return (
    <div className="p-6 max-w-xl w-full space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
        Order Details
      </h2>

      <div className="text-gray-700 space-y-1">
        <p>
          <span className="font-medium">Order ID:</span> {params.id}
        </p>
        <p>
          <span className="font-medium">Ordered By:</span> Lucky Jaiswal
        </p>
        <p>
          <span className="font-medium">Food Item:</span> Cake
        </p>
        <p>
          <span className="font-medium">Quantity:</span> 2
        </p>
        <p>
          <span className="font-medium">Order Time:</span> 23-03-2025 00:12 AM
        </p>
        <p>
          <span className="font-medium">Total:</span> ₹5000
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          <span className="text-green-600 font-semibold">Delivered</span>
        </p>
        <p>
          <span className="font-medium">Payment Method:</span> Credit Card
        </p>
        <p>
          <span className="font-medium">Delivery Time:</span> 23-03-2025 00:22
          AM
        </p>
        <p>
          <span className="font-medium">Location:</span>
          <br />
          <span className="block text-sm text-gray-600">
            227K, Karm Dharm, Narora <br />
            (Near Mithlesh Vatika, Opposite Road, Uday Prabhat Guest House)
          </span>
        </p>
      </div>
    </div>
  );
};

export default Order;
