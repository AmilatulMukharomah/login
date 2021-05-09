const getInitialState = {
    post: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const createInitialState = {
    post: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const updateInitialState = {
    post: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

export const post = (state = getInitialState, action) => {
    switch (action.type) {
        case 'GET_POST_FULFILLED':
            return {
                post: action.payload.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'GET_POST_PENDING':
            return {
                post: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'GET_POST_REJECTED':
            return {
                post: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        default:
            return state
    }
}

export const createPost = (state = createInitialState, action) => {
    switch (action.type) {
        case 'CREATE_POST_FULFILLED':
            return {
                post: action.payload.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'CREATE_POST_PENDING':
            return {
                post: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'CREATE_POST_REJECTED':
            return {
                post: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        default:
            return state
    }
}

export const updatePost = (state = updateInitialState, action) => {
    switch (action.type) {
        case 'PUT_POST_FULFILLED':
            return {
                post: action.payload.data,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'PUT_POST_PENDING':
            return {
                post: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'PUT_POST_REJECTED':
            return {
                post: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        default:
            return state
    }
}