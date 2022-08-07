<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import { useQueryProvider } from 'vue-query'

	useQueryProvider()
</script>

<template>
	<RouterView v-slot="{ Component }">
		<header
			class="w-full font-bold font-lato text-gray-50 bg-sky-600 font-rubik"
		>
			<nav class="container mx-auto navbar">
				<aside class="navbar-start">
					<h1 class="text-xl">
						<router-link to="/">Home</router-link>
					</h1>
				</aside>

				<aside class="hidden space-x-6 navbar-end xl:flex">
					<ul class="flex flex-row items-center space-x-3">
						<li><router-link to="/films/view">Peliculas</router-link></li>
						<li><router-link to="/people/view">Personajes</router-link></li>
					</ul>
				</aside>

				<aside class="navbar-end xl:hidden">
					<div class="dropdown dropdown-end">
						<label tabindex="0" class="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							class="p-2 mt-3 space-y-2 shadow menu menu-compact dropdown-content bg-sky-400 rounded-box w-52"
						>
							<li><router-link to="/films/view">Peliculas</router-link></li>
							<li><router-link to="/people/view">Personajes</router-link></li>
						</ul>
					</div>
				</aside>
			</nav>
		</header>
		<main class="h-screen">
			<component :is="Component" />
		</main>
	</RouterView>
</template>
