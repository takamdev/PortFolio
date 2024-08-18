import  { useEffect, useState } from "react";
import NavBar from "./componnents/NavBar.jsx";
import Home from "./componnents/Home.jsx";
import About from "./componnents/About.jsx";
import Services from "./componnents/Services.jsx";
import PortFolio from "./componnents/PortFolio.jsx";
import Contact from "./componnents/Contact.jsx";
import Footer from "./componnents/Footer.jsx";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import Modal from "./componnents/Modal.jsx";

import { create } from "zustand";

export const useStore = create((set) => ({
   modTitle: "",
   textMod: "",
   updateTitle: (title) => set(() => ({ modTitle: title })),
   updateText: (text) => set(() => ({ textMod: text })),
}));

function App() {
   const [element, setElement] = useState([]);
   const modTitle = useStore((state) => state.modTitle);
   const textMod = useStore((state) => state.textMod);
   const [etat, setEtat] = useState({
      home: "active",
      about: "",
      service: "",
      portfolio: "",
      contact: "",
    });

   useEffect(() => {
      setElement([
         document.querySelector("#home"),
         document.querySelector("#about"),
         document.querySelector("#service"),
         document.querySelector("#portfolio"),
         document.querySelector("#contact"),
      ]);

      ScrollReveal({
         reset: true,
         distance: "100px",
         duration: 1000,
      });
      ScrollReveal().reveal(".textHome , .heading", { origin: "top" });
      ScrollReveal().reveal(".left ", { origin: "left" });
      ScrollReveal().reveal(".scrollBottom ", { origin: "bottom" });

      const typed = new Typed(".typetext", {
         strings: [
            "web and mobile Developper",
            "Electronic technician",
            "tiktoker",
         ],
         typeSpeed: 100,
         backSpeed: 100,
         backDelay: 1000,
         loop: true,
      });
   }, []);

   window.onscroll= ()=>{

         element.forEach(sec => {
             let top = window.scrollY;
             let offset = sec.offsetTop -150;
             let heigth = sec.offsetHeight;
             let id = sec.getAttribute('id');
     
             if(top >= offset && top < offset + heigth) {
               let resetEtat = {
                  home: "",
                  about: "",
                  service: "",
                  portfolio: "",
                  contact: "",
                }
               setEtat(()=>{
                  return {
                     ...resetEtat,
                     [id]:"active"
                  }
               })
             }
      
         });
     
  
        
     
     
   }
 


   return (
      <>
         <NavBar
            a1={etat.home}//home
            a2={etat.about}//about
            a3={etat.service}//service
            a4={etat.portfolio}//portfolio
            a5={etat.contact}//contact
         />
         <main
            className="ms-0 me-0 ps-0 pe-0 justify-content-center"
            style={{ width: "100wh" }}
         >
            <Modal title={modTitle} text={textMod} />
            <Home />
            <About />
            <Services />
            <PortFolio />
            <Contact />
         </main>
         <Footer />
      </>
   );
}

export default App;
