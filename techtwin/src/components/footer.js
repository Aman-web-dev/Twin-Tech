import React from 'react';
import { BackTop } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
};

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-links text-center">
        <a href="https://www.linkedin.com/in/aman-kumar-a6b374288/" target="_blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/tech-twin" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://wa.me/918810217208" target="_blank">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
      <div className="footer-backtop">
        <BackTop>
          <div style={style}>
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </div>
        </BackTop>
      </div>
    </section>
  )
}
export default Footer;