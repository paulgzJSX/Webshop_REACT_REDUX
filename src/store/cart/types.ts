import { Category } from "../category/types"

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'

export interface Item {
    id: number
    title: string
    price: number
    category: Category
    description: string
    image: string
    quantity: number
}

export interface ItemsState {
    items: Item[]
}

interface AddItemAction {
    type: typeof ADD_ITEM
    item: Item
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM
    id: number
}

interface DecreaseQuantityAction {
    type: typeof DECREASE_QUANTITY
    id: number
}

interface IncreaseQuantityAction {
    type: typeof INCREASE_QUANTITY
    id: number
}

export type ItemsActionTypes = AddItemAction | RemoveItemAction | DecreaseQuantityAction | IncreaseQuantityAction