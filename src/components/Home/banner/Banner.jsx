import React from "react";
import { banner } from "../../assets/data/data";
const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="posts">
          {banner.map((item) => {
            return (
              <div key={item.id} className="post">
                <div className="content">
                  <div className="img">
                    <img
                      className="w-full h-[300px] rounded-lg object-cover"
                      src={item.cover}
                      alt={item.title1}
                    />
                  </div>
                  <div className="text">
                    <h2>{item.title1}</h2>
                    <h2>{item.title2}</h2>
                    <p>{item.desc}</p>
                    <button className="button">SHOP NOW</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Banner;
