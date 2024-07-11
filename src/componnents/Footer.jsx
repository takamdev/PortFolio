function Footer() {
   return (
      <footer
         id="footer"
         className=" left pe-5 ps-5 d-flex flex-wrap justify-content-between align-items-center py-3 my-4"
      >
         <p className="col-md-4 mb-0 fw-bold">
            Copyright &copy; 2024 by Codehal | All Rights Reserved.
         </p>

         <a
            href="#"
            className="btn row-cols-1  ms-auto me-5 justify-content-en "
         >
            <i
               className="fa-solid fa-arrow-up"
               style={{ transform: "scale(1.5)" }}
            ></i>
         </a>
      </footer>
   );
}

export default Footer;
