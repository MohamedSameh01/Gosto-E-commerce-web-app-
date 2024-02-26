/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data.js"
import SearchItem from './SearchItem.jsx';
const Hero = () => {
    const [searchTerm, setSearchTerm] = useState("");   
   
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <h1>
                        <label>
                            over <span>6,500</span>Cutrated Design
                        </label>
                        <br />
                        <label>
                            Resources ,<span>Graphic &Website</span> Tempelates
                        </label>
                    </h1>
                    <p>Heigh Quality Design Themes For Personal or Comerical Use Contain 6K+ items in 100 Categories</p>
                    <div className="search ">
                        <span>All Categories</span>
                        <hr />
                        <input type='text' placeholder='Search Products ....' value={ searchTerm } onChange={ (e) => setSearchTerm(e.target.value) } />
                        <button>
                            <BiSearch className="searchIcon heIcon" />
                        </button>
                    </div>
                    <SearchItem  value={ searchTerm } />
                    <p>Examples: Mokup, PSD, Theme Design, Images...</p>
                </div>

            </section>
        </>
    )
}

export default Hero