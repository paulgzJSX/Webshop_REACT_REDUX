import { CategoryState, SelectCategoryActionTypes, SELECT_CATEGORY } from './types'

const initialState: CategoryState = {
    selectedCategory: 'all'
}

const categoryReducer = (state = initialState, action: SelectCategoryActionTypes): CategoryState => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                selectedCategory: action.selectedCategory
            }

        default:
            return state
    }
}

export default categoryReducer