<template>
	<div class='grid headers'> 
		<p>Artist</p>
		<p>Title</p>
		<p>Album</p>
	</div>
	<div 
		class='song-row grid'
		v-for='song in songs'
		:key='song.id'
	>
		<p class='capitalize song-row-data'>
			<a :href='/artist/ + song.artist' class='remove-underline'>
				<p class="capitalize song-row-data">{{song.artist}}</p>
			</a>
		</p>
		<p class='capitalize song-row-data'>
			<a :href='/artist/ + song.artist + "/album/" + song.album + "/" + song.title' class='remove-underline'>
				<p class="capitalize song-row-data">{{song.title}}</p>
			</a>
		</p>
		<p class='capitalize song-row-data'>
			<a :href='/artist/ + song.artist + "/album/" + song.album' class='remove-underline'> 
				<p class="capitalize song-row-data">{{song.album}}</p>
			</a>
		</p> <!--//album-->
	</div>
</template>

<script>
import axios from "axios";

export default {
	data () {
		return {
			songs: {}
		}
	},
	async mounted() {
		let response = await axios.get("http://jordanbc.xyz:5005/songs")
		this.songs = response.data
	}
}
</script>

<style scoped>
	.capitalize {
		text-transform: capitalize;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
	}

	p {
		color: white;
		margin: 0px;
	}

	.headers {
		font-size: 5vh;
		font-weight: 800;
		padding: 0px;
		margin-bottom: 25px;
		border-bottom: 3px solid #FFEAD0;
	}

	.song-row {
		font-size: 3vh;
		margin-bottom: 5px;
	}

	.song-row-data {
		width: max-content;
		border-bottom: 1px solid white;
	}

	.remove-underline {
		text-decoration: none;
	}
</style>