<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <h1>Lectures</h1>
      <ul>
        <li>
          <router-link to="/lectures/lecture00"
            >Lecture 0 - Welcome and Course organisation</router-link
          >
        </li>
        <li>
          <router-link to="/lectures/lecture01"
            >Lecture 1 - Advanced CSS, let's begin!</router-link
          >
        </li>
        <li>
          <router-link to="/lectures/lecture02"
            >Lecture 2 - Architecting CSS</router-link
          >
        </li>
        <li>
          <router-link to="/lectures/lecture03"
            >Lecture 3 - Accessibility for designing / Designing for animation
          </router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture04"
            >Lecture 4 - Preprocessors... and SASS
          </router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture05"
            >Lecture 5 - CSS Variables vs. SASS variables and SVG
          </router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture06"
            >Lecture 6 - Animating SVG
          </router-link>
        </li>
      </ul>
    </article>
    <Sidebar />
    <Sources />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Navigation,
    Sidebar,
    Sources,
    Footer,
  },
};
</script>
