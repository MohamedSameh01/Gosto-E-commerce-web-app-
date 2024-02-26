import React from "react";
import Heading from "../../common/Heading";
import { price } from "../../assets/data/data";

const Price = () => {
    return (
        <>
            <section className="price">
                <Heading
                    title={ "Choose the Plans" }
                    desc={
                        "meet our newbies! the latest templates upload to the marketplace"
                    }
                />
                <div className="content">
                    { price.map((item,index) => {
                        return (
                            <div className="box" key={index}>
                                <h3>{ item.name }</h3>
                                <h1>
                                    <span> $ </span>
                                    { item.price }
                                    <label>/user per month</label>
                                </h1>
                                <p>{ item.desc }</p>
                                <button className="button">Get Started</button>
                                <ul>
                                    { item.list.map((lists,index) => (
                                        <li key={index}>
                                            <i>{ lists.icon }</i>
                                            <span>{ lists.para }</span>
                                        </li>
                                    )) }
                                </ul>
                            </div>
                        );
                    }) }
                </div>
            </section>
        </>
    );
};

export default Price;
