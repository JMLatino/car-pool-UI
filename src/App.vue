<template>
	<div class="pooling">
		<navbar></navbar>

		<b-list-group-item class="d-flex align-items-center" style="background-color: #23485e;">
			<img width="50" class="mr-2" src="./assets/tony.jpeg" style="  border-radius: 30%!important;">
			<span class="mr-auto" style="font-size: 20px; color: white">Welcome mr. Stark</span>
			<b-badge pill variant="info" class="float-right mt-2 py-2" style="font-size: 20px!important;">95</b-badge>
		</b-list-group-item>
		<div class="ui-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script src="./app.js"></script>
<style scoped>
.pooling {
	background-image: url('../src/assets/map1.webp');
	/* background-size: cover; */
	background-repeat: no-repeat;
	background-size: 3000px 1200px;
	height: 100%;
	width: 100%;
	/*position: fixed*/
	position: absolute;
	overflow-x: scroll;
}

.ui-view {
	margin-top: 1%;
}
</style>