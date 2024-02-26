/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from '../../../Redux/slices/cartSlice';
import { useParams } from 'react-router-dom';

const Details = () => {
    const dispatch=useDispatch();
    const [oldData,setOldData]=useState({});
    const { cart } = useSelector((state) => state);
    const {id}=useParams();

    useEffect(()=>{
        const oData=cart.cart.find(item=>item.id===parseInt(id));
        setOldData(oData)
    },[id,cart.cart])

    const [quantity, setQuantity] = useState(oldData?.amount);
    useEffect(()=>{
        setQuantity(oldData?.amount)
    },[oldData])

    return (
      <>
        <article>
          <section className="details">
            <h2 className="details_title">Product Details Pages</h2>

            {oldData ? (
              <div className="details_content">
                <div className="details_content_img">
                  <img src={oldData?.cover} alt="" />
                </div>
                <div className="details_content_detail">
                  <h1>{oldData?.title}</h1>
                  <div className="rating">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <label htmlFor="">(1 customer review)</label>
                  </div>
                  <h3> ${oldData?.price * oldData?.amount}</h3>
                  <p>{oldData?.author}</p>
                  <div className="qty">
                    <div className="count">
                      <button onClick={() => dispatch(addItem(oldData))}>
                        <AiOutlinePlus />
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => dispatch(removeItem(oldData))}>
                        <AiOutlineMinus />
                      </button>
                    </div>
                    <button className="button">Add To Cart</button>
                  </div>
                  <div className="desc">
                    <h4>PRODUCTS DESCRIPTION</h4>
                    <p>
                      Designed by Puik in 1949 as one of the first models
                      created especially for Carl Hansen & Son, and produced
                      since 1950. The last of a series of chairs wegner designed
                      based on inspiration from antique chinese armchairs.
                    </p>
                    <h4> PRODUCT DETAILS</h4>
                    <ul>
                      <li>
                        <p> Material: Plastic, Wood</p>
                      </li>
                      <li>
                        <p>Legs: Lacquered oak and black painted oak</p>
                      </li>
                      <li>
                        <p>
                          Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg
                        </p>
                      </li>
                      <li>
                        <p>Length: 48cm</p>
                      </li>
                      <li>
                        <p>Depth: 52 cm</p>
                      </li>
                      <li>
                        <p>Seat Height: 44 cm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ):<>
              <h1 className='text-center'>there is no item for details... </h1>
            </>}
          </section>
        </article>
      </>
    );
}

export default Details