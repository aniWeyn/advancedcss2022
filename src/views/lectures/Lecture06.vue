<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <SlideCodePen v-if="render === 1" />
    <SlideSMIL01 v-if="render === 2" />
    <SlideSMIL02 v-if="render === 3" />
    <SlideSMIL03 v-if="render === 4" />
    <SlideSMIL04 v-if="render === 5" />
    <SlideSMIL05 v-if="render === 6" />
    <SlideSMIL06 v-if="render === 7" />
    <SlideSMIL07 v-if="render === 8" />
    <div class="button-navigation">
      <div>
        <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      </div>
      <div>
        <button v-if="render != 8" v-on:click="render += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture06-animations/slide00.vue";
import SlideCodePen from "@/components/lecture06-animations/slideCodePen.vue";
import SlideSMIL01 from "@/components/lecture06-animations/slideSMIL-01.vue";
import SlideSMIL02 from "@/components/lecture06-animations/slideSMIL-02.vue";
import SlideSMIL03 from "@/components/lecture06-animations/slideSMIL-03.vue";
import SlideSMIL04 from "@/components/lecture06-animations/slideSMIL-04.vue";
import SlideSMIL05 from "@/components/lecture06-animations/slideSMIL-05.vue";
import SlideSMIL06 from "@/components/lecture06-animations/slideSMIL-06.vue";
import SlideSMIL07 from "@/components/lecture06-animations/slideSMIL-07.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    SlideSMIL01,
    SlideSMIL02,
    SlideSMIL03,
    SlideSMIL04,
    SlideSMIL05,
    SlideSMIL06,
    SlideSMIL07,
    SlideCodePen,
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
