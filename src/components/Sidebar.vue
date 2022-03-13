<template>
  <aside class="side">
    <h3>Course description:</h3>
    <a
      target="_blank"
      href="https://www.ntnu.edu/studies/courses/IDG1293#tab=omEmnet"
      >IDG1293</a
    >
    <br />
    <a
      target="_blank"
      href="https://www.ntnu.edu/studies/courses/IDG1293#tab=timeplan"
      >Timeplan</a
    >
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fs7bina%2Fposts%2F5952803654746624&show_text=true&width=500" width="500" height="198" style="border:none;overflow:hidden" scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fs7bina%2Fposts%2F5952865571407099&show_text=true&width=500" width="500" height="198" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
aside{
    position: sticky;
  top: 0;
}
</style>