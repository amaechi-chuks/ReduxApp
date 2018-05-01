import React from 'react';


const Footer = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-5">
                    <li>&copy;  2005-2018 Amaechi</li>
                    <div className='space'>
                        <li> Contact Us</li>
                        <li>About</li>
                    </div>
                </div>
                <div className="col-md-5" id="social-networks">
                    <a href=""><i className="fa fa-2x fa-facebook-square"></i></a>
                    <a href=""><i className="fa fa-2x fa-twitter-square"></i></a>
                    <a href=""><i className="fa fa-2x fa-google-plus-square"></i></a>
                    <a href=""><i className="fa fa-2x fa-youtube-square"></i></a>
                    <a href=""><i className="fa fa-2x fa-vimeo-square"></i></a>
                    <a href=""><i className="fa fa-2x fa-pinterest-square"></i></a>
                    <a href=""><i className="fa fa-2x fa-linkedin-square"></i></a>
                </div>
            </div>
        </div>


    );
}
export default Footer;
