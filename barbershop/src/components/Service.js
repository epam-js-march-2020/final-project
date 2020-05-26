import React from "react";

const Service = (props) => {
    const { service } = props.location;

    return (
        <div className='main_content'>
            Service: {service.title}
        </div>
    )
};

export default Service;