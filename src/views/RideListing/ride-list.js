import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            selectedRide: {},
            fields: [
                { key: 'userId', label: 'User Id' },
                { key: 'fullName', label: 'Offerer Name' },
                { key: 'phoneNumber', label: 'Phone Number' },
                { key: 'pickupPoint.placeAddress', label: 'Pick Up' },
                { key: 'destinationPoint.placeAddress', label: 'Destination' },
                { key: 'tripStartTime', label: 'Start Time' },
                { key: 'availableSeats', label: 'Available Seats' },
                { key: 'vehicleNumber', label: 'Vehicle Number' }
            ],
            list: {
                "Items":
                    [
                        { "date": "20-11-2022", "from": "utrecht", "status": "open", "time": 1200, "id": "t2", "to": "amsterdam", "seatsAvailable": 2, "driverId": "p2" },
                        { "date": "20-11-2022", "from": "utrecht", "status": "open", "time": 1200, "id": "t1", "to": "amsterdam", "seatsAvailable": 1, "driverId": "p1" },
                        { "date": "20-11-2022", "from": "utrecht", "status": "open", "time": 1200, "id": "t3", "to": "amsterdam", "seatsAvailable": 3, "driverId": "p3" },
                        { "date": "20-11-2022", "from": "utrecht", "status": "open", "time": 1200, "id": "t4", "to": "amsterdam", "seatsAvailable": 4, "driverId": "p4" }
                    ],
                "Count": 4,
                "ScannedCount": 4
            }
        }
    },
    methods: {
        onRowSelected(items) {
            this.selectedRide = items
        },
        join() {
            let payload = {
                "userId": this.userId,
                "requestContent": {
                    "userId": this.selectedRide[0].userId,
                    "tripId": this.selectedRide[0].tripId,
                    "pickupPoint": {
                        "latitude": this.selectedRide[0].pickupPoint.latitude,
                        "longitude": this.selectedRide[0].pickupPoint.longitude,
                        "placeId": this.selectedRide[0].pickupPoint.placeId,
                        "placeAddress": this.selectedRide[0].pickupPoint.placeAddress
                    },
                    "destinationPoint": {
                        "latitude": this.selectedRide[0].destinationPoint.latitude,
                        "longitude": this.selectedRide[0].destinationPoint.longitude,
                        "placeId": this.selectedRide[0].destinationPoint.placeId,
                        "placeAddress": this.selectedRide[0].destinationPoint.placeAddress
                    },
                    "rideStartTime": this.selectedRide[0].tripStartTime,
                    "requestedSeats": this.selectedRide[0].requestedSeats,
                }
            }
            this.$store.dispatch('joinRide', { payload, success: this.callUpcoming })
        },
        callUpcoming() {
            this.$router.push({ name: 'MyRide', path: '/my-ride/upcoming' })
        }
    },
    computed: {
        ...mapGetters([
            'rideList',
            'userId'
        ])
    }
}