import { Col, Row } from "antd";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderShippingMutation,
} from "../../../redux/features/orders/ordersManagement.api";
import { toast } from "sonner";

const AllOrders = () => {
  const { data: orders } = useGetAllOrdersQuery(undefined);
  const [updateOrder] = useUpdateOrderShippingMutation();
  //   console.log(updateOrders);
  const handleUpdate = async (orderId: string) => {
    console.log(orderId);

    const toastId = toast.loading("Creating...");
    try {
      await updateOrder({ id: orderId });
      // Optionally, show a success message or refetch products
      toast.success("order shipping Success !", { id: toastId });
    } catch (error) {
      console.error("Error order:", error);
      toast.error("Error order is not updated:", { id: toastId });
    }
  };

  const [deleteOrder] = useDeleteOrderMutation(undefined);

  const handleDelete = async (productId: string) => {
    const toastId = toast.loading("Creating...");
    try {
      await deleteOrder(productId).unwrap();
      toast.success("order Deleted Success !", { id: toastId });
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Error deleting order:", { id: toastId });
    }
  };

  return (
    <div>
      <div className="product-card-area">
        <Row gutter={[24, 24]}>
          {orders?.data?.map((order, index) => (
            <Col lg={{ span: 8 }} key={index}>
              <div className="product-card-wrap">
                <div>
                  <img
                    src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
                    alt="product image"
                  />
                </div>
                <h2 className="title">Status : {order.orderStatus}</h2>
                <p className="para">Total price : {order.totalPrice}</p>
                <p className="para-two">Quantity: {order.quantity}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* <Link
                    className="btn-primary"
                    // to={`/admin/update-product/${product._id}`}
                  >
                    Shiping
                  </Link> */}
                  {order.orderStatus === "Shipping" ? (
                    <h2 className="shipped">Shipped</h2>
                  ) : (
                    <button
                      onClick={() => handleUpdate(order._id)}
                      className="btn-primary"
                    >
                      Shipping
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn-primary delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllOrders;
