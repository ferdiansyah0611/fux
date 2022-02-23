import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import http from '@service/http'
// CONFIG
const BASE = 'http://localhost:8000/api/post'
const ID = 'id'

var initialState = {
	name: 'post',
	data: []
}

export const postGet = createAsyncThunk('post/get', async() => {
	var response = await http(BASE)
	return response.data
})
export const postGetId = createAsyncThunk('post/get/id', async() => {
	var response = await http(BASE)
	return response.data
})
export const postAdd = createAsyncThunk('post/add', async(body) => {
	var response = await http(BASE, {
		method: 'POST',
		data: body,
	})
	return response.data
})
export const postUpdate = createAsyncThunk('post/update', async(body) => {
	var response = await http(BASE + '/' + body[ID], {
		data: body,
	})
	return Object.assign(response.data, {id: body[ID]})
})
export const postDelete = createAsyncThunk('post/delete', async(body) => {
	var response = await http(BASE + '/' + body[ID], {
		method: 'DELETE',
	})
	return Object.assign(response.data, {id: body[ID]})
})

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		handle(state, action){
			state[action.payload.name] = action.payload.value
		},
		addPostFake(state, action){
			state.data.push(action.payload)
		}
	},
	extraReducers: {
    	[postGet.fulfilled]: (state, action) => {
    		state.data = action.payload
    	},
    	[postGetId.fulfilled]: (state, action) => {
    		// state.show = action.payload
    	},
    	[postAdd.fulfilled]: (state, action) => {
    		state.data.push(action.payload)
    	},
    	[postUpdate.fulfilled]: (state, action) => {
    		state.data = state.data.map(value => {
    			if(value[ID] === action.payload[ID]){
    				value = Object.assign(value, action.payload)
    			}
    			return value
    		})
    	},
    	[postDelete.fulfilled]: (state, action) => {
    		state.data = state.data.filter(value => value[ID] !== action.payload[ID])
    	},
  	},
})
export const {handle,addPostFake} = postSlice.actions

export default postSlice.reducer