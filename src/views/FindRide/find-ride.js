import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { mapGetters } from 'vuex'


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