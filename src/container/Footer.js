import React from 'react';


const Footer = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-5">
                    <li> Copyright&copy; 2018 Amaechi Chuks</li>
                    <div className='space'>
                        <li> Contact Me</li>
                        <li>About</li>
                    </div>
                </div>
                <div className="col-md-5" id="social-networks">  
                    <a href="https://twitter.com/chuks022"><em className="fa fa-2x fa-twitter-square"></em></a>
                    <a href="https://www.linkedin.com/in/chuks-amaechi-1870a2156/"><em className="fa fa-2x fa-linkedin-square"></em></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;
