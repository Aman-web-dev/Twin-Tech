import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function Nav() {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav className="nav" id="home">
        <a href="#home" style={{display:"flex", alignItems:"center"}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 logotwo">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>

          <span style={{fontSize:"1.2rem"}}>Twin-Tech </span>
        </a>
        <div className="desktop-nav ">
          <Anchor affix={false} defaultSelectedKeys={['home']} targetOffset={64}>
            <Link href="#home" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#features" title="Features" />
            <Link href="#faq" title="FAQ" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobile-nav">
          <Button type="primary" onClick={showDrawer}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <Anchor affix={false} defaultSelectedKeys={['home']} targetOffset={64}>
              <Link href="#home" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#features" title="Features" />
              <Link href="#hiw" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </nav>
    </>
  )
}

export default Nav;
