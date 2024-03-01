/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../Redux/slices/cartSlice";
import { addFav } from "../../../Redux/slices/favSlice";
import { motion } from "framer-motion";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const [openImage, setOpenImage] = useState(false);
  const { cart,fav } = useSelector(state => state)
  const [image, setImage] = useState("");

  const onOpenImage = (src) => {
    setOpenImage(true);
    setImage(src);
  };
  // console.log("cart", cart)
  console.log("fav", fav)

  return (
    <>
      <div className="product_items">
        { data.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="item.title" />
                  <div className="overlay">
                    <button
                      className="button"
                      onClick={() => dispatch(addItem(item))}
                    >
                      <FiShoppingBag />
                    </button>
                    <button
                      className="button"
                      onClick={() => dispatch(addFav(item))}
                    >
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
                  <h3>{item.price} $</h3>
                </div>
              </div>
            </motion.div>
          );
        }) }
      </div>
      <div className={ openImage ? "modelOpen" : "modelClose" }>
        <div className="onClickImage">
          <img src={ image } alt="" />
          <button className="button" onClick={ () => setOpenImage(false) }>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
