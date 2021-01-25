import { ADD_ITEM, REMOVE_ITEM  } from '../actionCreators/Actions'
import { Item } from "../components/Items/Items";

const itemsReducer = (state = [], action: any) => {
    console.log(state);
    
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.item
            ]

        case REMOVE_ITEM:
            return state.filter((item: Item) => item.id !== action.id)

        default:
            return state
    }
}

export default itemsReducer