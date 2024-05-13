import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        Cacheresult:(state,action)=>{
            state = Object.assign(state, action.payload);
        }
    }
    
});

export const{Cacheresult} = searchSlice.actions;
export default searchSlice.reducer;
