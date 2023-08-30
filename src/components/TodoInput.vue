<template>
	<label class="bg-white rounded shadow-md">
		<input
			type="text"
			placeholder="Create a new todo..."
			v-model="input"
			class="bg-transparent py-4 px-6 w-full focus:outline-none text-theme-dark-very-dark-blue"
		/>
	</label>
</template>

<script setup>
import { ref } from "vue";

const input = ref("");
</script>
