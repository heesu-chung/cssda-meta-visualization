export const GET_LISTS = "GET_LISTS";
export const CREATE_LIST = "CREATE_LIST";

const listInit = [];

const pageReducer = (state = listInit, action) => {
    switch (action.type) {
        case CREATE_LIST:
            return action.payload;
        case GET_LISTS:
            return action.payload;
        default:
            return state;
    }
};

export default pageReducer;
