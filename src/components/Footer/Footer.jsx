import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    We offer premium electronics and accessories, from cutting-edge headphones to smartwatches. Our goal is to provide a seamless shopping experience with secure payments, fast delivery, and products that fit your lifestyle.
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">New Delhi, 110345</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 10801180118</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: ecommerce@e.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text"><Link to="/">Home</Link></span>
                    <span className="text"><Link to="/about">About</Link></span>
                    <span className="text"><Link to="/privacy-policy">Privacy Policy</Link></span>
                    <span className="text"><Link to="/returns">Returns</Link></span>
                    <span className="text"><Link to="/terms">Terms & Conditions</Link></span>
                    <span className="text"><Link to="/contact">Contact Us</Link></span>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">Copyright 2024</div>
                    <img src={Payment} alt="Payment Options" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
