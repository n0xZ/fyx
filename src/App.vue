<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs

	import { computed } from '@vue/reactivity'
	import { ref } from 'vue'

	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)
</script>

<template>
	<router-view />
</template>
