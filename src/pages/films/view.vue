<script setup lang="ts">
	import { useQuery } from 'vue-query'
	import FilmList from '~/components/films/FilmList.vue'
	import Loading from '~/components/Loading.vue'

	import { getAllFilms } from '~/services/films'
	const { data: films, isLoading } = useQuery('films', getAllFilms)
</script>

<template>
	<section class="container mx-auto">
		<h2 class="text-center xl:text-3xl text-2xl mt-3 mb-4">Lista de peliculas</h2>
		<Loading v-if="isLoading" />

		<film-list v-else :films="films!" />
	</section>
</template>
