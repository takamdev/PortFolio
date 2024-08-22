function About() {
   return (
      <section id="about" className="pt-lg-0 mt-5 pt-5 container-fluid">
         <div className="row flex-lg-row-reverse">
            <div className="col-sm-12 mt-md-0 mt-sm-0 pt-sm-0 pt-md-0 mt-lg-5 pt-lg-5 col-sm-6 col-lg-6 ps-5">
               <p className="heading" style={{ textAlign: "justify" }}>
                  <span className="display-6 fw-bold">
                     About <span style={{ color: "#0EF" }}>Me</span>
                  </span>{" "}
               </p>
               <div className="mt-4  left">
                  <p>
                     <span
                        className="pb-5 fs-4 fw-bold"
                        style={{ color: "#0EF" }}
                     >
                        versatility
                     </span>{" "}
                     <br />
                     Through my professional experiences I have been able to
                     demonstrate my{" "}
                     <span style={{ color: "#0EF" }}>versatility</span>. In
                     fact, I like to explore different areas and always keep
                     learning. I want to make myself useful while exploring new
                     opportunities and diversifying my knowledge, particularly
                     in blockchain technology and artificial intelligence.
                  </p>
                  <p>
                     <span
                        className="pb-5 fs-4 fw-bold"
                        style={{ color: "#0EF" }}
                     >
                        Persevering
                     </span>{" "}
                     <br />
                     <span style={{ color: "#0EF" }}>
                        My professional reconversion
                     </span>{" "}
                     in programming has not been easy. the search for suitable
                     training and perseverance in my learning. these
                     difficulties have in no way diminished my motivation and I
                     intend to <span style={{ color: "#0EF" }}>persevere</span>{" "}
                     in this field!
                  </p>
               </div>
            </div>
            <div className="col-sm-12 col-sm-6 img-containter col-lg-6 justify-content-center ">
               <img
                  src="/images/toff1.png"
                  className=" w-100 h-75 heading ms-auto me-auto"
                  alt="image"
               />
            </div>
         </div>
      </section>
   );
}
export default About;
