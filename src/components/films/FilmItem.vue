<script setup lang="ts">
	import { computed } from '@vue/reactivity'
	import { Film } from '~/types'

	interface Props {
		film: Film
	}
	const props = defineProps<Props>()
	const FilmSlug = computed(() => props.film.title.replaceAll(' ', '_'))
</script>

<template>
	<aside class="relative card w-80 bg-base-100 shadow-xl image-full">
		<figure><img :src="props.film.image" alt="Shoes" /></figure>
		<div class="card-body">
			<h2 class="card-title flex flex-row items-center">
				{{ props.film.title }}
				<div class="badge badge-secondary">{{ props.film.release_date }}</div>
			</h2>
			<p>{{ props.film.description }}</p>
			<div class="card-actions justify-end">
				<a class="btn btn-primary" :href="`https://en.wikipedia.org/wiki/${FilmSlug}`"
					>Ver en wikipedia</a
				>
			</div>
		</div>
	</aside>
</template>
