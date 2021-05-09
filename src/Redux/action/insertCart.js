export const insertCart = (data) => {
    return {
        type: 'INSERT_CART',
        payload: Promise.resolve(data), //promise langsung resolve
        //payload: axios.get(bla bla)
        //payload: firestore(bla bla) 
    }
}

