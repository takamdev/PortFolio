

function PortFolio() {

   const ReDirection=(url)=>{
      window.location.href = url
   }

   return (
      <section id="portfolio" >
         <p className="text-center heading pt-5">
            <span className="display-5 fw-bold">
               personnal <span style={{ color: "#0EF" }}>Projet</span>
            </span>{" "}
         </p>
        <div className="row container ms-auto me-auto">
            <div className="card border-0 scrollBottom cardServive text-center mt-4 p-0 mb-3 col-sm-12 col-md-6 col-lg-4  ">
                <img id="image" onClick={()=>{ReDirection('https://github.com/takamdev/AfricaSpace-react')}} role="button" className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio1.jpg" alt="image" />
                <div className="w-100 h-100 text-white servicebottom">
                       <p className="fs-1 fw-bold">Art gallery</p>
                       <p className="fs-4">Art gallery for AfricaSpace for viewing and selling African artworks</p>
                       <p className="hstack"> 
                       <a className="text-secondary fs-5" href="https://africa-space-react-httc.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                       <a className="text-secondary fs-5 ms-auto" href="https://github.com/takamdev/AfricaSpace-react"><i className="fa-brands i fa-github"></i></a>
                       </p>
                </div>
            </div>
            <div className="card border-0 scrollBottom cardServive text-center mt-4 p-0 mb-3 col-sm-12 col-md-6 col-lg-4 ">
               <img  className="m-0 p-0 w-100 h-100 image" style={{borderRadius:"20px"}} src="/images/portfolio2.png" alt="image" />
               <div className="w-100 h-100 text-white servicebottom">
                       <p className="fs-1 fw-bold">E-Learning site</p>
                       <p className="fs-4">A site for learning a number of IT professions particularly programming</p>
                       <p className="hstack">
                       <a className="text-secondary fs-5" href="https://e-learningdev.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                       <a className="text-secondary fs-5 ms-auto" href="https://github.com/takamdev/CoursEnLigne"><i className="fa-brands i fa-github"></i></a>
                       </p>
                </div>
            </div>
            <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0  ">
                <img id="image"   className="m-0 p-0 w-100 h-100 object-fit-fill" style={{borderRadius:"20px"}} src="/images/portfolio3.png" alt="image" />
                <div className="w-100 h-100 text-white servicebottom">
                       <p className="fs-1 fw-bold">API restFull</p>
                       <p className="fs-4">Backend for an online restaurant website</p>
                      <p className="hstack">
                       <a className="text-secondary fs-5" href="https://github.com/takamdev/BackendRestaurant"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                       <a className="text-secondary fs-5 ms-auto" href="https://github.com/takamdev/CoursEnLigne"><i className="fa-brands i fa-github"></i></a>
                      </p>
                </div>
            </div>
            <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0  ">
                <img id="image"   className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio4.png" alt="image" />
                <div className="w-100 h-100 text-white servicebottom">
                <p className="fs-1 fw-bold">CallMeBot API</p>
                       <p className="fs-4">small WhatsApp message automation project using the CallMeBot API</p>
                       <a className="text-secondary fs-5"  href="https://github.com/takamdev/tAPI_Whatsapp"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>

                </div>
             
              <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0 ">
                <img id="image"   className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio5.jpg" alt="image" />
                <div className="w-100 h-100  text-white servicebottom"></div>
              </div>
              <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0 ">
                <img id="image"   className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio6.jpg" alt="image" />
                <div className="w-100 h-100 text-white servicebottom"></div>
              </div>
         </div>
         
      </section>
   );
}

export default PortFolio;
