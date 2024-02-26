import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { products } from "../../assets/data/data";
const SearchItem = ({ value }) => {
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState("");
  const onOpenImage = (src) => {
    setOpenImage(true);
    setImage(src);
  };
  const [generatedData, setGeneratedData] = useState([]);
  useEffect(() => {
    if (value !== "") {
      setGeneratedData(
        products.filter(
          (item) => item.title.includes(value) || item.category.includes(value)
        )
      );
    } else {
      setGeneratedData([]);
    }
  }, [value]);
  // console.log("generatedData", generatedData);
  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {generatedData.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="item.title" />
                  <div className="overlay">
                    <button className="button">
                      <FiShoppingBag />
                    </button>
                    <button className="button">
                      <AiOutlineHeart />
                    </button>
                    <button className="button">
                      <FiSearch onClick={() => onOpenImage(item.cover)} />
                    </button>
                  </div>
                </div>
                <div className="details">
                  <h3>{item.title}</h3>
                  <h3>{item.author}</h3>
                  <h3>{item.price}:$</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className={openImage ? "modelOpen" : "modelClose"}>
          <div className="onClickImage">
            <img src={image} alt="" />
            <button className="button" onClick={() => setOpenImage(false)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchItem;
