import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <h1 className="lg:ms-32 ms-10 text-white lg:text-3xl text-3xl">
        ABOUT ME
      </h1>

      <p className="lg:ms-32 ms-10 text-white lg:text-5xl text-3xl font-bold mt-2">
        Overview
      </p>

      <motion.div
        className="lg:ms-32 ms-5 mt-8 max-w-5xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.span
          className="font-semibold text-cyan-400 block mb-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          animate={{
            textShadow: [
              "0 0 5px rgba(34,211,238,0.3)",
              "0 0 18px rgba(34,211,238,1)",
              "0 0 5px rgba(34,211,238,0.3)",
            ],
          }}
        >
          Frontend Developer • Graphic Designer • Photographer • Videographer
        </motion.span>

        <motion.p
          className="text-white leading-8 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          With <span className="font-semibold">3+ years of experience</span>, I
          build responsive web applications, engaging digital interfaces, and
          impactful visual identities. I specialize in{" "}
          <span className="font-semibold">
            React, JavaScript, HTML, CSS, and Tailwind CSS
          </span>
          , creating scalable, user-friendly, and high-performance web
          solutions. Alongside development, I produce professional photography,
          videography, branding, and marketing content, with experience
          delivering digital solutions for the real estate industry. I enjoy
          turning ideas into modern, creative, and user-focused experiences that
          make a lasting impact.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;