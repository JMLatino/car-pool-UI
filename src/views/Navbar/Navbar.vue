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
