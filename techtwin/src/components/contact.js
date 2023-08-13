import React,{useRef} from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from "antd";

// import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv'

function Contact() {


    const serviceID=process.env.SERVICE_ID
    const form = useRef();
    console.log(serviceID)
  

  return (
    <section className="contact" id="contact">
      <header className="contact-header text-center">
        <h2 className="sub-header no-gutter">Get in Touch</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr className="border-bottom" />
      </header>
      <div className="contact-body">
        <Row justify="center">
          <Col xs={20} sm={15} md={12} lg={11} xl={10}>
            <Form name="contact" onSubmit={""}>
              <Form.Item
                name={['name']}
                rules={[{ required: true }]}>
                <Input placeholder="FullName" />
              </Form.Item>
              <Form.Item
                name={['email']}
                rules={[{ type: 'email', required: true }]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={['message']}
                rules={[{ required: true }]}>
                <Input.TextArea placeholder="Your Message" />
              </Form.Item>
              <Form.Item
                name="terms and condition"
                valuePropName="checked"
                rules={[{ required: true }]}>
                <Checkbox>I agree with terms & condition.</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
               </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact
