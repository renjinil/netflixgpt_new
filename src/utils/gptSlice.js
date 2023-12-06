const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
        movieNames:null,
        moviesResults:null
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.showGpt=!state.showGpt

        },
        addGPTMovies:(state,action)=>{
           const {movieNames,moviesResults}=action.payload
           state.movieNames=movieNames
           state.moviesResults=moviesResults
        }
    }
})

export const {toggleGPTSearch,addGPTMovies} = gptSlice.actions

export default gptSlice.reducer