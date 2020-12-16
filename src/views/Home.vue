<template>
	<div id="grid-container">
		<div id="song-container" v-for="album in albums" :key="album.id">
			<a :href='"/artist/" + album.artist + "/album/" + album.title'>
				<h2 class="album-title" id='title'> {{album.title}} </h2>
			</a>
			<a :href='"/artist/" + album.artist'>
				<h3 class="album-title" id='artist'> {{album.artist}} </h3>
			</a>
			<a :href='"/artist/" + album.artist + "/album/" + album.title'>
				<img class="album-art" :src='album.art'/>
			</a>
		</div>
	</div>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			albums: {}
		}
	},
	async mounted() {
		let response = await axios.get("http://jordanbc.xyz:5005/albums/")
		this.albums = response.data
	}
}
</script>

<style scoped>
	#grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	.album-art {
		height: 300px;
		width: 300px;
		display: block;
		margin-right: auto;
		margin-left: auto;
	}
	
	.album-title {
		text-transform: capitalize;
		display: inline-block;
		color: #FFEAD0;
	}

	#title {
		float: left;
		margin: 0px 0vh 0px 45px; 
	}

	#artist {
		float: right;
		width: 90%;
		margin: 0px 4vh 0px 0px;
		text-align: right;
	}

</style>