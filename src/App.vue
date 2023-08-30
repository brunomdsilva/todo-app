<template>
	<div class="relative min-h-screen bg-theme-light-very-light-gray py-28">
		<img src="imgs/bg-desktop-light.jpg" alt="" class="absolute top-0 inset-x-0 w-full object-cover" />

		<Container class="relative flex flex-col gap-8">
			<div class="flex items-center justify-between gap-4">
				<h2 class="text-5xl font-bold tracking-[0.42em] text-white">TODO</h2>

				<button class="p-2">
					<component :is="isDarkMode ? IconSun : IconMoon" class="w-6" />
				</button>
			</div>

			<TodoInput />

			<TodoList :todos="todos" />
		</Container>
	</div>
</template>

<script setup>
import Container from "@/components/Container.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import IconSun from "@/components/icons/IconSun.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import { ref } from "vue";

const todos = ref([
	{ text: "Complete online JavaScript course", done: true },
	{ text: "Jog around the park 3x", done: false },
	{ text: "10 minutes meditation", done: false },
	{ text: "Read for 1 hour", done: false },
	{ text: "Pick up groceries", done: false },
	{ text: "Complete Todo App on Frontend Mentor", done: false },
]);

const isDarkMode = ref(false);

function toggleDarkMode() {
	isDarkMode.value = !isDarkMode.value;
}
</script>
