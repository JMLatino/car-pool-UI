<template>
    <b-container>
        <b-row align-h="center">
            <b-col>
                <h2> Register Your Vehicle </h2>
                <b-card class="card">
                    <b-row>
                        Vehicle Name : <b-form-input v-model="vehicleName"></b-form-input>
                        Vehicle Number : <b-form-input v-model="vehicleNumber"></b-form-input>
                        Vehicle Type : <b-form-select v-model="vehicleType" :options="vehicletypes"></b-form-select>
                        Vehicle Color : <b-form-input id="time" v-model="color"></b-form-input>
                    </b-row>
                    <b-row align-h="center" class="mt-3">
                        <b-button type="submit" variant="success" @click="registerVehicle">Done</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./new-car.js"></script>
<style scoped>
.card {
    opacity:0.85;
    background-color:#5cb8c9 !important;
    padding: 25px;
}
</style>