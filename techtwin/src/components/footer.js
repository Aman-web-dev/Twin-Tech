import React from 'react';
import { FloatButton } from 'antd';

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
        <a href="#">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
      <div className="footer-backtop">
        <FloatButton.BackTop>
          <div style={style}>
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </div>
        </FloatButton.BackTop>
      </div>
    </section>
  )
}

export default Footer;
