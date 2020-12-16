<template>
	<img :src='album.art' id='albumart'/>
	<audio :src='song.source' id='player'></audio>
	<h1 class='text capitalize'> {{song.title}} </h1>
	<div id="controls-parent" class='text'>
		<i 
			class='fas fa-play' 
			id='play-button' 
			@click='play()'
			v-if='!playing'
		></i>
		<i 
			class="fas fa-pause" 
			id='pause-button' 
			@click='pause()'
			v-if='playing'
		></i>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			song: {},
			album: {},
			playing: false
		}
	},
	async mounted() {
		let response = await axios.get("http://jordanbc.xyz:5005/song/" + this.$route.params.song)
		this.song = response.data[0]
		response = {};

		response = await axios.get('http://jordanbc.xyz:5005/album/' + this.song.artist + "/" + this.song.album)
		this.album = response.data[0]
	},
	methods: {
		play() {
			let player = document.querySelector('#player');
			this.playing = true;
			player.play()
		},
		pause() {
			let player = document.querySelector('#player');
			this.playing = false;
			player.pause()
		}
	}
}
</script>

<style scoped>
	.text {
		color: white;
	}
	
	.capitalize {
		text-transform: capitalize;
	}

	#play-button, #pause-button {
		font-size: 4vh;
		margin: 1vh;
	}

	#albumart {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	img {
		width: 45vh;
		height: 45vh;
		box-shadow: 10px 10px 15px black;
	}
</style>