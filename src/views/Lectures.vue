<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <h1>Lectures</h1>
      <ul>
        <li><router-link to="/lectures/lecture00">Lecture 0</router-link></li>
        <li><router-link to="/lectures/lecture01">Lecture 1</router-link></li>
        <li><router-link to="/lectures/lecture02">Lecture 2</router-link></li>
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
