import React from 'react';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-content">
                &copy; {new Date().getFullYear()} News - All rights reserved 
            </div>
        </div>
    );
};

export default Footer;