<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs

	import { computed } from '@vue/reactivity'
	import { ref } from 'vue'

	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)
</script>

<template>
	<section class="flex flex-col items-center mx-auto mt-12">
		<h1>Bienvenido a: mi playground.</h1>
		<button
			class="py-2 px-5 w-24 rounded-xl border-amber-200 border-2"
			@click="count++"
		>
			{{ count }}
		</button>
	<p>Doble : {{doubleCount}}</p>
	</section>
</template>
