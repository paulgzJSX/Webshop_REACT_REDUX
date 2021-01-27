import { ADD_ITEM, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY, Item, ItemsState, ItemsActionTypes } from './types'

const initialState: ItemsState = {
    items: []
}

const cartReducer = (state: ItemsState = initialState, action: ItemsActionTypes): ItemsState => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                items: [
                    ...state.items,
                    {
                        ...action.item,
                        quantity: 1
                    }
                ]
            }

        case REMOVE_ITEM:
            return {
                items: state.items.filter((item: Item) => item.id !== action.id)
            }

        case INCREASE_QUANTITY:
            return {
                items: state.items.map((item: Item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            }

        case DECREASE_QUANTITY:
            return {
                items: state.items.map((item: Item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1
                        }
                    } else {
                        return item
                    }
                })
            }

        default:
            return state
    }
}

export default cartReducer