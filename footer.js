import React from "react";
import Instagram from "./assets/Instagram.svg"
import Facebook from "./assets/Facebook.svg"
import Twitter from "./assets/Twitter.svg"
import "./footer.css"
function Footer() {
    return (
        <div className="top ">
            <div className="middle">
                <div className="last">
                    <div className="header-col">
                        <div className="header">
                            <h3><span id="a">COOKBOOK</span >
                            </h3>
                            <div id="b">
                                <span >the best online recipes</span>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <h4>INFORMATION</h4>
                        <a href="/About Us">
                            <p>About Us</p>
                        </a>
                        <a href="/Search">
                            <p>Search</p>
                        </a>
                        <a href="/Testimonals">
                            <p>Testimonals</p>
                        </a>
                        <a href="/Events">
                            <p>Events</p>
                        </a>




                    </div>
                    <div className="box">
                        <h4>LOCATION</h4>
                        <a href="https://www.bing.com/search?pglt=2081&q=bhaktapur+nepal+location&cvid=147140f758a24d8baac3da594ce4f813&aqs=edge..69i57.11592j0j1&FORM=ANAB01&PC=DCTS">
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg> Bhaktapur, Nepal</p>
                        </a>


                    </div>
                    <div className="box">
                        <h4>CONTACT US</h4>
                        <p>9822334455</p>
                        <a href="">
                            <p>cookbook12@gmail.com</p>

                        </a>
                        <div className="logo">

                            <a href="https://www.bing.com/search?q=facebook+log+in&aqs=edge.1.69i57j69i59j46j0l5j69i60.3334j0j1&FORM=ANAB01&PC=DCTS">

                                <img src={Instagram} height={20} width={20} />
                            </a>


                            <a href="https://www.bing.com/search?pglt=41&q=facebook+log+in&cvid=e168868bf8b54e9da3bd5708953ed633&aqs=edge.0.69i59j69i57j46j0l5j69i60.13606j0j1&FORM=ANAB01&PC=DCTS">

                                <p> <img src={Facebook} height={20} width={20} /></p>                       </a>


                            <a href="https://twitter.com/i/flow/login">
                                <p> <img src={Twitter} height={20} width={20} /></p>

                            </a>
                        </div>



                    </div>

                </div>

            </div>

        </div>

    );
}
export default Footer