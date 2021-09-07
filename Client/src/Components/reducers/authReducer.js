import { AUTH_LOGIN, AUTH_USER, ERROR_AUTH } from "../actions/authActions"

let initialState = {
    isAuthenticated: false,
    user: {},
    error: null,
    successMessage: null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                successMessage: action.payload
            }
        case ERROR_AUTH:
            return {
                ...state,
                error: action.payload
            }
        case AUTH_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        default:
            return { ...state }
    }
}