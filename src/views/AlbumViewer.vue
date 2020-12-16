<template>
	<div class="text">
		<img :src="albumart">
		<h1 class='album-title'>{{album.title}}</h1>
		<p 
		v-for='song in album.songs' 
		:key='song.id'
		class='song-title'
		>
		{{song.albumLoc}} {{song.title}}</p>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			album: {},
		}
	},
	computed: {
		albumart() {
			return this.album.art
		}
	},
	async mounted() {
		let response = await axios.get('http://jordanbc.xyz:5005/album/' + this.$route.params.artist + "/" + this.$route.params.title)
		this.album = response.data[0]
		
	}
}
</script>

<style scoped>
	.text {
		color: white;
	}

	img {
		height: 45vh;
		width: 45vh;
	}

	.album-title {
		color: #FFEAD0;
		text-transform: capitalize;
		text-decoration: underline;
	}

	.song-title {
		text-transform: capitalize;
		font-size: 2.5vh;
		font-weight: 800;
	}
</style>