import { useId } from "react";

function About() {
   return (
      <section id="about" className="mt-5">
         <div className="row">
            <div className="col-sm-12 col-sm-6 col-lg-6">
               <img
                  src="/images/profil.JPG"
                  className="w-100"
                  height={500}
                  alt="image"
               />
            </div>
            <div className="col-sm-12 col-sm-6 col-lg-6  pt-5 ps-5">
               <p style={{ textAlign: "justify" }}>
                  <span className="display-6 fw-bold">
                     About <span style={{ color: "#0EF" }}>Me</span>
                  </span>{" "}
                  <br />
                  <span className="display-5 fw-bolder">
                     {" "}
                     Front End Developper!
                  </span>{" "}
               </p>
               <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus quasi qui harum aliquid autem magnam nemo asperiores
                  nostrum facere et? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eligendi, beatae repellendus. Quibusdam
                  mollitia hic sunt vitae ducimus optio distinctio autem. Minus,
                  excepturi beatae! Beatae, alias facilis tenetur autem totam
                  fuga?
               </p>

               <a
                  href="/"
                  className="btn mt-3 mb-3 fw-bold  rounded-pill download"
               >
                  Read More
               </a>
            </div>
         </div>
      </section>
   );
}

export default About;
