import React from 'react';
import { Layout } from 'antd';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import Faq from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';

const { Header } = Layout;

const App = () => {

  return (
    <>
      <Header>
        <Nav />
      </Header>
         <Hero />
         <About />
         <Features />
         <Faq />
         <Contact />
         <Footer /> 
    </>
  );
}

export default App;
