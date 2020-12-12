<template>
	<div>
		<Header></Header>
		<song-list></song-list>
	</div>
</template>

<script>
import Header from "./components/Header.vue"
import SongList from "./components/SongList.vue"

export default {
	components: { Header, SongList },
}
</script>

<style>
	head, body {
		background-color: #223344;
	}
</style>
