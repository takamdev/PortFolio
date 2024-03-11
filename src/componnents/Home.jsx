function Home() {
   return (
      <section id="home" className="container-fluid mt-3">
         <div className="row">
            <div className="col-sm-12 col-sm-6 col-lg-6  pt-5 ps-5">
               <p style={{ textAlign: "justify" }}>
                  <span className="display-6 fw-bold">Hello it's Me</span>{" "}
                  <br />
                  <span className="display-5 fw-bolder">
                     {" "}
                     Takam Loic Junior
                  </span>{" "}
                  <br />
                  <span className="fs-3 fw-bold">And I'm a</span>
               </p>
               <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus quasi qui harum aliquid autem magnam nemo asperiores
                  nostrum facere et?
               </p>
               <p className="icones">
                  <a href="">
                     <i className="fa-brands i fa-facebook-f"></i>
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
               </p>
               <a download={"cv"} href="/images/cv.JPG" className="btn mt-3 mb-3 fw-bold  rounded-pill download">
                  Download CV
               </a>
            </div>
            <div className="col-sm-12 col-sm-6 col-lg-6">
               <img src="/images/profil.JPG" className="w-100" height={500} alt="image" />
            </div>
         </div>
      </section>
   );
}

export default Home;
