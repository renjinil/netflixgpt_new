import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        trailerVideo:{},
        popularMovies:{},
        topRatedMovies:{},
        upComingMovies:{}
    },
    reducers:{
        addNowPlayingmovies:(state,action)=>{
            state.nowPlayingMovies =action.payload
        },
        addPopularmovies:(state,action)=>{
            state.popularMovies =action.payload
        },
        addTopRatedmovies:(state,action)=>{
            state.topRatedMovies =action.payload
        },
        addUpcomingmovies:(state,action)=>{
            state.upComingMovies =action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo =action.payload
        }
    }
})

export const {addNowPlayingmovies,addTrailerVideo,addPopularmovies,addTopRatedmovies,addUpcomingmovies}= movieSlice.actions
export default movieSlice.reducer