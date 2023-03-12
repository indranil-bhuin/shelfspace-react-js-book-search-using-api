import React, { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { FaUserCircle } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { async } from '@firebase/util';

const Navbar = () => {
    const { user, logOut } = useUserAuth();
    const handleLogOut = async () => {
      try {
        await logOut();
      } catch (err) {
        console.log(err.message);
      }
    }

    const [userEmail, setUserEmail] = useState(null);

    const userIcon = user.email
    ? user.email.split(' ').map((name) => name[0]).join('')
    : '';
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ShelfSpace</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
            </ul>
            <ul className='navbar-nav mb-2 mb-lg-0 left'>
              <li className='nav-item'>
                <div className="nav-user-icon">
                  <div className="nav-user-initials">{userIcon}</div>
                </div>
              </li>
              <li className='nav-item'>&nbsp;&nbsp;&nbsp;{user && user.email}</li>
              <li className='nav-item'>&nbsp;&nbsp;&nbsp;<Button variant='danger' onClick={ handleLogOut }>Log Out</Button></li>
            </ul>
            
            
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
