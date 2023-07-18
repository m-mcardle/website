<template>
  <div :class="`${colour} leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-full`">
    <div class="group/spotlight relative">
      <NavBar />
      <div id="background" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
      <div class="px-6 lg:px-24 lg:min-h-screen flex flex-col lg:flex-row">
        <header class="py-24 lg:w-1/2 lg:sticky lg:top-0 lg: lg:h-screen">
          <slot name="header" />
        </header>

        <main class="py-12 lg:w-1/2">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('mousemove', (event) => {
      const userCursorX = event.clientX; // X-coordinate relative to the viewport
      const userCursorY = event.clientY; // Y-coordinate relative to the viewport
      const scrollY = window.scrollY; // Current vertical scroll position

      const userCursorYAdjusted = userCursorY + scrollY;

      // Apply the style to an element using the cursor position
      const element = document.getElementById('background');
      element.style.background = `radial-gradient(600px at ${userCursorX}px ${userCursorYAdjusted}px, ${this.hoverColour}, transparent 80%)`;
    });

    window.addEventListener('scroll', () => {
      let sections = document.getElementsByTagName('h3');
      let navLinks = document.querySelectorAll('a.nav-link');

      for (let i = sections.length - 1; i >= 0; i--) {
        let section = sections[i];
        let rect = section.getBoundingClientRect();
        let sectionTop = rect.top;
        let sectionBottom = rect.bottom;

        if (sectionTop <= 20 && sectionBottom > -20) {
          for (let j = 0; j < navLinks.length; j++) {
            let navLink = navLinks[j];
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
        let reportLink = document.querySelector('.report-link');
        reportLink.classList.add('nav-active');
      }
    });
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
  }
}
</script>

<style>
.nav-active {
  color: #99ffa3;
  font-weight: bold;
}

.nav-active:after {
  content: " —";
}
</style>
