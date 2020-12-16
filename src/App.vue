<template>
	<div>
		<div id="nav">
			<router-link to="/">Home</router-link> &nbsp;
			<router-link to="/songs">Songs</router-link> &nbsp;
			<router-link to="/about">About</router-link> &nbsp;
		</div>
		<router-view></router-view>
	</div>
</template>

<style>

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	font-size: 30px;
}

#nav a {
	font-weight: bold;
	color: #6A8E7F; /* #6A8E7F */
	background-clip: padding-box
}

#nav a.router-link-exact-active {
  color: #F0F7F4; /* #F0F7F4 */
}

.text {
	color: white;
}
</style>
