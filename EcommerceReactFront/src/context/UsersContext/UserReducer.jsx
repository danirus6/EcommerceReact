const users = (state, action) => {
    switch(action.type) {

        case 'LOGIN': 
        return {
            ...state,
            token: action.payload.token
        }

        case 'GET_USERS_INFO':
            return {
                ...state,
                token: action.payload
            }

        case 'LOGOUT':
            return {
                user: null,
                token: null
            }
        
        default: 
            return state
    }
}

export default users