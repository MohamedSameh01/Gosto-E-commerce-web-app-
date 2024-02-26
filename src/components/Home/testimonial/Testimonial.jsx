import React from 'react'
import Heading from '../../common/Heading'
import { customer } from '../../assets/data/data'
import { ImQuotesRight } from "react-icons/im"

const Testimonial = () => {
    return (
        <>
            <section className='customer'>
                <Heading title={ "Choose the Plans" } desc={ "meet our newbies! the latest templates upload to the marketplace" } />
                <div className='content'>
                    { customer.map((item) => {
                        return (
                            <div key={item.id} className='card'>
                                <button>
                                    <ImQuotesRight />
                                </button>
                                <p>{ item.desc }</p>
                                <h3>{ item.name }</h3>
                                <span>{ item.post }</span>
                            </div>
                        )
                    }) }
                </div>
            </section>
        </>
    )
}

export default Testimonial