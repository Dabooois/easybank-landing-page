import { useState } from 'react';
import Article from './compoonents/Articles/Article';
import Banner from './compoonents/Banner/banner';
import Footer from './compoonents/Footer/Footer';
import Header from './compoonents/Header/header';
import Service from './compoonents/Services/Service';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='relative'>
        <Banner />
        <Service />
        <Article />
      </main>
      <Footer />
    </div>
  );
}

export default App;
