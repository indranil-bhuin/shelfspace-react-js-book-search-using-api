import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import Footer from './Footer';
import Navbar from './Navbar';
import Space from './Space';


const Home = () => {
    const { user } = useUserAuth();
    console.log(user);

  return (
    <>
    <div className='header_container'>
      <header className='header'>
        <Navbar />
        <hr />
        <Space />
        <Footer />
      </header>
    </div>
    </>
  )
}

export default Home
