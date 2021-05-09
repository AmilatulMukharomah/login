const initialState = {
    cart: ['ayam',
        'bakso',
        'kangkung',
        'bayam',
        'sosis']
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'INSERT_CART_FULFILLED':
            console.log(action)
            return {
                cart: action.payload.cart,
            }
        default:
            return state
    }
}

export default login