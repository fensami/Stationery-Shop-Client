import { Card, Col, Row } from "antd";
// import { Meta } from "react-router-dom";
const { Meta } = Card;
const Products = () => {
  return (
    <>
      <div className="product-area section-gap-100">
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
            <Row gutter={24}>
              <Col lg={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col lg={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col lg={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col lg={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col lg={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col lg={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
