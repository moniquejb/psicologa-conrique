<template>
	<ContentRenderer v-if="home" :value="home" />
	<div v-else>Home not found</div>
	<div class="text-tertiary">Hey</div>
	<div class="bg-blue-400">Hey</div>
	<UButton color="secondary">Button</UButton>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
	title: home.value?.title,
	description: home.value?.description
})
</script>

