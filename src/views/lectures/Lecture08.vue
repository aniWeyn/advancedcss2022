<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Slide01a v-if="render === 1" />
    <Slide01 v-if="render === 2" />
    <Slide02 v-if="render === 3" />
    <Slide03 v-if="render === 4" />
    <Slide04 v-if="render === 5" />
    <Slide05 v-if="render === 6" />
    <Slide06 v-if="render === 7" />
    <Slide07 v-if="render === 8" />
    <Slide08 v-if="render === 9" />
    <Slide09 v-if="render === 10" />
    <Slide09a v-if="render === 11" />
    <Slide09b v-if="render === 12" />
    <Slide10 v-if="render === 13" />
    <Slide11 v-if="render === 14" />
    <Slide12 v-if="render === 15" />
    <Slide13 v-if="render === 16" />
    <Slide14 v-if="render === 17" />
    <Slide15 v-if="render === 18" />
    <Slide16 v-if="render === 19" />
    <Slide17 v-if="render === 20" />
    <Slide18 v-if="render === 21" />
    <Slide19 v-if="render === 22" />
    <Slide20 v-if="render === 23" />
    <Slide21 v-if="render === 24" />
    <Slide22 v-if="render === 25" />
    <Slide23 v-if="render === 26" />
    <Slide24 v-if="render === 27" />
    <Slide25 v-if="render === 28" />
    <Slide26 v-if="render === 29" />
    <Slide27 v-if="render === 30" />
    <Slide28 v-if="render === 31" />
    <Slide29 v-if="render === 32" />
    <Slide30 v-if="render === 33" />

    <div class="button-navigation">
      <div>
        <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      </div>
      <div>
        <button v-if="render != 33" v-on:click="render += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture08-selectors/slide00.vue";
import Slide01a from "@/components/lecture08-selectors/slide01a.vue";
import Slide01 from "@/components/lecture08-selectors/slide01.vue";
import Slide02 from "@/components/lecture08-selectors/slide02.vue";
import Slide03 from "@/components/lecture08-selectors/slide03.vue";
import Slide04 from "@/components/lecture08-selectors/slide04.vue";
import Slide05 from "@/components/lecture08-selectors/slide05.vue";
import Slide06 from "@/components/lecture08-selectors/slide06.vue";
import Slide07 from "@/components/lecture08-selectors/slide07.vue";
import Slide08 from "@/components/lecture08-selectors/slide08.vue";
import Slide09 from "@/components/lecture08-selectors/slide09.vue";
import Slide09a from "@/components/lecture08-selectors/slide09a.vue";
import Slide09b from "@/components/lecture08-selectors/slide09b.vue";
import Slide10 from "@/components/lecture08-selectors/slide10.vue";
import Slide11 from "@/components/lecture08-selectors/slide11.vue";
import Slide12 from "@/components/lecture08-selectors/slide12.vue";
import Slide13 from "@/components/lecture08-selectors/slide13.vue";
import Slide14 from "@/components/lecture08-selectors/slide14.vue";
import Slide15 from "@/components/lecture08-selectors/slide15.vue";
import Slide16 from "@/components/lecture08-selectors/slide16.vue";
import Slide17 from "@/components/lecture08-selectors/slide17.vue";
import Slide18 from "@/components/lecture08-selectors/slide18.vue";
import Slide19 from "@/components/lecture08-selectors/slide19.vue";
import Slide20 from "@/components/lecture08-selectors/slide20.vue";
import Slide21 from "@/components/lecture08-selectors/slide21.vue";
import Slide22 from "@/components/lecture08-selectors/slide22.vue";
import Slide23 from "@/components/lecture08-selectors/slide23.vue";
import Slide24 from "@/components/lecture08-selectors/slide24.vue";
import Slide25 from "@/components/lecture08-selectors/slide25.vue";
import Slide26 from "@/components/lecture08-selectors/slide26.vue";
import Slide27 from "@/components/lecture08-selectors/slide27.vue";
import Slide28 from "@/components/lecture08-selectors/slide28.vue";
import Slide29 from "@/components/lecture08-selectors/slide29.vue";
import Slide30 from "@/components/lecture08-selectors/slide30.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01a,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide09a,
    Slide09b,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
    Slide18,
    Slide19,
    Slide20,
    Slide21,
    Slide22,
    Slide23,
    Slide24,
    Slide25,
    Slide26,
    Slide27,
    Slide28,
    Slide29,
    Slide30,
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
