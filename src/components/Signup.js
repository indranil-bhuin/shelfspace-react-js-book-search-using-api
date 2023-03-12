import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import image from '../styles/books.png'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/")
        } catch (err) {
            setError(err.message);
        }
    };
  return (
    <>
    <div className='login'>
        <div className='p-4 box'>
        <img src={image} className='bookImage'/>
            <h2 className='mb-3'>ShelfSpace Please Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Email Address'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password ' 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <div className='d-grid gap-2'>
                    <Button variant='primary' type='Submit'>
                        Sign Up
                    </Button>
                </div>
            </Form>
            <hr />
            <div></div>
        </div>
        <div className='p-4 box mt-3 text-center'>
            Already have an account? <Link to='/'>Log In</Link>
        </div>
        </div>
    </>
  )
}

export default Signup
