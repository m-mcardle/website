<template>
  <div>
    <slot />
  </div>
</template>

<script>
useSeoMeta({
  title: 'Matt McArdle\'s Portfolio',
  description: 'Website containing Matt McArdle\'s portfolio and co-op work reports.',
  ogTitle: 'Matt McArdle\'s Portfolio',
  ogDescription: 'Website containing Matt McArdle\'s portfolio and co-op work reports.',
  ogImage: '/favicon/android-chrome-512x512.png',
  ogUrl: 'https://mmcardle.ca',
  twitterTitle: 'Matt McArdle\'s Portfolio',
  twitterDescription: 'Website containing Matt McArdle\'s portfolio and co-op work reports.',
  twitterImage: '/favicon/android-chrome-512x512.png',
  twitterCard: 'summary'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
});
</script>