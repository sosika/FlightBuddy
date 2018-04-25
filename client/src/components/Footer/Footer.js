import React from "react";
import "./Footer.css";


const Footer = () => (
        <footer class="page-footer grey">
            <div className="wrapper">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                    </div>
                    {/* <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Flight Buddy
                </div>
            </div>
        </footer>
);

export default Footer;
