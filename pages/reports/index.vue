<template>
  <main>
    <ContentList path="/reports" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h1>{{ article._path }}</h1>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>{{ article.image }}</p>
        <img :src="article.image" />
      </div>
    </ContentList>
  </main>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$route.path);
    }
  }
</script>
