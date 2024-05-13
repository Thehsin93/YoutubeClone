import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_Count } from "./Constants";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages : []
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(LIVE_CHAT_Count,1);
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;