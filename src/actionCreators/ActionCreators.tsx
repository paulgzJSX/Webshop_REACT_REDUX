import { ReactNode } from 'react'
import { Item } from '../components/Items/Items'
import { HIDE_BACKDROP, DISPLAY_BACKDROP, ADD_ITEM, REMOVE_ITEM, SELECT_CATEGORY, DECREASE_QUANTITY, INCREASE_QUANTITY } from './Actions'

export function hideBackdrop() {
    return {
        type: HIDE_BACKDROP
    }
}

export function displayBackdrop(child: ReactNode) {
    return {
        type: DISPLAY_BACKDROP,
        child
    }
}

export function addItem(item: Item) {
    return { 
        type: ADD_ITEM, 
        item 
    }
}

export function removeItem(itemId: number) {
    return { 
        type: REMOVE_ITEM, 
        id: itemId
    }
}

export function selectCategory(category: string) {
    return { 
        type: SELECT_CATEGORY, 
        selectedCategory: category
    }
}

export function decreaseQuantity(itemId: number) {
    return {
        type: DECREASE_QUANTITY,
        id: itemId
    }
}

export function increaseQuantity(itemId: number) {
    return {
        type: INCREASE_QUANTITY, 
        id: itemId
    }
}