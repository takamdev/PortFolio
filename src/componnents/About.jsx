function About() {
   return (
      <section id="about" className="pt-2 pt-lg-0 container-fluid">
         <div className="row">
            <div className="col-sm-12 col-sm-6 col-lg-6 ps-5">
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
            <div className="col-sm-12 col-sm-6 col-lg-6 justify-content-center ">
               <img
                  src="/images/toff.png"
                  className=" w-100 h-75 ms-auto me-auto toff"
                  alt="image"
               />
            </div>
         </div>
      </section>
   );
}
export default About;
