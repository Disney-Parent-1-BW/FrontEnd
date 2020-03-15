
export const ADD_PARK = 'ADD_PARK';

export const parksReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_PARK:
            return {
                ...state,
                [action.payload.name]: action.payload.data
            }
        default:
            return state
    }
}