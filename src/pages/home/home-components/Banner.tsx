import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <Row gutter={16}>
          <Col className="gutter-row" span={24} lg={{ span: 12 }}>
            <div className="banner-content">
              <h3 className="banner-back-to-school">BACK TO SCHOOL</h3>
              <h2 className="banner-big-sale">BIG SALE</h2>
              <h3 className="banner-discount">UP TO 20% OFF</h3>
              <p className="banner-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
              <Link to="/" className="btn-primary">
                Shop Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
