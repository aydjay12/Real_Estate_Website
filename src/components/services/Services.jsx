import React from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
    >
      <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={img} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
