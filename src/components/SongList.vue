<template>
	<div class="grid-parent">
		<album v-for="album in albums" :key="album.id" v-bind:album='album' ></album>
	</div>
</template>

<script>
import Album from "./Album.vue"
import axios from "axios"

export default {
	components: {Album},
	async mounted() {
		let response = await axios.get("http://jordanbc.xyz:5005/songs")
		this.albums = response.data
	},
	data() {
		
		return {
			albums: {}
		}
	}
}
</script>

<style scoped>
	.song {
		font-size: 20px;
		color: white;
		font-family: sans-serif;
	}
	.song-title {
		font-size: 30px;
		color: white;
		font-family: sans-serif;
		font-weight: 600;
	}
	.album-title {
		font-size: 40px;
		color: white;
		font-family: sans-serif;
		font-weight: 800;
	}
	.grid-parent {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>