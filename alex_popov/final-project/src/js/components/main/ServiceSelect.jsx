import React from 'react';

const ServiceSelect = (props) => {
    const { onChangeService, serviceList, activeService } = props;

    const selectClassName = activeService === 'choose service' ? 
        'form_input form_input-yellow form_input-invalid' : 
        'form_input form_input-yellow' ;

    const labelClassName = activeService === 'choose service' ? 
        'form_label form_label-invalid' : 
        'form_label';

    return (
        <>
            <label className={labelClassName} htmlFor='phone'>Choose a service</label>
            <select 
                className={selectClassName}
                id='serviceType' 
                onChange={onChangeService}
                defaultValue={activeService}
            >
                <option className='input_options'>choose service</option>

                {Object.keys(serviceList).map( (el) => {
                    return <option 
                                className='input_options' 
                                key={el} 
                                value={serviceList[el].name}
                            >  
                                {serviceList[el].name}
                            </option>
                })}
                
            </select>
        </>
    )
}

export default ServiceSelect;