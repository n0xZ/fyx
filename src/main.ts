import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { VueQueryPlugin } from 'vue-query'
import App from './App.vue'
import routes from '~pages'
import './tailwind.css'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App).use(VueQueryPlugin).use(router).mount('#app')
