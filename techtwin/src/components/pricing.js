import React from 'react';
import { Row, Col, Card, Button } from "antd";

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <header className="pricing-header text-center">
        <h2 className="sub-header no-gutter">Choose a Plan</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <hr className="border-bottom" />
      </header>
      <div className="pricing-body text-center">
        <Row gutter={15} justify="center">
          <Col xs={20} sm={15} md={8} lg={7} xl={7} className="gutter-row">
            <Card
              hoverable
              title="Basic">
              <h3 className="price">$80</h3>
              <ul className="no-gutter">
                <li>1 GB of space</li>
                <li>2 users</li>
                <li>24/7 supports</li>
                <li>Access from anywhere</li>
              </ul>
              <Button
                type="primary"
                size="large"
                icon={<i className="fa fa-location-arrow" aria-hidden="true"></i>}>
                Get Started
              </Button>
            </Card>
          </Col>
          <Col xs={20} sm={15} md={8} lg={7} xl={7} className="gutter-row">
            <Card
              hoverable
              title="Premium">
              <h3 className="price">$200</h3>
              <ul className="no-gutter">
                <li>5 GB of space</li>
                <li>5 users</li>
                <li>24/7 supports</li>
                <li>Access from anywhere</li>
              </ul>
              <Button
                type="primary"
                size="large"
                icon={<i className="fa fa-location-arrow" aria-hidden="true"></i>}>
                Get Started
              </Button>
            </Card>
          </Col>
          <Col xs={20} sm={15} md={8} lg={7} xl={7} className="gutter-row">
            <Card
              hoverable
              title="Enterprise">
              <h3 className="price">$500</h3>
              <ul className="no-gutter">
                <li>10 GB of space</li>
                <li>10 users</li>
                <li>24/7 supports</li>
                <li>Access from anywhere</li>
              </ul>
              <Button
                type="primary"
                size="large"
                icon={<i className="fa fa-location-arrow" aria-hidden="true"></i>}>
                Get Started
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Pricing;
