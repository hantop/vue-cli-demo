import * as types from './types'

const mutations = {
	[types.LOGIN]: (state, data) => {
		localStorage.setItem('token', data)
		// localStorage.token = data
		state.token = data
	},
	[types.LOGOUT]: (state) => {
		localStorage.removeItem('token');
		state.token = null
	},
	[types.USERNAME]: (state, data) => {
		localStorage.setItem('username', data)
		state.username = data
	},
	[types.USERPORTRAIT]:(state, data) => {
		localStorage.setItem('portrait', data)
		state.portrait = data
	},
	[types.ID]:(state, data) => {
		localStorage.setItem('id', data)
		state.id = data
	},
	[types.CARINDEX]:(state,data)=>{
		localStorage.setItem('carIndex',data)
		state.carIndex = data
	},
	[types.CAR]:(state,data)=>{
		localStorage.setItem('car',data)
		state.car = data
	}
}
export default mutations
