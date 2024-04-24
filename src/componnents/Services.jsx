import React, { useId } from "react";

function Services() {
   return (
      <section id="service" className="pt-5">
         <p className="text-center heading mt-5 mb-5">
            <span className="display-5 fw-bold">
               Our <span style={{ color: "#0EF" }}>Services</span>
            </span>{" "}
         </p>
         <div className="row  ms-auto me-auto">
            <div className="border-0 scrollBottom cardServive text-center mb-3 col-sm-12 col-md-6 col-lg-4 ">
             
                  <p  className="fw-bold">
                     <span className="icone pb-1">
                        <i
                           className="fa-solid fa-code "
                           style={{ transform: "scale(4)" }}
                        ></i>
                     </span>{" "}
                     <br /> <br /> <span className="fs-2">Web Developenment</span>
                  </p>
                  <p  className=" text-center fs-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquid commodi similique nemo? Distinctio, veritatis
                     dolores. Consequuntur deserunt enim corporis non maxime
                  </p>
                  <a href="#" className="btn download rounded-pill">
                     Read More
                  </a>
               
            </div>
            <div className=" border-0 scrollBottom  cardServive text-center mb-3 col-sm-12 col-md-6 col-lg-4  ">
              
                  <p className="fw-bold">
                     <span className="icone pb-1">
                        <i
                           className="fa-solid fa-paintbrush"
                           style={{ transform: "scale(4)" }}
                        ></i>
                     </span>{" "}
                     <br /> <br /> <span className="fs-2">Graphic Disign</span>
                  </p>
                  <p className="text-center fs-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquid commodi similique nemo? Distinctio, veritatis
                     dolores. Consequuntur deserunt enim corporis non maxime
                  </p>
                  <a href="#" className="btn download rounded-pill">
                     Read More
                  </a>
              
            </div>
            <div className=" border-0 scrollBottom cardServive text-center mb-3 mt-md-4 mt-lg-0 mt-sm-0 col-sm-12 col-md-12 col-lg-4 ">
               
                  <p className=" fw-bold">
                     {" "}
                     <span className="icone pb-1">
                        <i
                           className="fa-solid fa-signal"
                           style={{ transform: "scale(4)" }}
                        ></i>
                     </span>{" "}
                     <br /> <br /> <span className="fs-2">Digital Marketing</span>
                  </p>
                  <p className="text-center fs-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquid commodi similique nemo? Distinctio, veritatis
                     dolores. Consequuntur deserunt enim corporis non maxime
                  </p>
                  <a href="#" className="btn download rounded-pill">
                     Read More
                  </a>
              
            </div>
         </div>
      </section>
   );
}

export default Services;
