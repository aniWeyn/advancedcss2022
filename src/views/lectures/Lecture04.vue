<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Preview v-if="render === 1" />
    <div class="button-navigation">
      <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      <button v-if="render != 14" v-on:click="render += 1">Next</button>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture04/slide00.vue";
import Preview from "@/components/lecture04/slide0sass04.vue";
/*import Slide01 from "@/components/lecture04/slide01.vue";
import Slide02 from "@/components/lecture04/slide02.vue";
import Slide03 from "@/components/lecture04/slide03.vue";
import Slide04 from "@/components/lecture04/slide04.vue";
import Slide05 from "@/components/lecture04/slide05.vue";
import Slide06 from "@/components/lecture04/slide06.vue";
import Slide07 from "@/components/lecture04/slide07.vue";
import Slide08 from "@/components/lecture04/slide08.vue";
import Slide09 from "@/components/lecture04/slide09.vue";
import Slide10 from "@/components/lecture04/slide10.vue";
import Slide11 from "@/components/lecture04/slide11.vue";
import Slide12 from "@/components/lecture04/slide12.vue";
import Slide13 from "@/components/lecture04/slide13.vue";
import Slide14 from "@/components/lecture04/slide14.vue";*/

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Preview,
    /*Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,*/
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
