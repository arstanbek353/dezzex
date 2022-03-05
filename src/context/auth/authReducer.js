import { LOGIN, LOGOUT, SET_LOADING } from "../types"

const hendlers = {
    [LOGIN]: (state, { payload }) => ({ ...state, user: payload, loading: false }),
    [LOGOUT]: (state) => ({ ...state, user: null, loading: false }),
    [SET_LOADING]: (state, { payload }) => ({ ...state, loading: !!payload }),
    DEFAULT: state => state
}

export const AuthReducer = (state, action) => {
    const hendler = hendlers[action.type] || hendlers.DEFAULT
    return hendler(state, action)
}