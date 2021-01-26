import { combineReducers } from 'redux'

import backdropReducer from './backdropReducer'
import itemsReducer from './itemsReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    backdrop: backdropReducer,
    items: itemsReducer,
    category: categoryReducer
})

export default rootReducer