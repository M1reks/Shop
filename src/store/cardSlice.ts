import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";


type listType = {

}

const initialState = {
    list: []
}

const cardSlise = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

const { actions, reducer } = cardSlise

export default reducer

export const {

} = actions