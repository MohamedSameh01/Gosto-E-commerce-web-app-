/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Heading from '../../common/Heading'
import ProductItem from './ProductItem'
import {products} from "../../assets/data/data.js"
import "../../../style/main.scss"
const Product = () => {
    const [data,setData]=useState(products)
    return (
        <>
            <section>
                <div className='product container' id='shop'>
                    <Heading title={ "Trending Products" } desc={ "Check the hottest designs of the week. These rising stars are worth your attention." } />

                    <ProductItem data={data}/>
                </div>

            </section>
        </>
    )
}

export default Product