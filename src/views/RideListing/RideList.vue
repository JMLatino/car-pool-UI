<template>
    <b-container fluid class="p-4 bg-dark">
        <div>
    <h2 style="color=white">Drivers</h2>
    <b-list-group style="max-width: 300px;" >
      <b-list-group-item class="d-flex align-items-center" v-for="trip in list.Items" :key="trip.driverId">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">{{trip.date}}</span>
        <span class="mr-auto">{{trip.from}}</span>
        <span class="mr-auto">{{trip.to}}</span>
        <span class="mr-auto">{{trip.status}}</span>
        <b-badge>{{trip.seatsAvailable}}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</b-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            selectedRide: {},
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
            
             this.callUpcoming()
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
</script>
