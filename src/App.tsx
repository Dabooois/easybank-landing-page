import { useState } from 'react';
import Article from '@components/Articles/Article';
import Banner from '@components/Banner/banner';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/header';
import Service from '@components/Services/Service';
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
