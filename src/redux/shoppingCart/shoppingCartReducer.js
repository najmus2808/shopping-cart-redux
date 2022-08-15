import { ADD, DECREMENT, INCREMENT } from "./actionTypes"
import { addHandler, decrementHandler, incrementHandler } from "./helper"
import { decrement } from './actions';

const initialState = {
    products: [
        { id: 1, name: "Asus Vivobook X515MA", price: 35500, stockQuantity: 20 },
        { id: 2, name: "Dell E1916HV 18.5 Inch", price: 9300, stockQuantity: 35 },
        { id: 3, name: "Canon Eos 4000D 18MP", price: 36500, stockQuantity: 72 },
    ],
    cartItems: []


}


const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:

            return addHandler(state, action.payload.id);

        case INCREMENT:
            return incrementHandler(state, action.payload.id);


        case DECREMENT:
            return decrementHandler(state, action.payload.id)

        default:
            return state;
    }
}

export default shoppingCartReducer;