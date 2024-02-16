const getUser = (state, action) => {
    switch(action.type) {
        case  'GET_USERS':
            return{
                ...state,
                users: action.payload
            }
        default: 
        return state
    } 
}

export default getUser

// const getProducts = (state, action) => {
//     switch(action. type) {
//         case 'GET_PRODUCTS':
//             return {
//                 ...state,
//                 products:action.payload
//             }
//         default:
//             return state
//     }
// }

// export default getProducts