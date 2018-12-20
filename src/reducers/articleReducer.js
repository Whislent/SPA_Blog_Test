import { GET_ID } from "../actions/ArticleAction"

const initialState = {
    id: null,
}

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ID:
            return {...state, id: action.payload}

        default:
            return state
    }
}