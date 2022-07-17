import {
    SET_SIZE_DIFF,
    SET_SIZE_RATIO,
    SET_MONTH_RATIO,
    SET_DAY_RATIO,
    SET_RESOLUTION,
    SET_ROTATION_SPEED,
} from "../reducers/sphereReducer";

export const setSizeDiff = (value) => (dispatch) => {
    dispatch({
        type: SET_SIZE_DIFF,
        payload: value,
    });
};

export const setSizeRatio = (value) => (dispatch) => {
    dispatch({
        type: SET_SIZE_RATIO,
        payload: value,
    });
};

export const setMonthRatio = (value) => (dispatch) => {
    dispatch({
        type: SET_MONTH_RATIO,
        payload: value,
    });
};

export const setDayRatio = (value) => (dispatch) => {
    dispatch({
        type: SET_DAY_RATIO,
        payload: value,
    });
};

export const setResolution = (value) => (dispatch) => {
    dispatch({
        type: SET_RESOLUTION,
        payload: value,
    });
};

export const setRotationSpeed = (value) => (dispatch) => {
    dispatch({
        type: SET_ROTATION_SPEED,
        payload: value,
    });
};
