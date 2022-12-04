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
            default: 
            return state
        }
    }




export {themeReducer, cartReducer}