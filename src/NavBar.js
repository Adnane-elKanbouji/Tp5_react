import React from 'react'
import './NavBar.css';




export default function NavBar() {
  return (
    <div>
 
 <section class="header">
            <div class="overlay">
                <div class="row">
                   <div class="navbar navbar-default">
                      <div class="container-fluid">
                    
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                            <div class="navlogo col-lg-2">
                                <a class="navbar-brand" href="#">Name</a>
                            </div>
                          
                        </div>

                       
                          
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div class="col-lg-8">
                                      <ul class="nav navbar-nav nav-links">
                                         <li><a href="#">Demos</a></li>
                                        <li><a href="#">Featured</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="#">Elements</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Shop</a></li>

                                      </ul>
                                    </div>
                                    
                                <div class="col-lg-2 right">
                                     <ul class="nav navbar-nav navbar-right">
                                        <li><a href="#"><i class="fa fa-search fa-2x"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart fa-2x"></i></a></li>
                                         
                                    </ul>
                                </div>
                              
                            </div>
                         

                      </div>
                 </div>
                
                
                </div>
        
                
                
                
                
            </div>
        </section>
  
  </div>

)  
}
