import { useState } from 'react';
import Banner from './compoonents/Banner/banner';
import Header from './compoonents/Header/header';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}

export default App;
