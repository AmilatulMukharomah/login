import Axios from 'axios'
import { baseUrl } from './baseUrl'

export const getPost = () => {
    return {
        type: 'GET_POST',
        payload: Axios.get(`${baseUrl}/posts`), //posts menyesuaikan dengan api nya
    }
}

export const createPost = (data) => {
    return {
        type: 'CREATE_POST',
        payload: Axios.post(`${baseUrl}/posts`,
            JSON.stringify(data),
            {
                headers:
                {
                    'Content-type':
                        'application/json; charset=UTF-8'
                }
            })
    }
}

export const updatePost = (data, id) => {
    return {
        type: 'PUT_POST',
        payload: Axios.put(`${baseUrl}/posts/${id}`,
            JSON.stringify(data),
            {
                headers:
                {
                    'Content-type':
                        'application/json; charset=UTF-8'
                }
            })
    }
}