<template>
  <ContentDoc tag="article" class="w-full mx-auto" :path="$route.path.toLowerCase()">
    <template #not-found>
      oops nothing here
    </template>

    <template #empty>
      oops empty
    </template>

    <template #default="{ doc }">
      <NuxtLayout
        name="project"
      >
        <ContentRenderer :value="doc" class="project w-full mx-auto text-white prose prose-headings:text-white prose-a:text-white" />
      </NuxtLayout>
    </template>
  </ContentDoc>
</template>

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
</style>
