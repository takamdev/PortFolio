function Home() {
   return (
      <section id="home" className="container-fluid">
         <div className="row">
            <div className="textHome col-sm-12 col-sm-6 col-lg-6  pt-5 ps-sm-0 ps-lg-5">
               <p className="left" style={{ textAlign: "justify" }}>
                  <span className="display-6 fw-bold">Hello it's Me</span>{" "}
                  <br />
                  <span className="display-5 fw-bolder left">
                     {" "}
                     Takam Loic Junior{" "}
                     <br />
                     And I'm A
                  </span>{" "} <br />
                  <span className="fw-bold typetext"></span>
               </p>
               <p className="mt-4">
               full-stack javaScript developer and electronic technician with a passion for innovate technologies , especially blockchain
               </p>
               <p className="icones">
                  <a href="">
                     <i className="fa-brands i fa-tiktok"></i>
                  </a>
                  <a href="">
                     <i className="fa-brands i fa-x-twitter"></i>
                  </a>
                  <a href="">
                     <i className="fa-brands i fa-instagram"></i>
                  </a>
                  <a href="">
                     <i className="fa-brands i fa-linkedin-in"></i>
                  </a>
                  <a href="">
                  <i className="fa-brands i fa-github"></i>
                  </a>
               
               </p>
               <a download={"cv"} href="/images/cv.png" className="btn mt-3 mb-3 fw-bold  rounded-pill download">
                  Download CV
               </a>
            </div>
            <div className="col-sm-12 col-sm-6 col-lg-6 justify-content-center ">
               <img src="/images/toff.png" className=" w-100 h-75 ms-auto me-auto toff"  alt="image" />
            </div>
         </div>
      </section>
   );
}

export default Home;
