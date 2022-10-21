<template>
<div class="navbar-container">
    <b-navbar toggleable="lg" type="dark">
        <img width="75" class="mr-2" src="../../assets/car.svg" style=" -webkit-filter: invert(100%); /* Safari 6.0 - 9.0 */
  filter: invert(100%);">
        <b-navbar-brand :to="{path: '/'}">Toot Toot</b-navbar-brand>


        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{path: '/offer-ride'}" @click="callVehicles" style="color: white!important;">Offer Ride</b-nav-item>
                <b-nav-item :to="{path: '/find-ride'}">Find Ride</b-nav-item>
                 <b-nav-item-dropdown v-if="userName" text="My Rides" right>
                    <b-dropdown-item :to="{path: '/my-ride/history'}" @click="callHistory">History</b-dropdown-item>
                    <b-dropdown-item :to="{path: '/my-ride/upcoming'}" @click="callUpcoming">Upcoming</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-if="userName" @click="callMyProfile" :to="{path: '/my-profile'}">My Profile</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto" v-if="!userName">
                <b-nav-item :to="{path: '/login'}">Login</b-nav-item>
                <b-nav-item :to="{path: '/register'}">Sign Up</b-nav-item>
            </b-navbar-nav>

			<b-navbar-nav class="ml-auto" v-else>
                <b-nav-item>{{userName}}</b-nav-item>
                <b-nav-item @click="reset" :to="{path: '/find-ride'}">Log Out</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script src="./navbar.js"></script>

<style scoped>
.navbar-container {
    background-color: #0d7faf!important;
}
b-nav-item {
    font-size: 12px bold;
}
</style>
