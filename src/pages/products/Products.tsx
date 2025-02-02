import { Col, Row } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/product/all-product.api";
import { Link } from "react-router-dom";
import { useState } from "react";
const Products = () => {
  // const { data: products, isFetching } = useGetAllProductsQuery(undefined);
  const { data: products } = useGetAllProductsQuery(undefined);
  console.log("products", products);

  const [showAll] = useState(false);

  const displayedProducts = showAll
    ? products?.data
    : products?.data?.slice(0, 6);

  return (
    <>
      <div className="product-area section-gap-100 ">
        <div className="container">
          <div className="section-title">
            <h2 className="title">Featured Products</h2>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              delectus culpa quos dicta suscipit harum iste quam architecto sint
              eveniet.
            </p>
          </div>

          <div className="product-card-area">
            <Row gutter={[24, 24]}>
              {/* Remainder After Using Index method */}
              {displayedProducts?.map((product, index) => (
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
                  </div>
                </Col>
              ))}
            </Row>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link to="/productPage" className="btn-primary">
                View All Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
