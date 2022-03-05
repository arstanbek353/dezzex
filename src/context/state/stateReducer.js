import { TOTAL, MEMBERS, COUNTRYS, SET_LOADING } from "../types"

const hendlers = {
    [TOTAL]: (state, { payload }) => ({ ...state, total: payload, loading: false }),
    [MEMBERS]: (state, { payload }) => ({ ...state, members: payload, loading: false }),
    [COUNTRYS]: (state, { payload }) => ({ ...state, countrys: payload, loading: false }),
    [SET_LOADING]: (state) => ({ ...state, loading: true }),
    DEFAULT: state => state
}

export const StateReducer = (state, action) => {
    const hendler = hendlers[action.type] || hendlers.DEFAULT
    return hendler(state, action)
}