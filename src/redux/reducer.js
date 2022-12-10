const initialTheme = {
    theme: "light"
}

const initialCart = {
    productBox : []
}

const themeReducer = (state = initialTheme, action) => {
    switch(action.type) {
        case "THEME_CHANGE":
            return {
                theme : action.data
            }
        default :
        return state    
    }
}


const cartReducer = (state = initialCart, action) => {
    switch(action.type) {
        case "ADD_TO_CART" :
            return {
                productBox : [...state.productBox, action.data]
            }
        case "REMOVE_CART" : 
            if (action.data) {
                state.productBox.splice(state.productBox.indexOf(action.data), 1)
            }
            return {
                productBox : [...state.productBox]
            }
            default: 
            return state
        }
    }




export {themeReducer, cartReducer}