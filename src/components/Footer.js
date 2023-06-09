import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-muted">© 2023</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            Made by Indranil Bhuin
            </a>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="https://github.com/indranil-bhuin"><FaGithub /></a></li>
                <li class="ms-3"><a class="text-muted" href="https://in.linkedin.com/in/indranilbhuin"><FaLinkedin /></a></li>
            </ul>
        </footer>
        </div>
    </>
  )
}

export default Footer
