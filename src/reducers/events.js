import _ from 'lodash'

import { READ_EVENTS, DELETE_EVENTS, GET_EVENT, PUT_EVENTS, CREATE_EVENTS } from '../actions'


export default ( events = {}, action ) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case GET_EVENT:
            //console.log(action.response.data)
            //console.log('events', events)
            const data = action.response.data
            return { ...events, [data.id]: data }  
        case DELETE_EVENTS:
            //console.log(action.id)
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
