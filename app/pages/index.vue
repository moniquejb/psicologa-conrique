<template>
  <div>
    <h1 class="text-3xl font-bold underline text-primary">Hello world!</h1>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection("content").path("/").first());

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>
