import React from "react";
import { Row, Col, Card } from "antd";

function About() {
  return (
    <section className="about" id="about">
      <header className="about-header text-center">
        <h2 className="sub-header no-gutter">About Us</h2>
        <p>Increasing Your Online Presence.</p>
        <hr className="border-bottom" />
      </header>
      <div className="about-body text-center">
        <Row justify="center">
          <Col xs={20} sm={18} md={20} lg={19} xl={18}>
          "Twin Tech: Your Web Solutions Duo 🚀🌐
We are a dynamic web development agency based in Delhi, India. Comprising two skilled college students, we blend creativity and technology to craft stunning websites that make a lasting impact. From sleek designs to seamless functionality, we turn ideas into digital reality. Let's transform your online presence together!"


               </Col>
        </Row>
        <div className="about-body-cards">
          <Row gutter={10} justify="center">
            <Col md={8} lg={7} xl={7}>
              <i className="fa fa-pie-chart" aria-hidden="true"></i>
              <Card title="High Performance" bordered={false}>
              "Unlocking Peak Performance in the Digital Realm 🚀⚡
At Twin Tech, we specialize in crafting high-performance websites that don't just look great, but also deliver lightning-fast speed and seamless user experiences. Our Delhi-based team of web development enthusiasts merges cutting-edge technology with efficient coding practices to ensure your online presence stands out from the crowd. Elevate your website's performance with Twin Tech!"
              </Card>
            </Col>
            <Col md={8} lg={7} xl={7}>
              <i className="fa fa-desktop" aria-hidden="true"></i>
              <Card title="Flat Design" bordered={false}>
              "Sleek Simplicity in Every Pixel: Embracing Flat Design ✨🎨
At Twin Tech, we embrace the elegance of flat design to create visually appealing and user-centric websites. Based in Delhi, India, our web development approach leverages clean lines, vibrant colors, and intuitive interfaces to deliver modern digital experiences. Join us in the world of flat design, where simplicity meets sophistication, and your website comes to life with a fresh and engaging aesthetic."
              </Card>
            </Col>
            <Col md={8} lg={7} xl={7}>
              <i className="fa fa-stack-exchange" aria-hidden="true"></i>
              <Card title="Simplified Workflow" bordered={false}>
              "Effortless Progress, Elevated Results: Our Simplified Workflow 📈✅
Twin Tech's web development prowess extends beyond code – it's about delivering results through an efficient and streamlined workflow. Based in Delhi, India, our college-student duo ensures that every project follows a meticulously designed process. From ideation to execution, we prioritize clear communication, agile development, and timely delivery. Experience the power of a simplified workflow that turns your ideas into digital success stories."

              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default About;
