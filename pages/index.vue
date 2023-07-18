<template>
  <!-- https://brittanychiang.com/ -->
  <div class="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-full">
    <div class="group/spotlight relative">
      <NavBar />
      <div id="background" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
      <div class="px-6 lg:px-24 min-h-screen flex">
        <header class="py-24 w-1/2 sticky top-0 h-screen">
          <h1 class="text-4xl text-slate-200 font-bold">Matt McArdle</h1>
          <h2 class="text-2xl text-slate-300 font-medium">Software Engineer / Student</h2>

          <nav>
            <ul class="mt-16">
              <li class="py-2"><a href="#about" class="about-link">ABOUT</a></li>
              <li class="py-2"><a href="#experience">EXPERIENCE</a></li>
              <li class="py-2"><a href="#education">EDUCATION</a></li>
              <li class="py-2"><a href="#projects">PROJECTS</a></li>
            </ul>
          </nav>
        </header>

        <main class="py-12 w-1/2">
          <section id="about" class="py-24">
            <h2>ABOUT</h2>
            <p class="mb-4">{{ PageData.about.paragraph_one }}</p>
            <p>{{ PageData.about.paragraph_two }}</p>
          </section>

          <section id="experience" class="flex flex-col py-24 gap-4">
            <h2>EXPERIENCE</h2>
            <NuxtLink to="/reports/vidyardw23" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
              <div class="flex flex-row">
                <div class="flex flex-col justify-between w-1/5">
                  <p class="text-xs font-bold">JAN - AUG 2023</p>
                  <img :src="VidyardLogo" alt="Vidyard Logo" class="w-16" />
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
              </ul>
            </NuxtLink>
            <NuxtLink to="/reports/vidyards22" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
              <div class="flex flex-row">
                <div class="flex flex-col justify-between w-1/5">
                  <p class="text-xs font-bold">MAY - AUG 2022</p>
                  <img :src="VidyardLogo" alt="Vidyard Logo" class="w-16" />
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
              </ul>
            </NuxtLink>
            <NuxtLink to="/reports/magnet" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
              <div class="flex flex-row">
                <div class="flex flex-col justify-between w-1/5">
                  <p class="text-xs font-bold">MAY - DEC 2021</p>
                  <img :src="MagnetLogo" alt="Magnet Forensics Logo" class="w-16" />
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
                  <div class="flex items-center rounded-sm bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-300 ">More Info</div>
                </div>
              </ul>
            </NuxtLink>
          </section>

          <section id="education" class="flex flex-col py-24 gap-4">
            <h2>EDUCATION</h2>
            <div class="flex flex-row justify-start rounded-sm p-4 leading-snug">
              <div class="flex flex-col justify-between w-1/5">
                <p class="text-xs font-bold">2019 - 2024</p>
                <img :src="UoGLogo" alt="University of Guelph Logo" class="w-16" />
              </div>
              <div class="flex flex-col w-4/5">
                <p class="text-white font-bold">B.Comp, Software Engineering (Co-op) · University of Guelph</p>
                <p class="text-white font-semi-bold text-xs mb-2">Minor in Business</p>
                <p>I am a Dean's List student with a cumulative GPA of 90.1%, and my targeted graduation is May 2024. I am also a recipient of the Braithwaite Business Scholarship for excellence in my minor and was named the 2023 Co-op Student of the Year.</p>
              </div>
            </div>
          </section>

          <section id="projects" class="flex flex-col py-24 gap-4">
            <h2>PROJECTS</h2>
            <div v-for="project in Projects" :key="project.id" class="flex flex-col justify-start hover:bg-slate-600/50 rounded-sm p-4 leading-snug">
              <a :href="`/projects/${project.link}`">
                <div class="flex flex-row justify-between gap-4">
                  <img v-if="project.logo" :src="project.logo" alt="Project Image" class="w-1/6 h-fit" />
                  <div>
                    <p class="text-white font-bold mb-2">{{ project.title }}</p>
                    <p>{{ project.content }}</p>

                    <ul class="flex flex-wrap">
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
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
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
  
  mounted() {
    document.addEventListener('mousemove', function(event) {
      const userCursorX = event.clientX; // X-coordinate relative to the viewport
      const userCursorY = event.clientY; // Y-coordinate relative to the viewport
      const scrollY = window.scrollY; // Current vertical scroll position

      const userCursorYAdjusted = userCursorY + scrollY;

      // Apply the style to an element using the cursor position
      const element = document.getElementById('background');
      element.style.background = `radial-gradient(600px at ${userCursorX}px ${userCursorYAdjusted}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    });

    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
    });

    this.updateActiveNavLink();
  },

  methods: {
    updateActiveNavLink() {
      var sections = document.getElementsByTagName('section');
      var navLinks = document.getElementsByTagName('a');

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();
        var sectionTop = rect.top;
        var sectionBottom = rect.bottom;

        if (sectionTop <= 10 && sectionBottom > -10) {
          for (var j = navLinks.length - 1; j >= 0; j--) {
            var navLink = navLinks[j];
            if (navLink.getAttribute('href') === '#' + section.id) {
              navLink.classList.add('nav-active');
            } else {
              navLink.classList.remove('nav-active');
            }
          }
        }
      }

      let foundSection = !!document.querySelector('.nav-active');
      if (!foundSection) {
        let reportLink = document.querySelector('.about-link');
        reportLink.classList.add('nav-active');
      }
    }
  }
});
</script>

<style scoped>
img {
  opacity: 0.9;
}

.nav-active {
  color: #99b3ff;
  font-weight: bold;
}

.nav-active:after {
  content: " —";
}
</style>
