<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <h1>Course</h1>
      <h4>January 10, 2022</h4>
      <ol>
        <li>
          <router-link to="/lecture00"
            >Course organisation, schedule and assignments</router-link
          >
        </li>
      </ol>
      <ol start="2">
        <li>
          <router-link to="/lecture01"
            >CSS resources and scrollytelling</router-link
          >
        </li>
        <li>
          <router-link to="/interactionsOnWeb">Interactions on Web</router-link>
        </li>
      </ol>
      <h4>January 11, 2022</h4>
      <ol start="4">
        <li>
          <router-link to="/intersectionObserver"
            >JavaScript - Intersection Observer</router-link
          >
        </li>
        <li>
          <router-link to="/labcodepen"
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
          <router-link to="/lectures/lecture02">Architecting CSS</router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture04"
            >Preprocessors with focus on SASS
          </router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture05">CSS Variables </router-link>
        </li>
      </ol>
      <ol start="10">
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
      <h4>January 12, 2022</h4>
      <ol start="11">
        <li>
          <router-link to="/cssshapes">CSS Shapes </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06a-tasks"
            >Lab: CSS Shapes with border-radius</router-link
          >
        </li>
      </ol>
      <ol start="13">
        <li>
          <router-link to="/labintersectionobservercssselectors"
            >Lab: Intersection Observer + CSS Shapes and Selectors</router-link
          >
        </li>
      </ol>
      <ol start="14">
        <li>
          <router-link to="/transformations">Transformations </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06b"
            >Lab: CSS Transform</router-link
          >
        </li>
        <li>
          <router-link to="/labsharing1">Your work!</router-link>
        </li>
      </ol>
      <h4>January 13, 2022</h4>
      <ol start="20">
        <li><strong>Guest lecture - Felipe Hefler</strong></li>
        <li>
          <router-link to="/transitions">Transitions </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06c"
            >Lab: CSS Transitions</router-link
          >
        </li>
        <li>
          <router-link to="/CSSanimations">Animations </router-link>
        </li>
      </ol>
      <ol start="24">
        <li>
          <router-link to="/labintersectionobservercssselectors"
            >Lab: Intersection Observer + Transformations, Transitions and
            Animations</router-link
          >
        </li>
      </ol>
      <h4>January 14, 2022</h4>
      <ol start="25">
        <li>Requirements for Assignent 1</li>
      </ol>
      <h4>February 14, 2022</h4>
      <ol start="26">
        <li>
          <router-link to="designingForAnimation"
            >Designing for animation
          </router-link>
        </li>
        <li>
          <router-link to="designingforanimationlab"
            >Lab: Designing for animation
          </router-link>
        </li>
      </ol>
      <ol start="28">
        <li>
          <router-link to="accessibility"
            >Accessibility in CSS (A11y)
          </router-link>
        </li>
      </ol>
      <h4>February 15, 2022</h4>
      <ol start="29">
        <li>
          Requirements for Assignment 2
        </li>
      </ol>
      <ol start="30">
        <li>
          <router-link to="/laboratories/laboratory01"
            >Lab: Visual Studio Code</router-link
          >
        </li>             
        <li>
          <router-link to="/laboratories/laboratory03"
            >Lab: SASS... what was that?</router-link
          >
        </li>
      </ol>
      <!--
    <h4>March 14, 2022</h4>
    <ol>
        <li>
          <router-link to="/svg"
            >Introduction to SVG
          </router-link>
        </li>
        <li>
          <router-link to="/svgDrawing"
            >Lab: Drawing basic SVG shapes
          </router-link>
        </li>
        <li>Guest Lecture: Moderninzing UI on Enterprise level </li>
        <li>
          <router-link to="/svgAnimationSMIL"
            >Animating SVG</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory05"
            >Lab: Animating SVG</router-link
          >
        </li>
      </ol>
      <h4>March 15, 2022</h4>
      <ol start="29">
        <li>
          Requirements for Assignment 3
        </li>
        <li>
          TBA
        </li>
      </ol>-->
            <!--    <ol start="14">
        </ol>
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
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {
    Sidebar,
    Footer,
    Navigation,
  },
};
</script>

<style>
.slide {
  min-height: 100vh;
}
</style>
