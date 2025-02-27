import { Col, Row } from "antd";
import { useGetAllMyOrdersQuery } from "../../redux/features/orders/ordersManagement.api";

const MyOrders = () => {
  const { data: myOrders } = useGetAllMyOrdersQuery(undefined);
  console.log(myOrders);

  return (
    <>
      <div className="product-card-area">
        <Row gutter={[24, 24]}>
          {myOrders?.data?.map((myOrder, index) => (
            <Col lg={{ span: 8 }} key={index}>
              <div className="product-card-wrap">
                <div>
                  <img
                    src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
                    alt="order image"
                  />
                </div>
                <h2 className="title">{myOrder?.product?.name as string}</h2>
                <p className="para">${myOrder.totalPrice}</p>
                <p className="para">Quantity : {myOrder?.quantity}</p>
                <p className="para">Status : {myOrder?.orderStatus}</p>
                {/* <p className="para-two">{product.category}</p> */}
                {/* <p className="para" style={{ marginTop: "0" }}>
                  Quantity: {product.quantity}
                </p> */}
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* <Link
                    className="btn-primary"
                    to={`/admin/update-product/${product._id}`}
                  >
                    Update
                  </Link> */}
                  {/* <button
                    onClick={() => handleDelete(product._id)}
                    className="btn-primary delete"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default MyOrders;
