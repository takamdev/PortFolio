import { useStore } from "../App.jsx";
import { FcElectronics } from "react-icons/fc";
function Services() {
   const updateTitle = useStore((state) => state.updateTitle);
   const updateText = useStore((state) => state.updateText);

   const webModal = () => {
      updateTitle("web development");
      const message = `

      Create reusable and dynamic components
       using React.JS or next.JS Set up RESTfull
        servers with Node.js and Express.js Manage
         MongoDB databases Collaborate with multidisciplinary
          teams to complete projects using
           tools such as git and github.



      `;
      updateText(message);
   };

   const BlockchainModal = () => {
      updateTitle("Blockchain technologie <<Ongoing training>>");
      const message = `
      Creation and deployment of EVM-compatible
      smart contracts using the solidity programming language and frameworks
      such as hardhat or truffle
      `;
      updateText(message);
   };

   const electronicModal = () => {
      updateTitle("Electronic");
      const message = `
      Electronics Technician 2022 start 2024 Design and repair of electronic circuits.
      Preventive and corrective maintenance of electronic equipment.
      Diagnosis and resolution of technical faults.
      `;
      updateText(message);
   };

   return (
      <section id="service" className="pt-5">
         <p className="text-center heading mt-5 mb-5">
            <span className="display-5 fw-bold">
               Our <span style={{ color: "#0EF" }}>Skills</span>
            </span>{" "}
         </p>
         <div className="row  ms-auto me-auto">
            <div className="border-0 scrollBottom cardServive mb-3 col-sm-12 col-md-6 col-lg-4 ">
               <p className="fw-bold text-center ">
                  <span className="icone pb-1">
                     <i
                        className="fa-solid fa-code "
                        style={{ transform: "scale(4)" }}
                     ></i>
                  </span>{" "}
                  <br /> <br /> <span className="fs-3">Web Developenment</span>
               </p>
               <ul className="fs-6">
                  <li>Languages : JavaScript (ES6+) ,TypeScript</li>
                  <li> HTML5 , CSS3 ( SASS )</li>
                  <li>Frameworks & Libraries : ReactJS , nextJS,</li>
                  <li>node.JS,express.js</li>
                  <li>Databases : mongoDB</li>
                  <li>outils & environments : git , docker ,agile</li>
               </ul>

               <button
                  onClick={webModal}
                  data-bs-toggle="modal"
                  data-bs-target="#ModalExample"
                  className="btn download rounded-pill mt-2"
               >
                    See More
               </button>
            </div>
            <div className="border-0 scrollBottom  cardServive  mb-3 col-sm-12 col-md-6 col-lg-4  ">
               <p className="fw-bold text-center mb-4">
                  <span className="icone pb-1">
                     <i
                        className="fa-brands fa-hive "
                        style={{ transform: "scale(4)" }}
                     ></i>
                  </span>{" "}
                  <br /> <br />{" "}
                  <span className="fs-3">Blockchain technologies</span>
               </p>
               <ul className=" fs-6">
                  <li>Conceps:Smart Contract,Decentralization</li>
                  <li>Tools: Solidity, Ethereum , truffle ,Hardhat</li>
                  <li>Libraries: web3.js,ether.js</li>
               </ul>

               <button
                  onClick={BlockchainModal}
                  data-bs-toggle="modal"
                  data-bs-target="#ModalExample"
                  className="btn download rounded-pill mt-5"
               >
                  See More
               </button>
            </div>
            <div className=" border-0 scrollBottom cardServive  mb-3 mt-md-4 mt-lg-0 mt-sm-0 col-sm-12 col-md-12 col-lg-4 ">
               <p className=" fw-bold text-center mb-4">
                  {" "}
                  <span className="icone pb-1">
                     <FcElectronics style={{ transform: "scale(4)" }} />
                  </span>{" "}
                  <br /> <br /> <span className="fs-3">Electronics</span>
               </p>
               <ul className=" fs-6">
                  <li>Technical Skills : Circuit design ,</li>
                  <li>Maintenance and repair</li>
                  <li>Tools: Multimeters,Oscilloscope,CAD soltware</li>
               </ul>

               <button
                  onClick={electronicModal}
                  data-bs-toggle="modal"
                  data-bs-target="#ModalExample"
                  className="btn download rounded-pill mt-5"
               >
                   See More
               </button>
            </div>
         </div>
      </section>
   );
}

export default Services;
