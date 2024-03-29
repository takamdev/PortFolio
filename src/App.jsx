import React, { useEffect, useId, useState } from "react";
import NavBar from "./componnents/NavBar.jsx";
import Home from "./componnents/Home.jsx";
import About from "./componnents/About.jsx";
import Services from "./componnents/Services.jsx";
import PortFolio from "./componnents/PortFolio.jsx";
import Contact from "./componnents/Contact.jsx";
import Footer from "./componnents/Footer.jsx";
import ScrollReveal from "scrollreveal";
import Typed from 'typed.js';
function App() {
   const [element, setElement] = useState({});
   const [etat, setEtat] = useState({
      home: "active",
      about: "",
      service: "",
      portfolio: "",
      contact: "",
   });
   useEffect(() => {
      setElement({
         home: document.querySelector("#home"),
         about: document.querySelector("#about"),
         service: document.querySelector("#service"),
         portfolio: document.querySelector("#portfolio"),
         contact: document.querySelector("#contact"),
      });


      ScrollReveal({
         reset:true,
         distance:"100px",
         duration:2000,
        
      })
      ScrollReveal().reveal(".textHome , .heading",{origin:"top"})
      ScrollReveal().reveal(".left ",{origin:"left"})
      ScrollReveal().reveal(".servicebottom ",{origin:"bottom"})

      const typed = new Typed(".typetext", {
         strings: ['Frontend Developper', 'Blochain Developper','Youtuber'],
         typeSpeed: 100,
         backSpeed: 100,
         backDelay: 1000,
         loop:true
       });
   
   }, []);
   function controleNav() {
      for (let key in element) {
         let courentElemene = element[key]
         let courentElemeneRect = element[key].getBoundingClientRect();
         switch (key) {
            case "home":
   
               if (courentElemene.offsetHeight-80 >=  Math.abs(courentElemeneRect.top) && courentElemeneRect.top<80 ) {
                 setEtat({
                  home: "active",
                  about: "",
                  service: "",
                  portfolio: "",
                  contact: "",
               })
               }
               break;
            case "about":
               if (courentElemene.offsetHeight-80 >=  Math.abs(courentElemeneRect.top) && courentElemeneRect.top<120) {
                  setEtat({
                     home: "",
                     about: "active",
                     service: "",
                     portfolio: "",
                     contact: "",
                  })
               }
               break;

            case "service":
               if (courentElemene.offsetHeight-80 >=  Math.abs(courentElemeneRect.top) && courentElemeneRect.top<120 ) {
                  setEtat({
                     home: "",
                     about: "",
                     service: "active",
                     portfolio: "",
                     contact: "",
                  })
               }
               break;

            case "portfolio":
               if (courentElemene.offsetHeight-80 >=  Math.abs(courentElemeneRect.top) && courentElemeneRect.top<120 ) {
                  setEtat({
                     home: "",
                     about: "",
                     service: "",
                     portfolio: "active",
                     contact: "",
                  })
               }
               break;

            case "contact":
               
               if (courentElemene.offsetHeight-80 >=  Math.abs(courentElemeneRect.top) && courentElemeneRect.top<150 ) {
                  setEtat({
                     home: "",
                     about: "",
                     service: "",
                     portfolio: "",
                     contact: "active",
                  })
               }
               break;
         }
      }
   }
   window.addEventListener("scroll", function () {
      // a partie du moment une div est a une position pa rapport au haut de 80px on active un lien
      try {
         controleNav();
      } catch (error) {
         console.log();
      }
   });
  

   return (
      <>
         <NavBar
            a1={etat.home}
            a2={etat.about}
            a3={etat.service}
            a4={etat.portfolio}
            a5={etat.contact}
         />
         <main className="ms-0 me-0 ps-0 pe-0 justify-content-center" style={{width:"100wh"}}>
            <Home />
            <About />
            <Services />
            <PortFolio />
            <Contact />
         </main>
         <Footer/>
      </>
   );
}

export default App;
