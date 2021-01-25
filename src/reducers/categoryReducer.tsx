import { SELECT_CATEGORY } from '../actionCreators/Actions'

const categoryReducer = (state = 'all', action: any) => {
    console.log(state);
    
    switch (action.type) {
        case SELECT_CATEGORY:
            return state = action.selectedCategory

        default:
            return state
    }
}

export default categoryReducer