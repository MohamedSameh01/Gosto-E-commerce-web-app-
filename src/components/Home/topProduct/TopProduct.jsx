/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { products } from "../../assets/data/data";
import Heading from "../../common/Heading";
import ProductItem from "../product/ProductItem";
const TopProduct = () => {
  const bestSelller = products.sort((a, b) => a.qty - b.qty).slice(0, 5);
  const [data, setData] = useState(bestSelller);
  const CategoriesData = ["All", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = useState(CategoriesData);

  const hanldeFilter = (type) => {
    if (type === "All") {
      setData(bestSelller);
    } else {
      const dataAfterFilter =bestSelller
        .filter((item) => item.category === type);
      setData(dataAfterFilter);
      // console.log(data);
    }
  };
  return (
    <>
      <section className="topproduct">
        <div className="container">
          <div className="head">
            <Heading
              title={"Top Selling Products"}
              desc={
                "meet our newbies! the latest templates upload to the marketplace "
              }
            />
            <div className="category">
              {categories.map((item,index) => {
                return (
                  <button key={index} onClick={() => hanldeFilter(item)} className="button">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default TopProduct;
