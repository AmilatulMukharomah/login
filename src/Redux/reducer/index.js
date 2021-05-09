import { combineReducers } from 'redux'
import login from './login'
import cart from './cart'
import { post, createPost, updatePost } from './post'

const appReducer = combineReducers({
    login,
    cart,
    post,
    createPost,
    updatePost
})

export default appReducer