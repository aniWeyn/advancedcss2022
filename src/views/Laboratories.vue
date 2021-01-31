<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <h1>Laboratory</h1>
      <ul>
        <li>
          <router-link to="/laboratories/laboratory01"
            >Laboratory 01 - 25.01.2020</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory02"
            >Laboratory 02 - 01.02.2020</router-link
          >
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
