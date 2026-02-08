<template>
  <NuxtLayout
    name="main"
    :colour="doc.colour"
    :hover-colour="doc.hoverColour"
  >
    <template #header>
      <div class="flex flex-row">
        <div class="w-1/6">
          <img :src="doc.image" alt="Company Logo" class="h-auto" />
        </div>
        <div class="flex flex-col w-5/6">
          <h1 class="text-4xl text-slate-200 font-bold">{{doc.company}}</h1>
          <h2 class="text-2xl text-slate-300 font-medium">{{doc.role}}</h2>
          <p>{{doc.period}}</p>
        </div>
      </div>

      <nav class="hidden lg:block">
        <ul class="mt-16">
          <li class="py-2"><a href="#introduction-section" class="nav-link">INTRODUCTION</a></li>
          <li class="py-2"><a href="#report-section" class="nav-link">REPORT</a></li>
          <li class="py-2"><a href="#kudos-section" class="nav-link">KUDOS</a></li>
          <li class="py-2"><a href="#goals-section" class="nav-link">GOALS</a></li>
          <li class="py-2"><a href="#conclusion-section" class="nav-link">CONCLUSION</a></li>
        </ul>
      </nav>
    </template>

    <ContentRenderer :value="doc" class="report w-full max-w-full mx-auto prose text-slate-400 prose-code:text-slate-200 prose-strong:text-slate-400 prose-headings:text-slate-400 prose-a:text-slate-300" />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const slug = route.path.toLowerCase()

const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection('reports').path(route.path).first()
});
if (!doc.value) {
  throw createError({ statusCode: 404, message: 'Report not found' })
}
</script>

<script>
export default defineNuxtComponent({
  name: 'ReportPage',
  
  mounted() {
    this.addHasImgClass();
  },

  methods: {
    addHasImgClass() {
      const paragraphs = document.querySelectorAll('p');

      paragraphs.forEach(function (paragraph) {
        const hasImgChild = paragraph.querySelector('img') !== null;

        // If it has a child <img> element, add a class to it
        if (hasImgChild) {
          paragraph.classList.add('has-image');
        }
      });
    }
  }
})
</script>

<style>
.report img {
  max-height: 128px;
  height: auto;
  align-self: center;
  background: white;
  padding: 2px;
}

.report h3 {
  margin-top: 3rem;
}

.report .has-image {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.report iframe {
  margin: 10px auto;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: #000;
  --tw-shadow: var(--tw-shadow-colored);
}
</style>
