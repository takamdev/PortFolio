function Home() {
   return (
      <section id="home" className="container-fluid">
         <div className="row">
            <div className="textHome col-sm-12 col-sm-6 col-lg-6  ps-sm-0 ps-lg-5">
               <p className="left" style={{ textAlign: "justify" }}>
                  <span className="display-6 fw-bold">Hello it's Me</span>{" "}
                  <br />
                  <span className="display-5 fw-bolder left">
                     {" "}
                     Takam Loic Junior <br />
                     And I'm A
                  </span>{" "}
                  <br />
                  <span className="fw-bold typetext"></span>
               </p>
               <p className="">
                  An electrical technician for over 2 years, I'm passionate
                  about innovative technologies ranging from web2 with standard
                  web applications to web3 with decentralised applications and
                  intelligent contracts thanks to blockchain. I'm currently
                  training in web and mobile development with the HITECH
                  training organisation in Douala, Cameroon. Highly motivated to
                  continue, I'm looking for a job as a web developer (full-stack
                  Javascript) or mobile developer (react native) to gain
                  experience.
               </p>
               <p className="icones">
                  <a href="https://www.tiktok.com/@juniordev3?_t=8mVGOsYQfj6&_r=1">
                     <i className="fa-brands i fa-tiktok"></i>
                  </a>
                  <a href="https://x.com/Takamloicjunior?s=09">
                     <i className="fa-brands i fa-x-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/loic-junior-takam-2b12822a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                     <i className="fa-brands i fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/takamdev">
                     <i className="fa-brands i fa-github"></i>
                  </a>
               </p>
               <a
                  download={"cv"}
                  href="/images/cv.pdf"
                  className="btn mt-3 mb-3 fw-bold  rounded-pill download"
               >
                  Download CV
               </a>
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

export default Home;
