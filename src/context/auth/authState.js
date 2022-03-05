import React, { useReducer } from 'react'
import { LOGIN, LOGOUT, SET_LOADING } from '../types'
import { AuthContext } from './authContext'
import { AuthReducer } from './authReducer'
import { useHttp } from "../../hooks/http.hook"

export const AuthState = ({ children }) => {

    const { request } = useHttp()

    const initialState = {
        user: JSON.parse(localStorage.getItem('user')) || null,
        loading: false
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    /**
     * checkLogin checks user's username and password
     * @param {array} data array of users
     * @return {object|undefined} if user found checkLogin returns object else undefined
     */
    const checkLogin = async (data) => {
        setLoading()
        const res = await request('http://localhost:8000/users')
        return res.find(user => user.username === data.username && user.password === data.password)
    }

    /**
     * checkUserName checks user's username
     * @param {array} data array of users
     * @return {object|undefined} if user found checkLogin returns object else undefined
     */
    const checkUserName = async (data) => {
        setLoading()
        const res = await request('http://localhost:8000/users')
        return res.find(user => user.username === data.username)
    }

    /**
     * login loggins to app
     * @param {object} data user's username and password
     */
    const login = async (data) => {

        if (data.username.length < 3 || data.password < 3) {
            alert('too short login or password')
            return false
        }

        const user = await checkLogin(data)

        if (user) {
            alert('you have successfully logged in')
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: LOGIN,
                payload: user
            })
        } else {
            alert('wrong login or password')
            setLoading(false)
        }

    }

    /**
     * registration registrations to app
     * @param {object} data user's username, password, first_name and family_name
     */
    const registration = async (data) => {
        setLoading()
        const { username, password, first_name, family_name } = data
        if (username.length < 3 || password < 3) {
            alert('too short login or password')
            setLoading(false)
            return false
        }
        const user = await checkUserName(data)

        if (user) {
            alert('this login busy')
            setLoading(false)
            return
        }

        const newUser = { username, password, first_name, family_name, id: Date.now() }
        await request('http://localhost:8000/users', 'POST', newUser)
        alert('you have successfully logged in')
        setLoading(false)
    }


    /**
     * logout exits the app
     */
    const logout = async () => {
        localStorage.removeItem('user');
        dispatch({
            type: LOGOUT
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

    const { user, loading } = state
    return (
        <AuthContext.Provider value={{
            login, registration, logout, setLoading,
            user, loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}