<template>
  <b-container fluid class="p-4">
    <div>
      <h2 style="color=white">Drivers</h2>
      <b-list-group>
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
import axios from 'axios'
export default {
  data() {
    return {
      selectedRide: {},
      list: []
    }
  },
  methods: {
    populate() {
      let path = "https://lchaj9w7t3.execute-api.eu-west-1.amazonaws.com/dev/trips"
      axios.get(path)
        .then(function (response) {
            this.list = response;
        })
        .catch(function () {
          alert('Find Ride API failure')
        })
    },
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
