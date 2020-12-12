<template>
	<a :href='song.source'> {{ song.title }} </a>
</template>

<script>
export default {
	props: ["song"]
}
</script>

<style scoped>
	a {
		font-family: sans-serif;
		font-size: 20px;
		font-weight: 700;
		display: block;
	}
	* {
		color: white;
	}
</style>