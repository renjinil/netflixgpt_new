const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.showGpt=!state.showGpt

        }
    }
})

export const {toggleGPTSearch} = gptSlice.actions

export default gptSlice.reducer