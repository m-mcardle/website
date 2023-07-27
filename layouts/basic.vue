<template>
  <div :class="`${colour} leading-relaxed text-slate-400 antialiased selection:bg-slate-300 selection:text-slate-900 h-full`">
    <div class="group/spotlight relative">
      <NavBar />
      <div id="background" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
      <div class="px-6 lg:px-24 min-h-screen flex flex-col">
        <main class="py-12">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('mousemove', (event) => this.updateHoverEffect(event));
  },

  props: {
    colour: {
      type: String,
      default: 'bg-slate-900'
    },
    hoverColour: {
      type: String,
      default: 'rgba(29, 78, 216, 0.15)'
    }
  },

  methods: {
    updateHoverEffect(event) {
      const userCursorX = event.clientX; // X-coordinate relative to the viewport
      const userCursorY = event.clientY; // Y-coordinate relative to the viewport
      const scrollY = window.scrollY; // Current vertical scroll position

      const userCursorYAdjusted = userCursorY + scrollY;

      // Apply the style to an element using the cursor position
      const element = document.getElementById('background');
      element.style.background = `radial-gradient(600px at ${userCursorX}px ${userCursorYAdjusted}px, ${this.hoverColour}, transparent 80%)`;
    }
  }
}
</script>

<style>
.nav-active {
  color: white;
  font-weight: bold;
}

.nav-active:after {
  content: " —";
}
</style>
