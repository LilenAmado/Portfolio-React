import React from 'react';
import '../assets/css/App.css';
import Menuport from '../components/Menuport'
import Presentation from '../components/Presentation'
import Secc1 from '../components/Secc1'
import Secc2 from '../components/Secc2'
import Secc3 from '../components/Secc3'
import Contacto from '../components/Contacto'
import Pie from '../components/Pie'

function Home() {
  return (
    <div className="Home">
      <Menuport />
      <Presentation />
      <Secc1 />
      <Secc2 />
      <Secc3 />
      <Contacto />
      <Pie />
    </div>
  );
}

export default Home;