import React, { useReducer } from 'react'
import { TOTAL, MEMBERS, COUNTRYS, SET_LOADING } from '../types'
import { StateContext } from './stateContext'
import { StateReducer } from './stateReducer'
import { useHttp } from "../../hooks/http.hook"

export const StateState = ({ children }) => {

    const { request } = useHttp()

    const initialState = {
        total: null,
        members: null,
        comparison: null,
        loading: false
    }

    const [state, dispatch] = useReducer(StateReducer, initialState)
    /**
     * fetchTotal fetches total data
     */
    const fetchTotal = async () => {
        setLoading()
        const res = await request('http://localhost:8000/total')
        dispatch({
            type: TOTAL,
            payload: res
        })
    }

    /**
     * fetchMembers fetches members data
     */
    const fetchMembers = async () => {
        setLoading()
        const res = await request('http://localhost:8000/members')
        dispatch({
            type: MEMBERS,
            payload: res
        })
    }

    /**
     * fetchCountrys fetches countrys data
     */
    const fetchCountrys = async () => {
        setLoading()
        const res = await request('http://localhost:8000/countrys')
        dispatch({
            type: COUNTRYS,
            payload: res
        })
    }

    /**
     * setLoading sets loading: default value is true
     * @param {boolean} value
     */
    const setLoading = (value = true) => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }

    const { total, members, countrys, loading } = state
    return (
        <StateContext.Provider value={{
            fetchTotal, fetchMembers, fetchCountrys,
            total, members, countrys, loading
        }}>
            {children}
        </StateContext.Provider>
    )
}