<template>
	<div
		class="flex flex-col bg-white rounded shadow-2xl shadow-black/10 divide-y divide-theme-light-very-light-grayish-blue text-theme-light-very-dark-grayish-blue"
	>
		<div v-for="todo in todos" class="px-6 py-4">
			<span v-text="todo.text" :class="{ 'line-through text-theme-light-light-grayish-blue': todo.done }" />
		</div>

		<div class="flex justify-between gap-4 px-5 py-3 text-sm text-theme-light-dark-grayish-blue">
			<p v-text="todos.length + ' items left'" class="flex flex-grow basis-0" />

			<TodoFilter />

			<button class="text-right flex justify-end flex-grow basis-0">Clear Completed</button>
		</div>
	</div>
</template>

<script setup>
import TodoFilter from "@/components/TodoFilter.vue";

const props = defineProps({
	todos: Array,
});
</script>
