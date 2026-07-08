import React, { useEffect, useState } from "react";
import team from "../assets/image/team.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      organization: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),

      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      organization: Yup.string().required("Organization is required"),

      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setUserMessage("");

      const formData = new FormData();

      formData.append(
        "access_key",
        "cdf6a07f-75df-4771-9507-f10ccb146bb1"
      );

      formData.append("name", values.fullName);
      formData.append("email", values.email);
      formData.append("organization", values.organization);
      formData.append("message", values.message);

      try {
        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (data.success) {
          setUserMessage("✅ Message sent successfully!");
          resetForm();
        } else {
          setUserMessage("❌ Failed to send message.");
        }
      } catch (error) {
        console.log(error);
        setUserMessage("❌ Something went wrong.");
      }

      setLoading(false);
    },
  });

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Contact Form */}

        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Contact Me
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-5">

            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none"
              />

              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-400 text-sm mt-1">
                  {formik.errors.fullName}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.organization}
                className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none"
              />

              {formik.touched.organization &&
                formik.errors.organization && (
                  <p className="text-red-400 text-sm mt-1">
                    {formik.errors.organization}
                  </p>
                )}
            </div>

            <div>
              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none"
              />

              {formik.touched.message &&
                formik.errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {formik.errors.message}
                  </p>
                )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {userMessage && (
              <p className="text-green-400 mt-4">{userMessage}</p>
            )}
          </form>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/adewale2910"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                size={38}
                className="text-white hover:text-blue-500"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/adeloye-olusegun-adewale-30845b24b"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                size={34}
                className="text-white hover:text-blue-500"
              />
            </a>

            <a
              href="https://twitter.com/Adewale2910"
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterXLine
                size={34}
                className="text-white hover:text-blue-500"
              />
            </a>

          </div>
        </div>

        {/* Image */}

        <div>
          <img
            src={team}
            alt="Contact"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;