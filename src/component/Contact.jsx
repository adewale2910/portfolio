import React, { useEffect } from "react";
import team from "../assets/image/team.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import axios from "axios";
import Aos from "aos";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      organization: "",
      message: "",
    },

    onSubmit: (values, { resetForm }) => {
      axios
        .post(endpoint, values)
        .then((response) => {
          console.log(response.data.message);
          setUserMessage(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
      resetForm({ values: "" });
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("This field is required"),

      email: Yup.string()
        .required("This field is required")
        .email("You must enter an email address"),

      organization: Yup.string().required("This field is required"),

      message: Yup.string().required("This field is required"),
    }),
  });

  return (
    <div data-aos="flip-up" id="contact">
      <div id="href">
        <a href="https://github.com/adewale2910">
          <AiFillGithub className=" ms-10 text-white me-19" size={40} />
        </a>
        <a href="https://www.linkedin.com/in/adeloye-olusegun-adewale-30845b24b">
          <BsLinkedin className="mt-5 ms-10 text-white me-19" size={36} />
        </a>
        <a href="http://twitter.com/Adewale2910">
          <RiTwitterXLine className="ms-10 text-white mt-10" size={36} />
        </a>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="lg:mt-36 mt-10 lg:ms-28 ms-8">
          <div className="text-white">CONTACT ME</div>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="my-2 w-80 w-full rounded">
              <label className="text-white" htmlFor="">
                Fullname
              </label>{" "}
              <br />
              <input
                type="text"
                id="fullname"
                placeholder="Enter Your Fullname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.fullName && formik.errors.fullName
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.fullName}
                name="fullName"
              />
              <p>
                <small className="text-red-600 font-bold">
                  {formik.touched.fullName && formik.errors.fullName}
                </small>
              </p>
            </div>

            <div className="my-2 w-80 w-full rounded">
              <label className="text-white" htmlFor="">
                Email
              </label>{" "}
              <br />
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.email}
                name="email"
              />
              <p>
                <small className="text-red-600 font-bold">
                  {formik.touched.email && formik.errors.email}
                </small>
              </p>
            </div>

            <div className="my-2 w-80 w-full rounded">
              <label className="text-white" htmlFor="">
                Organization
              </label>{" "}
              <br />
              <input
                type="text"
                id="org"
                placeholder="Enter Your Organization"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.organization && formik.errors.organization
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.organization}
                name="organization"
              />
              <p>
                <small className="text-red-600 font-bold">
                  {formik.touched.organization && formik.errors.organization}
                </small>
              </p>
            </div>

            <div className="my-2 w-80 w-full rounded">
              <label className="text-white" htmlFor="">
                Message
              </label>{" "}
              <br />
              <textarea
                id="message"
                placeholder="Enter Your Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.message && formik.errors.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.message}
                name="message"
                cols="30"
                rows="5"
              ></textarea>
              <p>
                <small className="text-red-600 font-bold">
                  {formik.touched.message && formik.errors.message}
                </small>
              </p>
            </div>
            <button
              type="submit"
              className="text-white w-80 rounded font-bold bg-red-500 p-2"
            >
              Send Message
            </button>
            <div className="text-white font-bold lg:mt-5 mt-1"></div>
          </form>
        </div>

        <div>
          <img className="last" src={team} alt="" width={900} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
