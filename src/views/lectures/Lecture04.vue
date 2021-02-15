<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Slide01 v-if="render === 1" />
    <Slide02 v-if="render === 2" />
    <Slide03 v-if="render === 3" />
    <Slide04 v-if="render === 4" />
    <Slide05 v-if="render === 5" />
    <Slide0sass01 v-if="render === 6" />
    <Slide0sass02 v-if="render === 7" />
    <Slide0sass03 v-if="render === 8" />
    <Slide0sass04 v-if="render === 9" />
    <Slide0sass05 v-if="render === 10" />
    <Slide0sass06 v-if="render === 11" />
    <Slide0sass07 v-if="render === 12" />
    <Slide0sass08 v-if="render === 13" />
    <Slide0sass09 v-if="render === 14" />
    <div class="button-navigation">
      <div>
        <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      </div>
      <div>
        <button v-if="render != 14" v-on:click="render += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture04/slide00.vue";
import Slide01 from "@/components/lecture04/slide01.vue";
import Slide02 from "@/components/lecture04/slide02.vue";
import Slide03 from "@/components/lecture04/slide03.vue";
import Slide04 from "@/components/lecture04/slide04.vue";
import Slide05 from "@/components/lecture04/slide05.vue";
import Slide0sass01 from "@/components/lecture04/slide-sass01.vue";
import Slide0sass02 from "@/components/lecture04/slide-sass02.vue";
import Slide0sass03 from "@/components/lecture04/slide-sass03.vue";
import Slide0sass04 from "@/components/lecture04/slide-sass04.vue";
import Slide0sass05 from "@/components/lecture04/slide-sass05.vue";
import Slide0sass06 from "@/components/lecture04/slide-sass06.vue";
import Slide0sass07 from "@/components/lecture04/slide-sass07.vue";
import Slide0sass08 from "@/components/lecture04/slide-sass08.vue";
import Slide0sass09 from "@/components/lecture04/slide-sass09.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide0sass01,
    Slide0sass02,
    Slide0sass03,
    Slide0sass04,
    Slide0sass05,
    Slide0sass06,
    Slide0sass07,
    Slide0sass08,
    Slide0sass09,
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
