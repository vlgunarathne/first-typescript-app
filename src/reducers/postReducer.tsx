import { isTemplateSpan } from 'typescript';
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
                // items: [...state.items, action.payload]
            }; 
        default:
            return state;
    }
}