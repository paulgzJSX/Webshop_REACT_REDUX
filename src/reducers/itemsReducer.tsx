import { ADD_ITEM, REMOVE_ITEM  } from '../actionCreators/Actions'
import { Item } from "../components/Items/Items";

const itemsReducer = (state = [], action: any) => {
    console.log(state);
    
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    ...action.item,
                    quantity: 1
                }
            ]

        case REMOVE_ITEM:
            return state.filter((item: Item) => item.id !== action.id)
        
        case 'INCREASE_QUANTITY':
            return state.map((item: Item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            })    
            
        case 'DECREASE_QUANTITY':
            return state.map((item: Item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1
                    }
                } else {
                    return item
                }
            })    

        default:
            return state
    }
}

export default itemsReducer