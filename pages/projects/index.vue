<template>
  <NuxtLayout
    name="basic"
    colour="bg-slate-900"
    hover-colour="rgba(29, 78, 216, 0.15)"
  >
    <h1>PROJECTS</h1>
    <section class="flex flex-col mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div :id="project.id" v-for="project in Projects" class="flex col-span-1 flex-col justify-start rounded-sm p-4 leading-snug">
          <NuxtLink :to="project.link" class="peer flex flex-row flex-1 justify-between gap-4 hover:bg-slate-600/50">
            <nuxt-img v-if="project.logo" :src="project.logo" alt="Project Image" class="w-1/6 h-min" />
            <div>
              <div class="flex flex-row justify-between">
                <p class="text-white font-bold">{{ project.title }}</p>
                <p class="text-white font-semibold text-xs">{{ project.year }}</p>
              </div>
              <p>{{ project.content }}</p>
            </div>
          </NuxtLink>
          <ul class="flex flex-wrap mt-auto mb-0 peer-hover:bg-slate-600/50">
            <li class="m-2" v-for="tag in project.tags">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ tag }}</div>
            </li>
            <div class="m-2 ml-auto mr-0">
              <a class="flex items-center rounded-sm bg-slate-400/10 px-6 py-2 text-xs font-medium leading-5 text-slate-300" :href="`https://github.com/${project.github}`">
                <Icon name="uil:github" color="white" size="2em" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import Projects from '~/data/projects';

export default {
  name: 'ProjectsPage',

  data() {
    return {
      Projects,
    };
  },
}
</script>