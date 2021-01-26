import { DISPLAY_BACKDROP, HIDE_BACKDROP } from '../actionCreators/Actions'

const initialState = {
    show: false,
    child: null
}

const backdropReducer = (state = initialState, action: any) => {
    console.log(state);
    
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