<script setup lang="ts">
	import LandingAsset from '~/assets/ghibli-logo.webp'
</script>

<template>
	<section className="h-full hero ">
		<article className="flex-col hero-content lg:flex-row">
			<img
				className="rounded-lg shadow-xl"
				height="500"
				width="500"
				:src="LandingAsset"
				alt="Imagen de la landing."
			/>
			<aside className="text-center">
				<h1 className="text-5xl font-bold">
					Revive tu infancia, de parte del Estudio Ghibli!
				</h1>
				<p className="py-6">
					Fyx es una página que contiene información de las películas y los
					personajes del Estudio Ghibli.
				</p>
				<router-link to="/films/view" className="btn btn-primary">
					Comenzar ya
				</router-link>
			</aside>
		</article>
	</section>
</template>
