<script setup lang="ts">
	import PeopleItem from './PeopleItem.vue'
	import { People } from '~/types'

	interface Props {
		people: People[]
	}
	const props = defineProps<Props>()
</script>

<template>
	<article class="grid xl:grid-cols-3 grid-cols-1 place-items-center gap-5">
		<people-item
			v-for="person in props.people"
			:key="person.id"
			:person="person"
		/>
	</article>
</template>
