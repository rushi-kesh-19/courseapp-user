import { selector } from "recoil";
import { userState } from "../atoms/pcourses";

export const pcLoadingState= selector({
    key:'pcLoadingState',
    get:({get})=>{
        const state= get(pcState);
        return state.isLoading;
    }
})


export const pcSelector= selector({
    key:'userSelector',
    get:({get})=>{
        const state= get(userState);
        return state.username;
    }
})