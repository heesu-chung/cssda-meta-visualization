import { db } from "../../config/firebaseInit";
import { GET_LISTS } from "../reducers/pageReducer";

export const getList = (meta) => async (dispatch) => {
    try {
        dispatch({
            type: GET_LISTS,
            payload: meta,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createList = (data) => async (dispatch) => {
    try {
        await db.collection("page").add({
            title: data.title,
            subTitle: data.subTitle,
            country: data.country,
            about: data.about,
            tags: data.tags.split(", "),
            category: data.category.split(", "),
            date: data.date,
            UI: Number(data.UI),
            UX: Number(data.UX),
            INN: Number(data.INN),
            mainDesign: data.coreDesignConcept.split(", "),
            subDesign: data.subDesignDetail.split(", "),
            mainColor: data.mainColor,
            subColor: data.subColor,
            animation: data.animation.split(". "),
            createdAt: new Date().toLocaleString(),
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateList = (data) => async (dispatch) => {
    console.log("update List exec");
    try {
        await db.collection("pages").add(data);
    } catch (err) {
        console.log(err);
    }
};
