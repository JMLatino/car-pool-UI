<template>

    <b-container style="color: white;" class="mt-5">
        <b-row align-h="center">
            <h2>Find a Ride</h2>
        </b-row>
        <b-row align-h="center">
            <b-col>
                <b-card class="card">
                    <b-row>
                        Pick Up :
                        <b-input v-model="pickUp" placeholder="Enter your pick up point"></b-input>
                    </b-row>
                    <b-row>
                        Destination :
                        <b-input v-model="destination" placeholder="Enter your Destination"
                            v-on:placechanged="toAddress" id="to_location" :country="['in']" classname="form-control">
                        </b-input>
                    </b-row>
                    <b-row>
                        Seats Required : <b-form-input id="number" type="number" v-model="requestedSeats"
                            placeholder="Enter your required seats"></b-form-input>
                    </b-row>
                    <b-row>
                        Date : <b-form-input id="time" v-model="dateSelected" type="date"></b-form-input>
                    </b-row>
                    <b-row>
                        Time Slot : <b-form-input id="time" type="time" v-model="time"></b-form-input>
                    </b-row>
                    <b-row align-h="center" class="mt-3">
                        <b-button type="submit" variant="success" @click="findRide">Search</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./find-ride.js"></script>
<style scoped>
.card {
    opacity: 0.95;
    background-color: #0d7faf !important;

}
</style>