<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <h1>Laboratory</h1>
      <ul>
        <li>
          <router-link to="/laboratories/laboratory01"
            >Laboratory 01 - 25.01.2021</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory02"
            >Laboratory 02 - 01.02.2021</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory03"
            >Laboratory 03 - 15.02.2021</router-link
          >
        </li>
        <li>
          <a href="https://github.com/aniWeyn/advanced_css_examples"
            >GitHub repository: SASS variables, CSS variables</a
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory04"
            >Laboratory 04 - 22.02.2021</router-link
          >
        </li>
        <li>
          <a target="_blank" href="https://github.com/aniWeyn/svg"
            >GitHub repository: intorudction to SVG</a
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory05"
            >Laboratory 05 - 01.03.2021 - Animating SVG</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory06a-tasks"
            >Laboratory 06 - 15.03.2021 - CSS Shapes with
            border-radius</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory06b"
            >Laboratory 06 - 15.03.2021 - CSS Transform</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory06c"
            >Laboratory 06a - 15.03.2021 - CSS Transitions</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory07"
            >Laboratory 07 - 22.03.2021 - CSS Selectors - Combinators
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_02"
            >Laboratory 07 - 22.03.2021 - CSS Selectors - Attribute Selectors
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_03"
            >Laboratory 07 - 22.03.2021 - CSS Selectors: pseudo classes -
            :nth-child()
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_04"
            >Laboratory 07 - 22.03.2021 - CSS Selectors: pseudo classes -
            :nth-last-child()
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory08"
            >Laboratory 08 - 19.04.2021 - Lazy Loading
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory08io"
            >Laboratory 08 - 19.04.2021 - Intersection Observer API
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
