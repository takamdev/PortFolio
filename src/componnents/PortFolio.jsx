import React, { useId } from "react";
import { useNavigate } from "react-router-dom";

function PortFolio() {

   const ReDirection=(url)=>{
      window.location.href = url
   }

   return (
      <section id="portfolio" >
         <p className="text-center heading pt-5">
            <span className="display-5 fw-bold">
               Lastet <span style={{ color: "#0EF" }}>Projet</span>
            </span>{" "}
         </p>
        <div className="row container ms-auto me-auto">
            <div className="card border-0 scrollBottom cardServive text-center mt-4 p-0 mb-3 col-sm-12 col-md-6 col-lg-4  ">
                <img id="image" onClick={()=>{ReDirection('https://africa-space-react-httc.netlify.app/')}} role="button" className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio1.jpg" alt="image" />
                <div className="w-100 h-100 text-white servicebottom">
                       <p className="display-6 fw-bold">Gallery Artistique</p>
                       <p className="fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptate!</p>
                        <a className="text-secondary fs-5" href="https://africa-space-react-httc.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card border-0 scrollBottom cardServive text-center mt-4 p-0 mb-3 col-sm-12 col-md-6 col-lg-4 ">
               <img onClick={()=>{ReDirection('https://e-learningdev.netlify.app')}} role="button" className="m-0 p-0 w-100 h-100 image" style={{borderRadius:"20px"}} src="/images/portfolio2.jpg" alt="image" />
               <div className="w-100 h-100 text-white servicebottom">
                       <p className="display-6 fw-bold">E-Learning site</p>
                       <p className="fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptate!</p>
                        <a className="text-secondary fs-5" href="https://e-learningdev.netlify.app"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0  ">
                <img id="image" onClick={()=>{ReDirection('https://africa-space-react-httc.netlify.app/')}} role="button" className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio3.jpg" alt="image" />
                <div className="w-100 h-100 servicebottom"></div>
            </div>
            <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0  ">
                <img id="image" onClick={()=>{ReDirection('https://africa-space-react-httc.netlify.app/')}} role="button" className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio4.jpg" alt="image" />
                <div className="w-100 h-100 servicebottom"></div>
              </div>
              <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0 ">
                <img id="image" onClick={()=>{ReDirection('https://africa-space-react-httc.netlify.app/')}} role="button" className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio5.jpg" alt="image" />
                <div className="w-100 h-100 servicebottom"></div>
              </div>
              <div className="card border-0 scrollBottom cardServive text-center mt-4 mb-3 col-sm-12 col-md-6 col-lg-4 p-0 ">
                <img id="image" onClick={()=>{ReDirection('https://africa-space-react-httc.netlify.app/')}} role="button" className="m-0 p-0 w-100 h-100 " style={{borderRadius:"20px"}} src="/images/portfolio6.jpg" alt="image" />
                <div className="w-100 h-100 servicebottom"></div>
              </div>
         </div>
         
      </section>
   );
}

export default PortFolio;
