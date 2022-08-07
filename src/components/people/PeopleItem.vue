<script setup lang="ts">
	import { People } from '~/types'

	interface Props {
		person: People
	}
	const props = defineProps<Props>()
</script>

<template>
	<aside class="relative card w-80 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title flex flex-row items-center">
				{{ props.person.name }}
				<div class="badge badge-secondary">{{ props.person.gender }}</div>
			</h2>
			<p>{{ props.person.age }}</p>
			<div class="card-actions justify-end">
				<a class="btn" :href="`https://ghibli.fandom.com/wiki/${props.person.name}`"
					>Ver en wikipedia</a
				>
			</div>
		</div>
	</aside>
</template>
