import React from "react";
import { hero } from "../../assets/data/data";
import { motion } from "framer-motion";

const Card = () => {
  // console.log(hero)
  return (
    <>
      <section>
        <div className="cards container">
          {hero.map((item) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="card" key={item.id}>
                  <div className="left">
                    <img src={item.cover} alt={item.name} />
                  </div>
                  <div className="right">
                    <h4>{item.name}</h4>
                    <p>
                      {item.items}
                      {item.items === "1" ? "  item" : "  items"}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Card;
