import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import itemsReducer from './itemsReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer,
    category: categoryReducer
})

export default rootReducer