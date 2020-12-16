import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Songs from "../views/Songs.vue"
import SongPlayer from "../views/SongPlayer.vue"
import AlbumViewer from "../views/AlbumViewer.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: About
	},
	{
		path: "/songs",
		name: "Songs",
		component: Songs
	},
	{
		path: '/artist/:artist/album/:title',
		name: 'AlbumViewer',
		component: AlbumViewer
	},
	{
		path: '/artist/:artist/album/:title/:song',
		name: 'SongPlayer',
		component: SongPlayer
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
