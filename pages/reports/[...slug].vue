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
        name="report"
        :colour="$route.path.includes('magnet') ? 'bg-blue-950' : 'bg-[#072d0e]'"
        :hover-colour="$route.path.includes('magnet') ? 'rgb(197, 217, 234, 0.15)' : 'rgba(29, 216, 101, 0.1)'"
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
              <li class="py-2"><a href="#welcome" class="nav-link nav-active">Introduction</a></li>
              <li class="py-2"><a href="#my-team" class="nav-link report-link">Report</a></li>
              <li class="py-2"><a href="#kudos" class="nav-link">Kudos</a></li>
              <li class="py-2"><a href="#conclusion" class="nav-link">Conclusion</a></li>
              <li class="py-2"><a href="#goals" class="nav-link">Goals</a></li>
            </ul>
          </nav>
        </template>

        <ContentRenderer :value="doc" class="report w-full mx-auto prose text-slate-400 prose-strong:text-slate-400 prose-headings:text-slate-400 prose-a:text-slate-300" />
      </NuxtLayout>
    </template>
  </ContentDoc>
</template>

<script>
export default defineNuxtComponent({
  name: 'ReportPage',
})
</script>

<style>
.report img {
  max-height: 128px;
  height: auto;
  align-self: center;
  background: white;
}

.report h3 {
  margin-top: 3rem;
}

.report p:has(> img) {
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
