<script setup lang="ts">
	import { useQuery } from 'vue-query'
	import PeopleList from '~/components/people/PeopleList.vue'
	import Loading from '~/components/Loading.vue'
	import { getAllPeople } from '~/services/people'

	const { data: people, isLoading } = useQuery('people', getAllPeople)
</script>

<template>
	<section>
		<h2 class="text-center xl:text-3xl text-2xl mt-3 mb-4">
			Lista de personajes
		</h2>
		<Loading v-if="isLoading" />
		<people-list v-else :people="people!" />
	</section>
</template>
