import { selector } from "recoil";
import { pcoursesState } from "../atoms/pcourses";

export const pcLoadingState= selector({
    key:'pcLoadingState',
    get:({get})=>{
        const state= get(pcoursesState);
        return state.isLoading;
    }
})


export const pcSelector= selector({
    key:'pcSelector',
    get:({get})=>{
        const state= get(pcoursesState);
        return state.pcourse;
    }
})