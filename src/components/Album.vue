<template>
	<div :id='album.id'>
		<h2> {{album.title}} </h2>
		<h4> {{album.artist}} </h4>
		<song-obj v-for="song in this.album.songs" :key="song.id" v-bind:song="song"></song-obj>
	</div>
</template>

<script>
import SongObj from "./SongObj.vue"

export default {
	props: ["album"],
	components: { SongObj }
}
</script>

<style>
	h2 {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 40px;
		padding-bottom: 0px;
		margin-bottom: 0px;
		color: white;
	}
	h4 {
		font-family: sans-serif;
		padding: 0px;
		margin: 0px;
		font-size: 20px;
		color: white;
	}
</style>