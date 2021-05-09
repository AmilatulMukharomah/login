export const getUser = (data) => {
    return {
        type: 'GET_USER',
        payload: Promise.resolve(data), //promise langsung resolve
        //payload: axios.get(bla bla)
        //payload: firestore(bla bla) 
    }
}

