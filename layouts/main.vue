<template>
  <div :class="`${colour} leading-relaxed text-slate-400 antialiased selection:bg-slate-300 selection:text-slate-900 h-full`">
    <div class="group/spotlight relative">
      <div id="background" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
      <div class="px-6 lg:px-24 lg:min-h-screen flex flex-col lg:flex-row">
        <header class="py-24 lg:w-2/5 lg:sticky lg:top-0 lg:h-screen">
          <slot name="header" />
        </header>

        <main class="py-12 lg:w-3/5">
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
    window.addEventListener('scroll', () => this.updateActiveLink());

    this.updateActiveLink();
  },

  props: {
    colour: {
      type: String,
      default: 'bg-[#072d0e]'
    },
    hoverColour: {
      type: String,
      default: 'rgba(29, 216, 101, 0.1)'
    }
  },

  methods: {
    updateActiveLink() {
      const links = document.querySelectorAll('a.nav-link');
      const sections = document.querySelectorAll('section');

      let closestSectionIndex = 0;
      let closestSectionDistance = Number.MAX_VALUE;

      // Find the closest section to the user's scroll position
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const distanceToTop = Math.abs(section.getBoundingClientRect().top);
        if (distanceToTop < closestSectionDistance) {
          closestSectionIndex = i;
          closestSectionDistance = distanceToTop;
        }
      }

      // Remove active-link class from all links
      links.forEach(link => {
        link.classList.remove('nav-active');
      });

      // Add active-link class to the link corresponding to the closest section
      links[closestSectionIndex].classList.add('nav-active');
    },

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
