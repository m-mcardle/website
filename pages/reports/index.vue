<template>
  <NuxtLayout
    name="basic"
    colour="bg-slate-900"
    hover-colour="rgba(29, 78, 216, 0.15)"
  >
    <h1>REPORTS</h1>
    <section class="flex flex-col mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div :id="report.id" v-for="report in Reports" class="flex col-span-1 flex-col justify-start rounded-sm p-4 leading-snug">
          <NuxtLink :to="report._path" class="peer flex flex-row justify-between gap-4 hover:bg-slate-600/50">
            <nuxt-img v-if="report.image" :src="report.image" alt="Report Image" class="w-1/6 h-min" />
            <div>
              <div class="flex flex-row justify-between">
                <p class="text-white font-bold">{{ report.title }}</p>
                <p class="text-white font-semibold text-xs">{{ report.period }}</p>
              </div>
              <p>{{ report.description }}</p>
            </div>
          </NuxtLink>
          <ul class="flex flex-wrap mt-auto mb-0 peer-hover:bg-slate-600/50">
            <li class="m-2" v-for="tag in report.tags">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ tag }}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  name: 'ReportsPage',

  data() {
    return {
      Reports: [],
    };
  },

  async created() {
    const data = await queryContent('reports').where({ _draft: false }).find();
    this.Reports = data;
  },
}
</script>