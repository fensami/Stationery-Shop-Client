import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/product/all-product.api";
import { Col, Row } from "antd";
import Breadcum from "../home/inner-page-components/Breadcum";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  // const { data: product, isFetching } = useGetSingleProductQuery(id);
  const { data: product } = useGetSingleProductQuery(id);

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
                  Quantity : {product?.data?.quantity}
                </h5>
                <p>{product?.data?.inStock}</p>
                <Link to="/" className="btn-primary">
                  Add To Cart
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
