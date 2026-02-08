<template>
  <NuxtLayout name="project">
    <ContentRenderer :value="doc" class="project w-full mx-auto text-white prose prose-headings:text-white prose-a:text-white" />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const slug = route.path.toLowerCase()

const { data: doc } = await useAsyncData(slug, () => {
  return queryCollection('projects').path(slug).first()
});
if (!doc.value) {
  throw createError({ statusCode: 404, message: 'Project not found' })
}
</script>

<script>
export default defineNuxtComponent({
  name: 'ProjectPage',
});
</script>

<style>
.project img {
  max-height: 128px;
  height: auto;
  align-self: center;
  background: white;
}

.project code {
  color: white;
}
</style>
