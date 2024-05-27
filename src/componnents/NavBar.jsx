
function NavBar({ a1, a2, a3, a4, a5 }) {
   let getNav = document.querySelector('#menu');  


  
   
   return (

      <nav className=" fixed-top navbar navbar-expand-lg">
         <div className="container-fluid">
            <a className="navbar-brand ms-5 fs-4" href="#home">
            <span style={{ color: "#0EF" ,fontWeight:"bold",fontStyle:"italic"}}>Ta</span>kam
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
               id="menu"
            >
               <span
                  className="navbar-toggler-icon"
                 
               ></span>
            </button>
            <div
               className= {`collapse navbar-collapse`}
               id="navbarSupportedContent"
            >
               <ul className=" link navbar-nav ms-auto mb-2 mb-lg-0">
                  <li>
                     <a className={`${a1}`} onClick={()=>{ getNav.click()}} href="#">
                        Home
                     </a>
                  </li>
                  <li>
                     <a className={`${a2}`} onClick={()=>{ getNav.click()}} href="#about">
                        About
                     </a>
                  </li>
                  <li>
                     <a className={`${a3}`} onClick={()=>{ getNav.click()}} href="#service">
                        Service
                     </a>
                  </li>
                  <li>
                     <a className={`${a4}`} onClick={()=>{ getNav.click()}} href="#portfolio">
                        PortFolio
                     </a>
                  </li>
                  <li>
                     <a className={`${a5} `} onClick={()=>{ getNav.click()}} href="#contact">
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
