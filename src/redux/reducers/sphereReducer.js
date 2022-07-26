export const SET_SIZE_DIFF = "SET_SIZE_DIFF";
export const SET_SIZE_RATIO = "SET_SIZE_RATIO";
export const SET_MONTH_RATIO = "SET_MONTH_RATIO";
export const SET_DAY_RATIO = "SET_DAY_RATIO";
export const SET_RESOLUTION = "SET_RESOLUTION";
export const SET_ROTATION_SPEED = "SET_ROTATION_SPEED";

const specInfo = {
    /* size Diff with others */
    sizeDiff: 7.9,
    /* sizeRatio in Canvas */
    sizeRatio: 0.5,
    /* Macro Position Factior */
    monthRatio: 0.05,
    /* Micro Position Factior */
    dayRatio: 0.05,
    /* Sphere Vertex Factor */
    resolution: 15,
    /* Item.length half */
    rotationSpeed: 0.5,
};

const sphereReducer = (state = specInfo, action) => {
    switch (action.type) {
        case SET_SIZE_DIFF:
            return { ...state, sizeDiff: action.payload };
        case SET_SIZE_RATIO:
            return { ...state, sizeRatio: action.payload };
        case SET_MONTH_RATIO:
            return { ...state, monthRatio: action.payload };
        case SET_DAY_RATIO:
            return { ...state, dayRatio: action.payload };
        case SET_RESOLUTION:
            return { ...state, resolution: action.payload };
        case SET_ROTATION_SPEED:
            return { ...state, rotationSpeed: action.payload };
        default:
            return state;
    }
};

export default sphereReducer;
