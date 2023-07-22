<template>
  <div class="flex flex-row gap-8 border-b-2 py-2">
    <div class="flex flex-row w-full justify-start gap-2 items-baseline mb-0 mt-auto">
      <div class="text-lg text-slate-400 font-bold">
        {{ title }}
      </div>
      <div class="text-sm text-slate-400">
        {{ subtitle }}
      </div>
    </div>
    <div :class="`flex w-fit rounded-lg text-center px-4 py-2 my-auto text-white font-bold shadow-sm shadow-slate-200 ${colour}`">
      {{ level }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoalHeading',

  props: {
    level: {
      type: String,
      required: true,
      validator: (value) => {
        return ['Outstanding', 'Success', 'Satisfactory', 'Failure'].includes(value)
      },
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    }
  },

  computed: {
    colour() {
      switch (this.level) {
        case 'Outstanding':
          return 'bg-[#147526]'
        case 'Success':
          return 'bg-[#3B9E1C]'
        case 'Satisfactory':
          return 'bg-[#B3C323]'
        case 'Failure':
          return 'bg-[#AC2620]'
      }
    },
  },
}
</script>
