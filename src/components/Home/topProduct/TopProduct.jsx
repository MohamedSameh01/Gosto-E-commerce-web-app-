/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { products } from "../../assets/data/data";
import Heading from "../../common/Heading";
import ProductItem from "../product/ProductItem";
const TopProduct = () => {
  const bestSelller = products.sort((a, b) => a.qty - b.qty).slice(0, 5);
  const [data, setData] = useState(bestSelller);
  const CategoriesData = ["All", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = useState(CategoriesData);
  const [selectedCat, setSelectedCat] = useState("All");
  console.log(selectedCat);
  useEffect(() => {
    if (selectedCat === "All") {
      setData(bestSelller);
    } else {
      const dataAfterFilter = bestSelller.filter(
        (item) => item.category === selectedCat
      );
      setData(dataAfterFilter);
      // console.log(data);
    }
  }, [selectedCat]);
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
            <div className="category ">

            {/* this if you wanna to change the select and make it a buttons */}
              {/* {categories.map((item,index) => {
                return (
                  <button key={index} onClick={() => hanldeFilter(item)} className="button">
                    {item}
                  </button>
                );
              })} */}
              
              <select
                className="w-48 b-0 outline-none"
                onChange={(e) => {
                  setSelectedCat(e.target.value);
                }}
              >
                {categories.map((item) => {
                  return (
                    <option className="p-[10]" value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default TopProduct;
