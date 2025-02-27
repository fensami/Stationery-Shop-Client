/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/product/all-product.api";
import { Col, Row } from "antd";
import Breadcum from "../home/inner-page-components/Breadcum";
import { FaStar } from "react-icons/fa";
import { useCreateOrderProductMutation } from "../../redux/features/orders/ordersManagement.api";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);

  const user = useAppSelector((state: any) => state.auth.user);

  const [createOrderProduct] = useCreateOrderProductMutation();

  const handleAddToCart = async () => {
    if (!user) {
      return toast.error("Please log in to place an order");
    }

    if (
      !product?.data?._id ||
      !product?.data?.quantity ||
      product?.data?.quantity <= 0
    ) {
      return toast.error("Product unavailable or out of stock.");
    }

    const toastId = toast.loading("Adding to cart...");

    try {
      const orderData = { product: product.data._id, quantity: 1 }; // Assuming quantity is 1
      const response = await createOrderProduct(orderData);
      console.log(response);
      // if ("error" in response) {
      //   throw new Error(
      //     response?.error?.data?.message || "Failed to add to cart"
      //   );
      // }
      navigate("/cart");

      toast.success("Added to cart successfully!", { id: toastId });
    } catch (err: any) {
      toast.error(err.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <Breadcum title="products Details" breadcrumbs="Product Details" />
      <div className="section-gap-100">
        <div className="container">
          <Row gutter={24}>
            <Col span={12}>
              <div className="product-details-image">
                <img
                  src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
                  alt="product image"
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="details-content-wrap">
                <ul className="star-icons">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                </ul>
                <h3 className="title">{product?.data?.name}</h3>
                <h4 className="category">Category : {product?.data?.brand}</h4>
                <p className="price">Price : {product?.data?.price}</p>
                <p className="desc">
                  Description : {product?.data?.description}
                </p>
                <h5 className="quantity">
                  {product?.data?.quantity > 0 ? (
                    `Quantity : ${product?.data?.quantity}`
                  ) : (
                    <span style={{ color: "red" }}>Stock Out</span>
                  )}
                </h5>

                <p>{product?.data?.inStock}</p>
                <button className="btn-primary" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
