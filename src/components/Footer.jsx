import React from 'react';

const Footer = () => {
    return (
      <div >
         <div className='items-center justify-center mx-auto border-b-2'>
            <h1 className="text-2xl font-bold text-center py-3">Gadget Heaven</h1>
            <p className='text-center py-3'>Leading the way in cutting-edge technology and innovation. </p>
          </div>
        <footer className="footer text-center p-10">
          
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      </div>
    );
};

export default Footer;