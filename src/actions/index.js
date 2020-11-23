import axios from 'axios'

export const READ_EVENTS = "READ_EVENTS"
export const CREATE_EVENTS = "CREATE_EVENTS"
export const DELETE_EVENTS = "DELETE_EVENTS"
export const PUT_EVENTS = "PUT_EVENTS"
export const GET_EVENT = "GET_EVENT"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    //console.log(response)
    dispatch({ type: GET_EVENT, response })
}

export const postEvents = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENTS, response })
}

export const deleteEvents = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENTS, id })
}

export const putEvents = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    //console.log('response', response)
    dispatch({ type: PUT_EVENTS, response })
}