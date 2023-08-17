import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Wan</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/wan-xin-454b4111b/" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://t.me/wanxin0" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-telegram"></i>
                    </a>
                    <a href="https://github.com/wanxin1996" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Wan Xin. All rights reserved
                </span>

            </div>
        </footer>
    )
}

export default Footer