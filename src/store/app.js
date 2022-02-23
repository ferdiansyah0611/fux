import { createSlice } from '@reduxjs/toolkit'

var initialState = {
	name: 'react-router-toolkit-starter',
	dialogpost: {
		open: null, data: {}
	}
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		handle(state, action){
			state[action.payload.name] = action.payload.value
		},
		opendialog(state, action){
			state.dialogpost = {
				open: true, data: action.payload
			}
		},
		closedialog(state, action){
			state.dialogpost = {
				open: false, data: {}
			}
		},
	},
	extraReducers: {},
})
export const {handle, opendialog, closedialog} = appSlice.actions

export default appSlice.reducer