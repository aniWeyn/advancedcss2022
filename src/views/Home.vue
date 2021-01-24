<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <div class="home">
        <HelloWorld msg="Welcome to Advanced CSS course" />
        <p>Page under construction!</p>
      </div>
    </article>
    <Sidebar />
    <Sources />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Sidebar from "@/components/Sidebar";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {
    Sidebar,
    Sources,
    HelloWorld,
    Footer,
    Navigation,
  },
};
</script>
