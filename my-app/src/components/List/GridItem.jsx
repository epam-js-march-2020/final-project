import React from 'react';
import Button from '../Utils/Button';

class GridItem  extends React.Component{
    render(){
    const { service, time, id, date, name } = this.props.order;

    const onDeleteHandle = () => {
        this.props.onDelete(id);
    };

    return (
        <div className='service__item-container'>
            <div className='service__container'>
                <p className='service__description'>{name}</p>
                <p className='service__info'>{service}</p>
                <span className='service__info'>Date: {date.split('-')[2]}.{date.split('-')[1]}</span>
                <span className='service__info'>Time: {time}</span>
                {this.props.isLoggedIn ? <Button type={'button'} onClick={onDeleteHandle} buttonText={'Terminate appointment'} /> : ''}
            </div>
        </div>
    );
};
}

export default GridItem;
