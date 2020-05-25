import { GET_SERVICES, GET_SERVICE } from '../actions/types';

const initialState = {
    services: [
        {
            id: 1,
            name: 'haircut',
            title: 'HAIRCUT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum consequuntur tempora nihil magni blanditiis! Voluptatem ex ab impedit maiores, laudantium dicta facere enim, doloribus nam facilis numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum',
            img: require("../img/megan-bagshaw-YmaaUNbHHtw-unsplash.jpg"),
            show: false
        },
        {
            id: 2,
            name: 'beard',
            title: 'BEARD && MOUSTACHE TRIMS',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum consequuntur tempora nihil magni blanditiis! Voluptatem ex ab impedit maiores, laudantium dicta facere enim, doloribus nam facilis numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum',
            img: require("../img/nathon-oski-fE42nRlBcG8-unsplash.jpg"),
            show: false
        },
        {
            id: 3,
            name: 'shave',
            title: 'STRAIGHT RAZOR SHAVE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum consequuntur tempora nihil magni blanditiis! Voluptatem ex ab impedit maiores, laudantium dicta facere enim, doloribus nam facilis numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum',
            img: require("../img/2444728.jpg"),
            show: false
        },
        {
            id: 4,
            name: 'longhaircut',
            title: 'LONGER/ONE HOUR CUT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum consequuntur tempora nihil magni blanditiis! Voluptatem ex ab impedit maiores, laudantium dicta facere enim, doloribus nam facilis numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum',
            img: require("../img/ilya-mirnyy-61L3f70h5Nc-unsplash.jpg"),
            show: false
        },
        {
            id: 5,
            name: 'haircut&shave',
            title: 'HAIRCUT AND SHAVE COMBO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit est molestias quisquam quia voluptatem, sed quo et culpa natus assumenda dolorum consequuntur tempora nihil magni blanditiis! Voluptatem ex ab impedit maiores, laudantium dicta facere enim, doloribus nam facilis numquam.',
            img: require("../img/fabio-alves-DYetcnz0jRY-unsplash.jpg"),
            show: false
        },
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SERVICES:
            return {
                ...state,
                services: state.services.map(
                    service => {
                        service.show = false;
                    return service
                })
        
            }
        case GET_SERVICE:
            return {
                ...state,
                services: state.services.map(
                    service => {
                    if(service.name === action.payload){
                        service.show = true;
                    }
                    return service
                })
            }    
        default:
            return state;
    }
}
