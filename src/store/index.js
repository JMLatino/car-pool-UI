import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		userId: null,
		userName: null,
		status: null,
		error: null,
		userDetails: {},
		historyDetails: [],
		upcomingDetails: [],
		registration: false,
		vehicles: [],
		offerRide: '',
		rideList: [],
		joinStatus: false
	},
	mutations: {

		setUserId(state, payload) {
			state.userId = payload
		},

		setUserName(state, payload) {
			state.userName = payload
		},

		setHistoryDetails(state, payload) {
			state.historyDetails = payload
		},

		setVehicles(state, payload) {
			state.vehicles = payload
		},

		setUserDetails(state, payload) {
			state.userDetails = payload
		},

		setUpcomingDetails(state, payload) {
			state.upcomingDetails = payload
		},

		setRegistration(state, payload) {
			state.registration = payload
		},

		removeUser(state) {
			state.user = null
		},

		setOfferRide(state, payload) {
			state.offerRide = payload
		},

		setStatus(state, payload) {
			state.status = payload
		},

		setError(state, payload) {
			state.error = payload
		},

		setRideList(state, payload) {
			state.rideList = payload
		},

		setJoinStatus(state, payload) {
			state.joinStatus = payload
		}

	},
	actions: {
		getSignUp({ commit }, { payload, success }) {
			let path = "http://10.61.244.211:8080/api/users/signup"
			axios.post(path, payload)
				.then(function (response) {
					commit('setUserId', response.data.responseContent.userId)
					alert('success')
					if (success) { success() }
				})
				.catch(function () {
					alert('signing up failed')
				})
		},

		signIn({ commit }, { payload, success }) {
			let path = "http://10.61.244.211:8080/api/users/login"
			axios.post(path, payload)
				.then(function (response) {
					commit('setUserName', response.data.responseContent.username)
					commit('setUserId', response.data.responseContent.userId)
					alert('success')
					if (success) { success() }
				})
				.catch(function () {
					alert('signing in failed')
				})
		},

		myProfile({ commit }, payload) {
			let path = "http://10.61.244.211:8080/api/users/" + payload
			axios.get(path)
				.then(function (response) {
					commit('setUserDetails', response.data.responseContent)
					commit('setUserId', response.data.responseContent.userId)
				})
				.catch(function () {
					alert('My Profile API failure')
				})
		},

		callHistory({ commit }, payload) {
			let path = "http://10.61.244.211:8080/api/myrides/history"
			axios.post(path, payload)
				.then(function (response) {
					commit('setHistoryDetails', response.data.responseContent)
				})
				.catch(function () {
					alert('History API failure')
				})
		},

		callUpcoming({ commit }, payload) {
			let path = "http://10.61.244.211:8080/api/myrides/upcoming"
			axios.post(path, payload)
				.then(function (response) {
					commit('setUpcomingDetails', response.data.responseContent)
				})
				.catch(function () {
					alert('Upcoming API failure')
				})
		},

		vehicleRegistration() {
			// let path = "http://10.61.244.211:8080/api/vehicles/register"
			// axios.post(path, payload)
			// 	.then(function (response) {
			// 		alert('success')
			// 		commit('setRegistration', response.data.responseContent)
			// 		if (success) success()
			// 	})
			// 	.catch(function () {
			// 		alert('vehicle Registration API failure')
			// 	})
		},

		getVehicleList() {
			// let path = "http://10.61.244.211:8080/api/vehicles/" + payload
			// axios.get(path)
			// 	.then(function (response) {
			// 		commit('setVehicles', response.data.responseContent)
			// 	})
			// 	.catch(function () {
			// 		alert('vehicle List API failure')
			// 	})
		},

		createTrip({ commit }, { payload, success }) {
			let path = 'http://10.61.244.211:8080/api/ride/create-trip'
			axios.post(path, payload)
				.then(function (response) {
					commit('setOfferRide', response.success)
					alert('success')
					if (success) success()
				})
				.catch(function () {
					alert('fail')
				})
		},

		findRide() {
			// let path = "https://lchaj9w7t3.execute-api.eu-west-1.amazonaws.com/dev/trips"
			// // axios.get(path)
			// // 	.then(function (response) {
			// // 		commit('setRideList', response.data.responseContent)
			// // 		if (success) success()
			// // 	})
			// // 	.catch(function () {
			// // 		alert('Find Ride API failure')
			// 	})
		},

		joinRide({ commit, dispatch }, { payload, success }) {
			let path = "http://10.61.244.211:8080/api/rides/join-trip"
			axios.post(path, payload)
				.then(function (response) {
					commit('setJoinStatus', response.data.responseContent)
					dispatch('callUpcoming', {userId : payload.userId})
					if (success) success()
				})
				.catch(function () {
					alert('Join Ride API failure')
				})
		}

	},

	getters: {
		status(state) {
			return state.status
		},

		userId(state) {
			return state.userId
		},

		userName(state) {
			return state.userName
		},

		joinStatus(state) {
			return state.joinStatus
		},

		rideList(state) {
			return state.rideList
		},

		historyDetails(state) {
			return state.historyDetails
		},

		registration(state) {
			return state.historyDetails
		},

		upcomingDetails(state) {
			return state.upcomingDetails
		},

		vehicles(state) {
			return state.vehicles
		},

		userDetails(state) {
			return state.userDetails
		},

		offerRide(state) {
			return state.offerRide
		},

		error(state) {
			return state.error
		}
	}
})
