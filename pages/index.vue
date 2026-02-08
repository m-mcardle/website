<template>
  <NuxtLayout
    name="main"
    colour="bg-slate-900"
    hover-colour="rgba(29, 78, 216, 0.15)"
  >
    <template #header>
      <h1 class="text-4xl text-slate-200 font-bold">Matt McArdle</h1>
      <h2 class="text-2xl text-slate-300 font-medium">Software Engineer</h2>

      <nav class="hidden lg:block">
        <ul class="mt-16">
          <li class="py-2"><a href="#about" class="nav-link">ABOUT</a></li>
          <li class="py-2"><a href="#experience" class="nav-link">EXPERIENCE</a></li>
          <li class="py-2"><a href="#education" class="nav-link">EDUCATION</a></li>
          <li class="py-2"><a href="#projects" class="nav-link">PROJECTS</a></li>
        </ul>
      </nav>
    </template>

    <section id="about" class="py-24">
      <h2>ABOUT</h2>
      <p class="mb-4">{{ PageData.about.paragraph_one }}</p>
      <p>{{ PageData.about.paragraph_two }}</p>
    </section>

    <section id="experience" class="flex flex-col py-24 gap-4">
      <NuxtLink to="/reports" class="hover:text-slate-200">
        <h2>EXPERIENCE</h2>
      </NuxtLink>
      <NuxtLink to="/reports/vidyardw23" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
        <div class="flex flex-row">
          <div class="flex flex-col justify-between w-1/5">
            <p class="text-xs font-bold">JAN - AUG 2023</p>
            <nuxt-img src="/images/Vidyard-Logo.png" alt="Vidyard Logo" class="w-16" />
          </div>
          <div class="flex flex-col w-4/5">
            <p class="text-white font-bold">Software Developer (Co-op) · Vidyard</p>
            <p class="text-sm mt-2">{{ PageData.experience.vidyard_w23.body }}</p>
          </div>
        </div>

        <ul class="flex flex-wrap">
          <li class="m-2" v-for="tag in PageData.experience.vidyard_w23.tags">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ tag }}</div>
          </li>
          <div class="m-2 ml-auto mr-0">
            <div class="flex items-center rounded-sm bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-300 align-bottom gap-2">
              More Info
              <Icon name="ion:open-sharp" color="white" size="1em" />
            </div>
          </div>
        </ul>
      </NuxtLink>
      <NuxtLink to="/reports/vidyards22" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
        <div class="flex flex-row">
          <div class="flex flex-col justify-between w-1/5">
            <p class="text-xs font-bold">MAY - AUG 2022</p>
            <nuxt-img src="/images/Vidyard-Logo.png" alt="Vidyard Logo" class="w-16" />
          </div>
          <div class="flex flex-col w-4/5">
            <p class="text-white font-bold">Software Developer (Co-op) · Vidyard</p>
            <p class="text-sm mt-2">{{ PageData.experience.vidyard_s22.body }}</p>
          </div>
        </div>

        <ul class="flex flex-wrap">
          <li class="m-2" v-for="tag in PageData.experience.vidyard_s22.tags">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ tag }}</div>
          </li>
          <div class="m-2 ml-auto mr-0">
            <div class="flex items-center rounded-sm bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-300 align-bottom gap-2">
              More Info
              <Icon name="ion:open-sharp" color="white" size="1em" />
            </div>
          </div>
        </ul>
      </NuxtLink>
      <NuxtLink to="/reports/magnet" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
        <div class="flex flex-row">
          <div class="flex flex-col justify-between w-1/5">
            <p class="text-xs font-bold">MAY - DEC 2021</p>
            <nuxt-img src="/images/Magnet-Logo.png" alt="Magnet Forensics Logo" class="w-16" />
          </div>
          <div class="flex flex-col w-4/5">
            <p class="text-white font-bold">Software Developer (Co-op) · Magnet Forensics</p>
            <p class="text-sm mt-2">{{ PageData.experience.magnet.body }}</p>
          </div>
        </div>

        <ul class="flex flex-wrap">
          <li class="m-2" v-for="tag in PageData.experience.magnet.tags">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ tag }}</div>
          </li>
          <div class="m-2 ml-auto mr-0">
            <div class="flex items-center rounded-sm bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-300 gap-2">
              More Info
              <Icon name="ion:open-sharp" color="white" size="1em" />
            </div>
          </div>
        </ul>
      </NuxtLink>
    </section>

    <section id="education" class="flex flex-col py-24 gap-4">
      <h2>EDUCATION</h2>
      <div class="flex flex-row justify-start rounded-sm p-4 leading-snug">
        <div class="flex flex-col justify-between w-1/5">
          <p class="text-xs font-bold">2019 - 2024</p>
          <nuxt-img src="/images/UoG-Logo.png" alt="University of Guelph Logo" class="w-16" />
        </div>
        <div class="flex flex-col w-4/5">
          <p class="text-white font-bold">B.Comp, Software Engineering (Co-op) · University of Guelph</p>
          <p class="text-white font-semi-bold text-xs mb-2">Minor in Business</p>
          <p>During my studies I was a Dean's List student with a cumulative GPA of 91.5%, and graduated with distinction in May of 2024. I am also a recipient of the Braithwaite Business Scholarship for excellence in my minor and was named the 2022 Co-op Student of the Year.</p>
        </div>
      </div>
    </section>

    <section id="projects" class="flex flex-col py-24 gap-4">
      <NuxtLink to="/projects" class="hover:text-slate-200">
        <h2>PROJECTS</h2>
      </NuxtLink>
      <div v-for="project in Projects" :key="project.id" class="flex flex-col justify-start rounded-sm leading-snug">
        <NuxtLink :to="project.link" class="peer flex flex-row justify-between gap-4 p-4 hover:bg-slate-600/50">
          <nuxt-img v-if="project.logo" :src="project.logo" alt="Project Image" class="w-1/6 h-min" />
          <div>
            <div class="flex flex-row justify-between">
              <p class="text-white font-bold">{{ project.title }}</p>
              <p class="text-white font-semibold text-xs">{{ project.year }}</p>
            </div>
            <p>{{ project.content }}</p>
          </div>
        </NuxtLink>
        <ul class="flex flex-wrap peer-hover:bg-slate-600/50">
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
    </section>
  </NuxtLayout>
</template>

<script>
import MagnetLogo from '~/assets/images/Magnet-Logo.png';
import VidyardLogo from '~/assets/images/Vidyard-Logo.png';
import UoGLogo from '~/assets/images/UoG-Logo.png';

import Projects from '~/data/projects';
import PageData from '~/data/home';

export default defineNuxtComponent({
  name: 'HomePage',

  data() {
    return {
      MagnetLogo,
      VidyardLogo,
      UoGLogo,
      Projects,
      PageData,
    };
  },

  head() {
    return {
      title: 'Matt McArdle | Software Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Matt McArdle's portfolio website",
        },
      ],
    };
  },
});
</script>

<style scoped>
img {
  opacity: 0.9;
}

.nav-active {
  color: #99b3ff;
}
</style>
