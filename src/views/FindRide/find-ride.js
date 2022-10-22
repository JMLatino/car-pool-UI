import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
	data() {
		return {
			page: '',
			selected: '',
			to_address: '',
			from_address: '',
			pickUp: '',
			placeResultData: {},
			requestedSeats: '',
			id: '',
			latitude: '',
			longitude: '',
			placeId: '',
			dateSelected: '',
			time: '',
			orgLatitude: 12.9180242,
			orgLongitude: 77.64905290000002,
			orgPlaceID: "ChIJTRkj6YMUrjsR3jsq2T2_Jlg",
			destination: ''
		}
	},
	created() {
		this.page = "Login"
	},
	methods: {
		toAddress(addressData, placeResultData) {
			this.latitude = addressData.latitude
			this.longitude = addressData.longitude
			this.placeId = placeResultData.place_id
		},
		findRide() {
			// let datetime = this.dateSelected + ',' + this.time
			// let date = new Date(datetime)
			// let pAddress = ''
			// let payload = {
			// 	"userId": this.userId,
			// 	"requestContent": {
			// 		"pickupPoint": {
			// 			"latitude": this.orgLatitude,
			// 			"longitude": this.orgLongitude,
			// 			"placeId": this.orgPlaceID,
			// 			"placeAddress": pAddress
			// 		},
			// 		"destinationPoint": {
			// 			"latitude": this.latitude,
			// 			"longitude": this.longitude,
			// 			"placeId": this.placeId,
			// 			"placeAddress": pAddress
			// 		},
			// 		"rideStartTime": date,
			// 		"requestedSeats": this.requestedSeats,
			// 	}
			// }

			axios.get('https://lchaj9w7t3.execute-api.eu-west-1.amazonaws.com/dev/trips')
			.then(response => {window.ajs = response})
			this.callRideList()
			// this.$store.dispatch('findRide',{success: this.callRideList})
		},
		callRideList() {
			this.$router.push({name: 'RideList', path: '/find-ride/ride-list'})
		}
	},
	components: {
		VueGoogleAutocomplete
	},
	computed: {
		...mapGetters([
			'userId'
		])
	}
}