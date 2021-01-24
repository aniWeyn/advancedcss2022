<template>
  <nav id="nav" class="main-nav nav">
    <router-link to="/" class="main-nav__link">Home</router-link>

    <router-link to="/lectures" class="main-nav__link">Lectures</router-link>
    <router-link to="/laboratories" class="main-nav__link"
      >Laboratories</router-link
    >

    <router-link to="/about" class="main-nav__link">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>
