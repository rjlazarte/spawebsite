import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 my-auto">
                    <Link to ="/home"><img src="../assets/images/footer-logo.png" alt="footer logo" width="100px" /></Link>
                        <ul className="list-unstyled mt-3">
                            <li><Link to ="/home">Home</Link></li>
                            <li><Link to ="/aboutus">About</Link></li>
                            <li><Link to ="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 text-center my-auto">
                        <h4>Follow Us</h4>
                        <a className="btn btn-social-icon" target="_blank" rel="noreferrer" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/SDShepherdsPasture"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon" target="_blank" rel="noreferrer" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon" target="_blank" rel="noreferrer" href="https://www.youtube.com/user/SanDiegoSPA"><i className="fa fa-youtube" /></a> 
                    </div>
                    
                    <hr width="100%" className="hr-footer" ></hr>

                    <div className="col my-5">
                        <p className="mb-0">7210 Lisbon St</p>
                        <p className="mb-0">San Diego, CA 92114</p>
                        <p className="mb-0"><a role="button" href="tel:+12065551234"><i className="fa fa-phone" /> 619.555.1234</a></p>
                        <p><a role="button" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> spa@spa.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;