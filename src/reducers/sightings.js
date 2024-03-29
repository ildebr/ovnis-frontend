import {
    GET_SIGHTING_ITEMS_SUCCESS,
    GET_SIGHTING_ITEMS_FAIL,
    ADD_SIGHTING_ITEM_SUCCESS,
    ADD_SIGHTING_ITEM_FAIL,
    REMOVE_SIGHTING_ITEM_SUCCESS,
    REMOVE_SIGHTING_ITEM_FAIL,
    CLEAR_SIGHTING,
    UPDATE_SIGHTINGS_ITEMS_SUCCESS,
    LOAD_SIGHTING_ITEMS_SUCCESS,
    SET_SIGHTING_LOADING,
    REMOVE_SIGHTING_LOADING,
    GET_SIGHTING_DETAIL_SUCCESS,
    GET_SIGHTING_DETAIL_FAIL,
    LOAD_USER_SIGHTING_ITEMS_SUCCESS,
    LOAD_USER_SIGHTING_ITEMS_FAIL,
    CREATE_SIGHTING_ITEM_SUCCESS,
    CREATE_SIGHTING_ITEM_FAIL,
    REMOVE_ITEM_CREATED_SUCCESS
} from '../actions/types';

const initialState = {
    items: {},
    loading: false,
    detail: {},
    userItems: {},
    itemCreated: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    console.log(type,payload, 'sigh')

    switch(type) {
        case GET_SIGHTING_ITEMS_SUCCESS:
            console.log(payload)
            console.log(state)
            const newres = payload.results
            
            return {
                ...state,
                [1]:{
                    ...payload
                },
                items:[...newres]
            }
        case GET_SIGHTING_ITEMS_FAIL:
            return {
                ...state,
            }
        case LOAD_SIGHTING_ITEMS_SUCCESS:
            const page = payload.page
            const newState = {...state}
            const newitems = state.items.concat(payload.results)
            newState[page] = payload
            newState['items'] = newitems
            newState['loading'] = false
            return newState
        case LOAD_USER_SIGHTING_ITEMS_SUCCESS:
            return {
                ...state,
                algo:[...payload],
                userItems:[...payload],
                loading: false
            }
        case LOAD_USER_SIGHTING_ITEMS_FAIL:
            return {
                ...state,
                loading: false
            }
        case ADD_SIGHTING_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.sighting
            }
        case ADD_SIGHTING_ITEM_FAIL:
            return {
                ...state,
                loading: false
            }
        case REMOVE_SIGHTING_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.sighting
            }
        case REMOVE_SIGHTING_ITEM_FAIL:
            return {
                ...state
            }
        case CLEAR_SIGHTING:
            return {
                ...state,
                items: [],
                total_items: 0
            }
        case SET_SIGHTING_LOADING:
            return{
                ...state,
                loading: true
            }
        case REMOVE_SIGHTING_LOADING:
            return{
                ...state,
                loading: false
            }
        case CREATE_SIGHTING_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                itemCreated:true
            }
        case CREATE_SIGHTING_ITEM_FAIL:
            return{
                ...state,
                loading: false,
            }
        case REMOVE_ITEM_CREATED_SUCCESS:
            return{
                ...state,
                itemCreated:false
            }
        default:
            return state
    }
};
