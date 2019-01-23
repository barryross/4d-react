import React from 'react'
import ServiceItem from './ServiceItem'
import Service from './Service'
const Services = () => {
    return (
        <section id="services" className="section">
            <h1>Services
                <span>What do I offer?</span>
            </h1>
            <div className="inner-wrapper">
                <div id="services-wrapper" className={"flex flex-around"}>
                    <Service icon="fa fa-whatsapp fa-service-icon" label="Technical Consulting">
                        <ServiceItem text="Understanding and synthesis of your idea(s)"/>
                        <ServiceItem text="Suggestions to narrow the focus"/>
                        <ServiceItem text="Clear technical scope & direction"/>
                    </Service>
                    <Service icon="fa fa-code-fork fa-service-icon" label="Full-stack development">
                        <ServiceItem text="Database architecture"/>
                        <ServiceItem text="Backend API development"/>
                        <ServiceItem text="Front-end API Integration"/>
                        <ServiceItem text="Responsive & modern UIs"/>
                    </Service>
                </div>
                <button class="ui primary button">Get in touch!</button>
            </div>
        </section>
    )
}

export default Services
