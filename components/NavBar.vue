<template>
  <div class="w-full flex flex-row justify-between md:px-32 px-12 pt-4">
    <div class="icon md:flex flex-row justify-center items-center hidden">
      <!-- TODO: maybe add an icon here? -->
    </div>

    <div class="links flex flex-row justify-evenly md:w-1/2 w-full">
      <NuxtLink to="/" class="flex flex-row justify-center items-center hover:bg-slate-600/50 rounded-sm leading-snug">
        About
      </NuxtLink>
      <NuxtLink to="/reports/vidyards22" class="flex flex-row justify-center items-center hover:bg-slate-600/50 rounded-sm leading-snug">
        Vidyard
      </NuxtLink>
      <NuxtLink to="/reports/magnet" class="flex flex-row justify-center items-center hover:bg-slate-600/50 rounded-sm leading-snug">
        Magnet Forensics
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style scoped>
p {
  line-height: normal !important;
}
.router-link-active {
  font-weight: bold;
}
</style>
