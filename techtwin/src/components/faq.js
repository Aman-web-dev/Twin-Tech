import React from 'react';
import { Collapse, Row, Col, Button } from 'antd';

const { Panel } = Collapse;

function Faq() {
  return (
    <section className="faq" id="faq">
      <header className="faq-header text-center">
        <h2 className="sub-header no-gutter">Frequently Asked Questions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <hr className="border-bottom" />
      </header>
      <div className="faq-body">
        <Row justify="center">
          <Col xs={23} sm={22} md={20} lg={19} xl={20}>
            <Collapse defaultActiveKey={['1']} accordion>
              <Panel header="What is your typical web development process from start to finish?" key="1">
                <p>
                Our web development process at Twin Tech follows a structured path from inception to completion. We start by thoroughly understanding the client's requirements and goals. Once the scope is clear, we create a detailed plan outlining the design, features, and technologies to be used. Next, we proceed to develop the website, keeping open lines of communication for regular updates. Rigorous testing follows, ensuring functionality across devices and browsers. After revisions and client approval, we launch the site. Even post-launch, we provide support and updates to ensure a seamless digital presence for our clients.
              </p>
              </Panel>
              <Panel header="How can I hire you for a web development project?" key="2">
                <p>
                Hiring us for a web development project is simple. You can reach out to us by sending an email to [your email address] or giving us a call at [your phone number]. Feel free to provide details about your project's requirements and your preferred mode of communication. We'll get back to you promptly to discuss the project further and explore how we can bring your vision to life.
              </p>
              </Panel>
              <Panel header="Can you show me some examples of websites you've developed?" key="3">
                <p>
                Certainly! We'd be happy to showcase examples of websites we've developed. To get a closer look at our portfolio, you can either send us an email at [your email address] to request samples or schedule a meeting at a convenient time. During the meeting, we'll provide you with a comprehensive overview of our past projects, highlighting our capabilities and design expertise. We look forward to demonstrating how we can create impressive digital experiences tailored to your needs.
              </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
      <footer className="faq-footer text-center">
        <Row justify="center">
          <Col xs={23} sm={18} md={15} lg={14} xl={15}>
            <h2 className="sub-header no-gutter">Want a Quick Support?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sit quam nihil repellendus dolores exercitationem amet eveniet odio? Quaerat voluptatibus aliquid nobis reprehenderit libero sunt ad eius saepe voluptate consequatur?
        </p>
            <Button
              type="primary"
              size="large"
              icon={<i className="fa fa-envelope"
                aria-hidden="true"></i>}>
              Email your question
              </Button>
          </Col>
        </Row>
      </footer>
    </section>
  )
}

export default Faq;
