import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar({ a1, a2, a3, a4, a5 }) {
   return (

      <nav className=" fixed-top navbar navbar-expand-lg">
         <div className="container-fluid">
            <a className="navbar-brand" href="#home">
               PortFolio
            </a>
            <button
               style={{ backgroundColor: "white"}}
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span
                  className="navbar-toggler-icon"
                 
               ></span>
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className=" link navbar-nav ms-auto mb-2 mb-lg-0">
                  <li>
                     <a className={`${a1} `} href="#">
                        Home
                     </a>
                  </li>
                  <li>
                     <a className={`${a2} `} href="#about">
                        About
                     </a>
                  </li>
                  <li>
                     <a className={`${a3} `} href="#service">
                        Service
                     </a>
                  </li>
                  <li>
                     <a className={`${a4} `} href="#portfolio">
                        PortFolio
                     </a>
                  </li>
                  <li>
                     <a className={`${a5} `} href="#contact">
                        Contact
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
