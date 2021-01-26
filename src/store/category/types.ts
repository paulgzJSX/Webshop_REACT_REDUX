export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export type Category = {
    category: string
}

export interface CategoryState {
    selectedCategory: string
}

interface SelectCategoryAction {
    type: typeof SELECT_CATEGORY
    selectedCategory: string
}

export type SelectCategoryActionTypes = SelectCategoryAction