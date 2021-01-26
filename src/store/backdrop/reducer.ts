import { BackdropActionTypes, BackdropState, DISPLAY_BACKDROP, HIDE_BACKDROP } from './types'

const initialState: BackdropState = {
    display: false,
    child: null
}

const backdropReducer = (state = initialState, action: BackdropActionTypes): BackdropState => {
    switch (action.type) {
        case DISPLAY_BACKDROP:
            return {
                display: true,
                child: action.child
            }
        
        case HIDE_BACKDROP:
            return {
                display: false,
                child: null
            }

        default:
            return state
    }
}

export default backdropReducer