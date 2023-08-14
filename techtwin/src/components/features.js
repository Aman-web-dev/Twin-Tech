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
              className="testimonial-card"              
              hoverable
              cover={<img classname="cardImage" alt="Modern Design"  src={modern}
                 />}
            >
              <Meta className="card-title" title="Modern Design" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              className="testimonial-card"    
              hoverable
              cover={<img classname="cardImage" alt="Clean And Elegant" src={cleanDesign}   />}
            >
              <Meta className="card-title" title="Clean and Elegant" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              className="testimonial-card"
              hoverable
              cover={<img classname="cardImage" alt="Creative Design" src={creative }
                 />}
            >
              <Meta className="card-title"   title="Creatvive Design" />
            </Card>
          </Col>




          <Col md={8} lg={7} xl={8}>
            <Card
              className="testimonial-card"
              hoverable
              cover={<img classname="cardImage" alt="Easy to Customize" src={easy}
                 />}
            >
              <Meta className="card-title" title="Easy to Customize" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              className="testimonial-card"              hoverable
              cover={<img classname="cardImage" alt="Unlimited Features" src={unlimited}  />}
            >
              <Meta className="card-title" title="Unlimited Features" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              className="testimonial-card" 
               hoverable
              cover={<img classname="cardImage" alt="Advanced Options" src={advanced}
                 />}
            >
              <Meta className="card-title" title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Features;
