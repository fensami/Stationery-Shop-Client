import { Col, Row } from "antd";
import Breadcum from "../home/inner-page-components/Breadcum";

const About = () => {
  return (
    <div>
      <Breadcum title="About" breadcrumbs="About" />
      <div className="section-gap-100">
        <div className="container">
          <Row gutter={30}>
            <Col lg={{ span: 12 }}>
              <div className="about-inner-image">
                <img
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1738071800/umv989lkw9rvsezujnqu.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              <div className="about-inner-right-content">
                <div className="section-title-style-two">
                  <span className="sub-title">About Us</span>
                  <h2 className="title">Lets Know About Me</h2>
                  <p className="para">
                    It is a long established fact that a reader will be
                    distracted by the moreable content of a page when looking at
                    its layout. The point of using Loremsam Ipsum is that it has
                    a more-or-less normal distribution.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
