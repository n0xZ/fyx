<script setup lang="ts">
	import FilmItem from './FilmItem.vue'
	import { Film } from '~/types'

	interface Props {
		films: Film[]
	}
	const props = defineProps<Props>()
</script>

<template>
	<article class="grid xl:grid-cols-3 grid-cols-1 place-items-center gap-5">
		<film-item v-for="film in props.films" :key="film.id" :film="film" />
	</article>
</template>
