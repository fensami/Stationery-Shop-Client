import { Col, Row } from "antd";

const Testimonial = () => {
  return (
    <div className="section-gap-bottom-100">
      <div className="container">
        <div className="section-title">
          <h2 className="title">Testimonials</h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <Row gutter={30}>
          <Col md={{ span: 12 }} span={24}>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1738042694/npazmt53moiqun3cg6j5.png"
                  alt=""
                />
              </div>
              <div className="testimonial-content-wrap">
                <p className="para">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                </p>
                <h4 className="title">Name</h4>
                <p className="sub-title">CEO</p>
              </div>
            </div>
          </Col>
          <Col md={{ span: 12 }} span={24}>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1738042694/npazmt53moiqun3cg6j5.png"
                  alt=""
                />
              </div>
              <div className="testimonial-content-wrap">
                <p className="para">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                </p>
                <h4 className="title">Name</h4>
                <p className="sub-title">CEO</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonial;
