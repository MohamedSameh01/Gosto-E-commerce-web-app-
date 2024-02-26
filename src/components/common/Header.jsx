import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import cartimg from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { navlist } from "../assets/data/data";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../Redux/slices/cartSlice";
import {addFav} from "../../Redux/slices/favSlice"
const Header = () => {
  // console.log(navlist)
  const [mobile, setMobile] = useState(false);
  const [cartList, setCartList] = useState(false);
  const { cart,fav } = useSelector((state) => state);
  const dispatch=useDispatch();
  console.log(fav);
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="container w-90 mx-auto bg-">
          <nav>
            <div className="toggle ">
              <button onClick={ () => setMobile(!mobile) }>
                { mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                ) }
              </button>
            </div>
            <div className="left">
              <Link to="./">
                <img src={ logo } alt="logo" />
              </Link>
            </div>
            <div className="center">
              <ul className={ mobile ? "mobile-nav" : "menu" }>
                { navlist.map((nav, index) => {
                  return (
                    <li key={ index }>
                      <Link to={ nav.path }>{ nav.text }</Link>
                    </li>
                  );
                }) }
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder="Search Products ..." />
              <BiSearch className="searchIcon heIcon" />
            </div>
            <div className="right_user">
              <RiUser3Line className="userIcon heIcon cursor-pointer" />
              <AiOutlineHeart className="userIcon heIcon cursor-pointer" />
            </div>
            <div className="right_card">
              <button className="button" onClick={ () => setCartList(!cartList) }>
                <BsBagCheck className="shop heIcon" />
                My Cart ({ cart.totalAmount })
              </button>
              <div className={ cartList ? "showCart" : "hideCart" }>
                { cart.totalAmount > 0 ? (
                  <section className="details">
                    { cart.cart.map((item) => {
                      return (
                        <div key={item.id} className="details_content">
                          <div className="details_content_img">
                            <Link
                              to={`/cart/${item.id}`}
                              onClick={() => setCartList(false)}
                            >
                              <img
                                src={item.cover}
                                alt={item.title.slice(0, 10)}
                              />
                            </Link>
                          </div>
                          <div className="details_content_detail">
                            <div className="details_content_detail_price">
                              <p>{item.title.slice(0, 20)}...</p>
                              <p>Price : ${item.price}</p>
                              <p>Quantity : {item.amount}</p>
                            </div>
                          </div>
                          <div className="details_content_detail_icon">
                            <i onClick={() => dispatch(deleteItem(item))}>
                              <AiOutlineDelete />
                            </i>
                          </div>
                        </div>
                      );
                    }) }
                    <div className='details_total'>
                      <h4>Total : ${ cart.totalPrice }</h4>
                    </div>
                  </section>
                ) : (
                  <div className="empty">
                    <p>Your Cart is empty</p>
                    <img src={cartimg} alt="cart img"/>
                  </div>
                ) }
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
