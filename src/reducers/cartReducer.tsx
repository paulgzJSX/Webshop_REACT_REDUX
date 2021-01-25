const cartReducer = (state = false, action: any) => {
    console.log(state);
    
    switch (action.type) {
        case 'DISPLAY_BACKDROP':
            return state = true
        
        case 'HIDE_BACKDROP':
            return state = false

        default:
            return state
    }
}

export default cartReducer