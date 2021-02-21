<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Slide01 v-if="render === 1" />
    <Slide02 v-if="render === 2" />
    <SlideSVG00 v-if="render === 3" />
    <SlideSVG01 v-if="render === 4" />
    <div class="button-navigation">
      <div>
        <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      </div>
      <div>
        <button v-if="render != 4" v-on:click="render += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture05/slide00.vue";
import Slide01 from "@/components/lecture05/slide01.vue";
import Slide02 from "@/components/lecture05/slide02.vue";
import SlideSVG00 from "@/components/lecture05/slideSVG00.vue";
import SlideSVG01 from "@/components/lecture05/slideSVG01.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01,
    Slide02,
    SlideSVG00,
    SlideSVG01,
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
