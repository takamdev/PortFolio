

function About() {
   return (
      <section id="about" className="pt-2 pt-lg-0 container-fluid">
         <div className="row">
           
            <div className="col-sm-12 col-sm-6 col-lg-6 ps-5">
               <p className="heading"  style={{ textAlign: "justify" }}>
                  <span className="display-6 fw-bold">
                     About <span style={{ color: "#0EF" }}>Me</span>
                  </span>{" "}
                  <br />
                  <span className=" display-6 fw-bolder">
                     {" "}
                     Full-Stack Developper!
                  </span>{" "}
               </p>
               <p className="mt-4 fs-5 left">
                  Full-Stack JavaScript developer with three years experience in web development
                  and a solid background in electronics.Passionate about innovate technologies ,i'm currently
                  training in blockchain to broaden my skills and explore new opportunities.
               </p>

               <a
                  href="/"
                  className="btn mt-3 mb-3 fw-bold  rounded-pill download left"
               >
                  Read More
               </a>
            </div>
            <div className="col-sm-12 col-sm-6 col-lg-6 justify-content-center ">
               <img src="/images/toff.png" className=" w-100 h-75 ms-auto me-auto toff"  alt="image" />
            </div>
         </div>
      </section>
   );
}
export default About;
