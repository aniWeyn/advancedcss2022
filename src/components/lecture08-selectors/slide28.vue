<template>
  <div>
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child"
        ><code>:nth-child</code></a
      >
      <p>
        Uses An+B notation to select elements from a list of sibling elements.
      </p>
    </section>

    <section>
      <pre>
          <code>
.box:empty {
  background: lime;
}
            </code>
        </pre>
    </section>
  </div>
</template>

<style scoped>
.inline {
  display: flex;
}

.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
</style>
