<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Slide02 v-if="render === 1" />
    <Slide03 v-if="render === 2" />
    <Slide04 v-if="render === 3" />
    <Slide05 v-if="render === 4" />
    <Slide06 v-if="render === 5" />
    <Slide07 v-if="render === 6" />
    <Slide08 v-if="render === 7" />
    <Slide09 v-if="render === 8" />
    <Slide10 v-if="render === 9" />
    <Slide11 v-if="render === 10" />

    <Slide0a v-if="render === 11" />
    <Slide0b v-if="render === 12" />
    <Slide0c v-if="render === 13" />
    <Slide0d v-if="render === 14" />
    <Slide0e v-if="render === 15" />
    <Slide0f v-if="render === 16" />
    <div class="button-navigation">
      <div>
        <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      </div>
      <div>
        <button v-if="render != 22" v-on:click="render += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slide02 from "@/components/lecture03/slide02.vue";
import Slide03 from "@/components/lecture03/slide03.vue";
import Slide04 from "@/components/lecture03/slide04.vue";
import Slide05 from "@/components/lecture03/slide05.vue";
import Slide06 from "@/components/lecture03/slide06.vue";
import Slide07 from "@/components/lecture03/slide07.vue";
import Slide08 from "@/components/lecture03/slide08.vue";
import Slide09 from "@/components/lecture03/slide09.vue";
import Slide10 from "@/components/lecture03/slide10.vue";
import Slide11 from "@/components/lecture03/slide11.vue";

import Slide00 from "@/components/lecture03/slide00.vue";
import Slide0a from "@/components/lecture03/slide0a.vue";
import Slide0b from "@/components/lecture03/slide0b.vue";
import Slide0c from "@/components/lecture03/slide0c.vue";
import Slide0d from "@/components/lecture03/slide0d.vue";
import Slide0e from "@/components/lecture03/slide0e.vue";
import Slide0f from "@/components/lecture03/slide0f.vue";

export default {
  name: "Lecture03",
  components: {
    Slide00,
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
    Slide0a,
    Slide0b,
    Slide0c,
    Slide0d,
    Slide0e,
    Slide0f,
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

.img-ms {
  height: 40%;
  width: 40%;
}

.img-ms {
  height: 55%;
  width: 55%;
}

.img-ms--cards {
  height: 35%;
  width: 35%;
}

.middle {
  display: flex;
  justify-content: center;
}
</style>
