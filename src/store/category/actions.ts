import { SELECT_CATEGORY, SelectCategoryActionTypes } from './types'

export function selectCategory(category: string): SelectCategoryActionTypes {
    return {
        type: SELECT_CATEGORY,
        selectedCategory: category
    }
}