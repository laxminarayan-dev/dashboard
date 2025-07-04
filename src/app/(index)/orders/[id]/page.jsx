const Order = ({ params }) => {
  return (
    <>
      <div>
        Order id: {params.id}
        <br />
        Ordered By : Lucky Jaiswal
        <br />
        Food Item : Cake
        <br />
        Quantity : 2
        <br />
        Order Time : 23-03-2025 00:12 AM
        <br />
        Total : 5000
        <br />
        Status : Delivered
        <br />
        Payment Method : Credit Card
        <br />
        Delivery Time : 23-03-2025 00:22 AM
        <br />
        Location : 227K, Karm Dharm, Narora (Near- Mithlesh Vatika, Oppsite Road
        Uday Prabhat Guest House)
      </div>
    </>
  );
};
export default Order;
