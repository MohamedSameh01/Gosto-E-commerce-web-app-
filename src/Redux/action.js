import { ADD_CART } from "./type";
export const ADD = (item) => {
    return {
        action: ADD_CART,
        payload: item,
    }

}