<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Slide01 v-if="render === 1" />
    <Slide02 v-if="render === 2" />
    <Slide03 v-if="render === 3" />
    <Slide04 v-if="render === 4" />
    <Slide05 v-if="render === 5" />
    <div class="button-navigation">
      <div>
        <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      </div>
      <div>
        <button v-if="render != 19" v-on:click="render += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture09-frameworks/slide00.vue";
import Slide01 from "@/components/lecture09-frameworks/slide01.vue";
import Slide02 from "@/components/lecture09-frameworks/slide02.vue";
import Slide03 from "@/components/lecture09-frameworks/slide03.vue";
import Slide04 from "@/components/lecture09-frameworks/slide04.vue";
import Slide05 from "@/components/lecture09-frameworks/slide05.vue";

export default {
  name: "Lecture09",
  components: {
    Slide00,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
  },
  data() {
    return {
      render: 0,
    };
  },
  methods: {
    add() {
      this.render + 1;
      return this.render;
    },
  },
};
</script>

<style>
.space {
  padding-bottom: 5px;
}

.bold {
  font-weight: 700;
}

.past {
  opacity: 0.2;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}

.three-columns {
  display: grid;
  grid-template-columns: 150px 1.1fr 0.9fr;
  gap: 40px;
  padding-top: 50px;
}

.rotate {
  transform: rotate(270deg);
  position: absolute;
  top: 20%;
  left: 0;
}

.flex {
  display: flex;
}

.font--small {
  font-size: 0.7em;
}
</style>
