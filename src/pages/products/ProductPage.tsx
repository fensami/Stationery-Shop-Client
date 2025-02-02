import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/product/all-product.api";
import Breadcum from "../home/inner-page-components/Breadcum";

const ProductPage = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  return (
    <>
      <Breadcum title="All Products" breadcrumbs="All Products" />
      <div className="section-gap-100">
        <div className="container">
          <div className="product-card-area">
            <Row gutter={[24, 24]}>
              {/* Remainder After Using Index method */}
              {products?.data?.map((product, index) => (
                <Col lg={{ span: 8 }} key={index}>
                  <div className="product-card-wrap">
                    <div>
                      <img
                        src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
                        alt=""
                      />
                    </div>
                    <h2 className="title">{product.name}</h2>
                    <p className="para">{product.price}</p>
                    <p className="para-two">{product.category}</p>
                    <Link
                      className="btn-primary"
                      to={`/productDetails/${product._id}`}
                    >
                      Product details
                    </Link>

                    {/* <Link to="/productDetails">Product details</Link> */}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
