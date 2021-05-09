const initialState = {
    userData: [],
    isLogin: false
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_FULFILLED':
            console.log(action)
            return {
                userData: action.payload.userData,
                isLogin: action.payload.isLogin
            }
        default:
            return state
    }
}

export default login