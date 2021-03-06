import React, { Component } from 'react';

import './main.css';

class LandingPage extends Component {
    render() {
        return(
            <div class>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark  fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">Restro</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pizza</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Appetizrs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Soup</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Shushi rolls</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Spaghetti</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pasta</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Masthead */}
                <header class="masthead text-white text-center">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-9 mx-auto mt-5">
                                <h1 class="mb-5">Bistro • Bar • Shushi</h1>
                            </div>
                            <div class="col-xl-12 mx-auto order-now my-padding">
                                <a href="#">Order Now!</a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Gallery */}
                <section id="photos">
                    <h1 class="mb-5 text-center">FEATURED MENUS</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6 portfolio-item">

                                <img class="card-img-top" src="https://images.pexels.com/photos/7658/food-pizza-box-chalkboard.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    
                                <a href="#" data-featherlight="https://images.pexels.com/photos/7658/food-pizza-box-chalkboard.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"><h2>Pizza</h2></a>

                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">

                                <img class="card-img-top" src="https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                <a href="#" data-featherlight="https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"><h2>Appetizers</h2></a>

                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">

                                <img class="card-img-top" src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                <a href="#" data-featherlight="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"><h2>Soup</h2></a>

                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">

                                <img class="card-img-top" src="https://images.pexels.com/photos/684965/pexels-photo-684965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                <a href="#" data-featherlight="https://images.pexels.com/photos/684965/pexels-photo-684965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"><h2>Shushi rolls</h2></a>

                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">

                                <img class="card-img-top" src="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                <a href="#" data-featherlight="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"><h2>Spaghetti</h2></a>

                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">

                                <img class="card-img-top" src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                <a href="#" data-featherlight="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"><h2>Pasta</h2></a>

                            </div>

                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section class="testimonials text-center mybg">
                    <div class="container">
                        <h2 class="mb-5">What people are saying...</h2>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img class="img-fluid rounded-circle mb-3" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                    <h5>Fred S.</h5>
                                    <p class="font-weight-dark mb-0">"Lorem ipsum dolor sit amet!"</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img class="img-fluid rounded-circle mb-3" src="https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
                                    <h5>Margaret E.</h5>
                                    <p class="font-weight-dark mb-0">"Lorem ipsum dolor sit amet"</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img class="img-fluid rounded-circle mb-3" src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
                                    <h5>Sarah	W.</h5>
                                    <p class="font-weight-dark mb-0">"Lorem ipsum dolor sit amet!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section class="call-to-action text-white text-center">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-9 mx-auto">
                                <h2 class="mb-4">Ready to get started?</h2>
                            </div>
                            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <form>
                                    <div class="form-row">
                                        <div class="col-12 col-md-9 mb-2 mb-md-0">
                                            <input type="email" class="form-control myform form-control-lg" placeholder="Enter your email..." />
                                        </div>
                                        <div class="col-12 col-md-3">
                                            <button type="submit" class="btn mybtn btn-block btn-lg btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <section id="footer">
                    <div class="container">
                        <div class="row text-xs-center text-sm-left text-md-left mb-5">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <h5 class="txt-upper">About Restro</h5>
                                <p class="myfont-color text-justify">Lorem ipsum dolor sit amet! Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                <p class="myfont-color">FOLLOW US:</p>
                                <ul class="list-unstyled list-inline social">
                                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-3 myfont-color">
                                <h5 class="txt-upper">HOURS</h5>
                                <p> LUNCH:
                                    <br /> Mon-Fri: 11:30 AM - 2:30 PM
                                    <br />
                                    <br /> DINNER:

                                    <br /> Mon-Thu: 4:45 PM - 10:30 PM
                                    <br /> Fri: 4:45 PM - 11 PM
                                    <br /> Sat: 4:30 PM - 11 PM
                                    <br /> Sun: 5:00 PM - 10:30 PM
                                </p>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <h5 class="txt-upper">Featured Menus</h5>
                                <ul class="list-unstyled quick-links">
                                    <li><a href="javascript:void();">Pizza</a></li>
                                    <li><a href="javascript:void();">Appetizers</a></li>
                                    <li><a href="javascript:void();">Soup</a></li>
                                    <li><a href="javascript:void();">Shushi rolls</a></li>
                                    <li><a href="javascript:void();">Spaghetti</a></li>
                                    <li><a href="javascript:void();">Pasta</a></li>
                                </ul>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <h5 class="txt-upper">Quick links</h5>
                                <ul class="list-unstyled quick-links">
                                    <li><a href="javascript:void();">Home</a></li>
                                    <li><a href="javascript:void();">About</a></li>
                                    <li><a href="javascript:void();">Gallery</a></li>
                                    <li><a href="javascript:void();">Contact Us</a></li>

                                </ul>
                            </div>
                        </div>
                        <hr class="myhr" />
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2  text-white">

                                <p class="h6">Copyright © All Rights Reserved.<a class="text-green ml-2" href="#" target="_blank">Restro</a></p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </section>

                <div class="scroll-top-wrapper ">
                    <span class="scroll-top-inner">
                        <i class="fa fa-2x fa-arrow-circle-up"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default LandingPage;