import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
const schema = yup
   .object({
      fullName: yup.string().required("champ requis"),
      email: yup
         .string()
         .required("champ requis")
         .matches(
            /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
            "entrez une email valide"
         ),
      Number: yup
         .string()
         .required("champ requis")
         .matches(
            /^(\+\d{1,3}\s?)?(\d{9}|\d{2}[ .-]?\d{2}[ .-]?\d{2}[ .-]?\d{2})$/,
            "entrez un numero de telephone valide"
         ),
      Subject: yup.string().required("champ requis"),
      Message: yup
         .string()
         .required("champ requis")
         .max(500, "maximun 500 caractères")
         .min(50, "minimun 50 caratères"),
   })
   .required();

function Contact() {
   const [send, setSend] = useState(false);

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });
   const onSubmit = (data) => {
      setSend(true);
      var templateParams = {
         fullName: data.fullName,
         email: data.email,
         Number: data.Number,
         Subject: data.Subject,
         Message: data.Message,
      };

      emailjs
         .send(
            "service_tx0pahk",
            "template_jlez49n",
            templateParams,
            "ZM_hUk1I2FumtCzBZ"
         )
         .then(
            function (response) {
               setSend(false);
               toast.success(
                  "votre message a étés envoyer merci de m'avoir contacter",
                  {
                     style: {
                        backgroundColor: "#1f242a",
                        color: "#0ef",
                        fontWeight: "bold",
                        fontSize: "20px",
                        border: "none",
                        boxShadow: "0px 0px 5px 5px #0ef",
                     },
                  }
               );
               reset();
            },
            function (error) {
               console.log("FAILED...", error);
            }
         );
   };

   return (
      <>
         <section id="contact" className="pt-5">
            <p className="text-center heading">
               <span className="display-6 fw-bold">
                  Contact <span style={{ color: "#0EF" }}>Me</span>
               </span>
            </p>
            <div className="d-flex justify-content-center align-items-center">
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row col-sm-10 col-lg-8  justify-content-center servicebottom"
               >
                  <div className="mb-3 col-6">
                     <input
                        type="text"
                        className="form w-100"
                        placeholder="full name"
                        {...register("fullName")}
                     />
                     <p className="text-danger">{errors.fullName?.message}</p>
                  </div>
                  <div className="mb-3 col-6">
                     <input
                        type="text"
                        className="form w-100"
                        placeholder="Email Adress"
                        {...register("email")}
                     />
                     <p className="text-danger">{errors.email?.message}</p>
                  </div>
                  <div className="mb-3 col-6">
                     <input
                        type="text"
                        className="form w-100"
                        placeholder="Mobile Number"
                        {...register("Number")}
                     />
                     <p className="text-danger">{errors.Number?.message}</p>
                  </div>
                  <div className="mb-3 col-6">
                     <input
                        type="text"
                        className="form w-100"
                        placeholder="Subject"
                        {...register("Subject")}
                     />
                     <p className="text-danger">{errors.Subject?.message}</p>
                  </div>

                  <div className="mb-3 mt-2">
                     <textarea
                        placeholder="Your Message"
                        className="form w-100"
                        rows="3"
                        {...register("Message")}
                     ></textarea>
                     <p className="text-danger">{errors.Message?.message}</p>
                  </div>
                  <button
                     className={`btn border-0  download rounded-pill mt-3 mb-5 ${
                        send && "disabled"
                     }`}
                     type="submit"
                  >
                     {send ? (
                        <div
                           className="spinner-border fs-4 m-0 p-0 text-white"
                           role="status"
                        >
                           <span className="visually-hidden">Loading...</span>
                        </div>
                     ) : (
                        <span className="fw-bold">send message</span>
                     )}
                  </button>
               </form>
            </div>
         </section>
      </>
   );
}

export default Contact;
