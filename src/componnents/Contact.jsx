import React, { useId } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
   fullName: yup.string().required("ce champ est requis"),
   email: yup.string().required("ce champ est requis").matches(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,"entrez une email valide"),
   Number: yup.string().required("ce champ est oubligattoire").matches(/^(\+\d{1,3}\s?)?0[1-9]([ .-]?[0-9]{2}){4}$/,"entrez un numero de telephone valide"),
   Subject: yup.string().required("ce champ est requis").matches(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,"entrez une email valide"),
   Message: yup.string().required("ce champ est requis").max(500 ,"maximun 500 caractères").min(50 , "minimun 50 caratères")
    
  })
  .required()

function Contact() {

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)
  

   return (
      <section
         id="contact"
         className="d-flex justify-content-center align-items-center"
      >
         <form onSubmit={handleSubmit(onSubmit)} className="row col-sm-10 col-lg-8  justify-content-center">
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
                  type="email"
                  className="form w-100"
                  placeholder="Email Adress"
                  {...register("email")}
               />
                 <p className="text-danger">{errors.email?.message}</p>
            </div>
            <div className="mb-3 col-6">
               <input
                  type="email"
                  className="form w-100"
                  placeholder="Mobile Number"
                  {...register("Number")}
               />
                <p className="text-danger">{errors.Number?.message}</p>
            </div>
            <div className="mb-3 col-6">
               <input
                  type="email"
                  className="form w-100"
                  placeholder="Email Subject"
                  {...register("Subject")}
               />
                <p className="text-danger">{errors.Subject?.message}</p>
            </div>

            <div className="mb-3 mt-2">
               <textarea placeholder="Your Message" className="form w-100" rows="3"  {...register("Message")}></textarea>
               <p className="text-danger">{errors.Message?.message}</p>
            </div>
            <button
               className="btn  download rounded-pill mt-3 mb-5"
               type="submit"
            >
               Send Message
            </button>
         </form>
      </section>
   );
}

export default Contact;
