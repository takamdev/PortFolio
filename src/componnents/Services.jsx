import React, { useId } from "react";

function Services() {
   return (
      <section id="service" className="pt-5">
         <p className="text-center mt-5 mb-5">
            <span className="display-5 fw-bold">
               Our <span style={{ color: "#0EF" }}>Services</span>
            </span>{" "}
         </p>
         <div className="row container ms-auto me-auto">
            <div className="card border-0 cardServive text-center mb-3 col-sm-12 col-md-6 col-lg-4 pe-4 ">
               <div className="card-body w-100 pt-5">
                  <p className="card-title fw-bold">
                     <span className="icone">
                        <i
                           className="fa-solid fa-code"
                           style={{ transform: "scale(2.5)" }}
                        ></i>
                     </span>{" "}
                     <br /> Web Developenment
                  </p>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquid commodi similique nemo? Distinctio, veritatis
                     dolores. Consequuntur deserunt enim corporis non maxime
                    
                  </p>
                  <a href="#" className="btn download rounded-pill">
                     Read More
                  </a>
               </div>
            </div>
            <div className="card border-0 cardServive text-center mb-3 col-sm-12 col-md-6 col-lg-4  ">
               <div className="card-body w-100 pt-5">
                  <p className="card-title fw-bold">
                     <span className="icone">
                        <i
                           className="fa-solid fa-paintbrush"
                           style={{ transform: "scale(2.5)" }}
                        ></i>
                     </span>{" "}
                     <br /> Graphic Disign
                  </p>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquid commodi similique nemo? Distinctio, veritatis
                     dolores. Consequuntur deserunt enim corporis non maxime
                    
                  </p>
                  <a href="#" className="btn download rounded-pill">
                     Read More
                  </a>
               </div>
            </div>
            <div className="card border-0 cardServive text-center mb-3 col-sm-12 col-md-6 col-lg-4  ">
               <div className="card-body w-100 pt-5">
                  <p className="card-title fw-bold">
                     {" "}
                     <span className="icone">
                        <i
                           className="fa-solid fa-signal"
                           style={{ transform: "scale(2.5)" }}
                        ></i>
                     </span>{" "}
                     <br /> Digital Marketing
                  </p>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquid commodi similique nemo? Distinctio, veritatis
                     dolores. Consequuntur deserunt enim corporis non maxime
                    
                     
                  </p>
                  <a href="#" className="btn download rounded-pill">
                     Read More
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Services;
