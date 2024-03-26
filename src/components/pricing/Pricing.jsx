import React from "react";
import Back from "../common/Back";
import PriceCard from "../home/price/PriceCard";
import img from "../images/pricing.jpg";
import "../home/price/price.css";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
    >
      <section className="pricing mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img}
        />
        <div className="price container">
          <PriceCard />
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
