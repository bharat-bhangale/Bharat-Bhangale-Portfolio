import React from 'react'
import "./Services.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import Service_data from "../../assets/services_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <div className="services-container">
                {Service_data.map((service, index) => {
                    return (
                        <div className="services-format" key={index}>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc[0]}</p>
                            <p>{service.s_desc[1]}</p>
                            <p>{service.s_desc[2]}</p>
                            <p>{service.s_desc[3]}</p>
                            <p>{service.s_desc[4]}</p>
                            <p>{service.s_desc[5]}</p>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services
