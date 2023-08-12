import React from "react";
import { Row, Col, Card } from "antd";
import cleanDesign from '../components/images/clean.png'
import modern from './images/ModernDesign.png'
import creative from './images/Creative.png'
import unlimited from '../components/images/unlimited-features.jpg'
import easy from './images/easy-customise.jpg'
import advanced from './images/advanced-option.jpg'

const { Meta } = Card;

function Features() {
  return (
    <section className="features" id="features">
      <header className="features-header text-center">
        <h2 className="sub-header no-gutter">Testimonials And FeedBacks
        </h2>
        <p>We Serve To 
        </p>
        <hr className="border-bottom" />
      </header>
      <div className="features-body-cards">
        <Row justify="center" gutter={[20, 30]}>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Modern Design"  src={modern}
                style={{ height: '200px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Clean And Elegant" src={cleanDesign} style={{ height: '200px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Creative Design" src={creative }
                style={{ height: '200px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Creatvive Design" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Easy to Customize" src={easy}
                style={{ height: '200px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Easy to Customize" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Unlimited Features" src={unlimited} style={{ height: '200px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Advanced Options" src={advanced}
                style={{ height: '200px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Features;
