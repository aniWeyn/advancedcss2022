<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <h1>Course</h1>
      <h4>January 10, 2022</h4>
      <ol>
        <li>
          <router-link to="/lectures/lecture00"
            >Course organisation, schedule and assignments</router-link
          >
        </li>
      </ol>
      <ol start="2">
        <li>
          <router-link to="/lectures/lecture01"
            >CSS resources and scrollytelling</router-link
          >
        </li>
        <li>
          <router-link to="/lectures/interactionsOnWeb"
            >Interactions on Web</router-link
          >
        </li>
      </ol>
      <ol start="4">
        <li>
          <router-link to="/lectures/intersectionObserver"
            >JavaScript - Intersection Observer</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory08io"
            >Lab: Introduction to CodePen
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory08io"
            >Lab: Introduction to Intersection Observer API
          </router-link>
        </li>
      </ol>
      <ol start="7">
        <li>
          <router-link to="/lectures/lecture08">CSS Selectors </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07"
            >Lab: CSS Selectors - Combinators
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_02"
            >Lab: CSS Selectors - Attribute Selectors
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_03"
            >Lab: CSS Selectors: pseudo classes - :nth-child()
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_04"
            >Lab: CSS Selectors: pseudo classes - :nth-last-child()
          </router-link>
        </li>
      </ol>
      <ol start="12">
        <li>
          <router-link to="/lectures/lecture07">CSS Shapes </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06a-tasks"
            >Lab: CSS Shapes with border-radius</router-link
          >
        </li>
      </ol>
      <ol start="12">
        <li>
          <router-link to="/laboratories/laboratory06a-tasks"
            >Lab: Intersection Observer + CSS Shapes and Selectors</router-link
          >
        </li>
      </ol>
      <!--
        <h4>January 11, 2022</h4>
        <ol start="14">
           <li>
          <router-link to="/lectures/lecture07"
            >CSS Transformations, Transitions and Animations
          </router-link>
        </li>
                <li>
          <router-link to="/laboratories/laboratory06b"
            >Lab: CSS Transform</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory06c"
            >Lab: CSS Transitions</router-link
          >
        </li>
              </ol>
              <h4>January 12, 2022</h4>
              <ol start="14">
                      <li>
          <router-link to="/lectures/lecture06"
            >Lecture 6 - Animating SVG
          </router-link>        </li> 
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
          <router-link to="/laboratories/laboratory04"
            >Laboratory 04 - 22.02.2021</router-link
          >
        </li>

        </ol>
              <h4>January 13, 2022</h4>
              <ol start="14">
              <li>Guest lecture</li>
                                    <li>
          <router-link to="/lectures/lecture11"
            >Lecture 11 - Flexbox, CSS Grid, CSS Units, Text Effects
          </router-link>
          
        </li>

        <li>
          <router-link to="/laboratories/laboratory09flex"
            >Laboratory 09 - 26.04.2021 - Flexbox
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory09grid"
            >Laboratory 09 - 26.04.2021 - CSS Grid
          </router-link>
        </li>
              </ol>
              <h4>January 14, 2022</h4>
              <ol start="14"></ol>
<h4>February 14, 2022</h4>
<ol start="14">
          <li>
          <router-link to="/lectures/lecture03"
            >Lecture 3 - Accessibility for designing / Designing for animation
          </router-link>
        </li>
                <li>
          <router-link to="/laboratories/laboratory02"
            >Laboratory 02 - 01.02.2021</router-link
          >
        </li>
</ol>
<h4>February 15, 2022</h4>
<ol start="14">
  L7: Working with Visual Studio Code and GitHub and Project Management (w7)
        <li>
          <router-link to="/laboratories/laboratory01"
            >Laboratory 01 - 25.01.2021</router-link
          >
        </li>
</ol>
<h4>March 14, 2022</h4>
<ol start="14">
  <li>
          <router-link to="/lectures/lecture02"
            >Lecture 2 - Architecting CSS</router-link
          >
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
          <a href="https://github.com/aniWeyn/advanced_css_examples"
            >GitHub repository: SASS variables, CSS variables</a
          >
        </li>
                <li>
          <router-link to="/laboratories/laboratory03"
            >Laboratory 03 - 15.02.2021</router-link
          >
        </li>
</ol>
<h4>March 15, 2022</h4>
<ol start="14">        <li>
          <router-link to="/lectures/lecture10"
            >Lecture 10 - Performance (lazy loading, intersection observer)
          </router-link>
        </li>
                <li>
          <router-link to="/laboratories/laboratory08"
            >Laboratory 08 - 19.04.2021 - Lazy Loading
          </router-link>
        </li>
        
        </ol>
<h4>April 4, 2022</h4>
<ol start="14">
          <li>
          <router-link to="/lectures/lecture09"
            >Lecture 9 - CSS Frameworks
          </router-link>
        </li>
</ol>
<h4>April 25, 2022</h4>
<ol start="14">
  <li>L11: TBA, Final Presentation (w17)</li>
</ol>-->
    </article>
    <Sidebar />
    <Sources />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {
    Sidebar,
    Sources,
    Footer,
    Navigation,
  },
};
</script>
