import { Item } from '../components/Items/Items'
import { HIDE_BACKDROP, DISPLAY_BACKDROP, ADD_ITEM, REMOVE_ITEM, SELECT_CATEGORY } from './Actions'

export function hideBackdrop() {
    return {
        type: HIDE_BACKDROP
    }
}

export function displayBackdrop() {
    return {
        type: DISPLAY_BACKDROP
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