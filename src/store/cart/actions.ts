import { ADD_ITEM, REMOVE_ITEM, DECREASE_QUANTITY, INCREASE_QUANTITY, Item, ItemsActionTypes } from './types'

export function addItem(item: Item): ItemsActionTypes {
    return { 
        type: ADD_ITEM, 
        item 
    }
}

export function removeItem(itemId: number): ItemsActionTypes {
    return { 
        type: REMOVE_ITEM, 
        id: itemId
    }
}

export function decreaseQuantity(itemId: number): ItemsActionTypes {
    return {
        type: DECREASE_QUANTITY,
        id: itemId
    }
}

export function increaseQuantity(itemId: number): ItemsActionTypes {
    return {
        type: INCREASE_QUANTITY, 
        id: itemId
    }
}