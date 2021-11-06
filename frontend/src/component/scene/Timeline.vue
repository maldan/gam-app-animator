<template>
  <div :class="$style.component">
    <div :class="$style.name" v-for="object in $store.state.scene.objects" :key="object">
      {{ object.name }}
    </div>

    <div
      :class="$style.object"
      v-for="(object, index) in $store.state.scene.objects"
      :key="object"
      :style="{ top: 7 + index * 22 + 'px' }"
    >
      <div
        :class="$style.item"
        v-for="key in object.keys"
        :key="key"
        :style="{ left: 150 + key.position * 100 + 'px' }"
      ></div>
    </div>
    <div :class="$style.line"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
  components: {},
  async mounted() {},
  methods: {},
  data: () => {
    return {
      objects: [],
    };
  },
});
</script>

<style lang="scss" module>
.component {
  position: relative;
  height: auto;
  min-height: 100% !important;
  background-color: #222222;
  user-select: none;

  .name {
    background-color: #353535;
    margin-bottom: 2px;
    width: 140px;
    padding: 2px;
    font-size: 14px;
    box-sizing: border-box;
  }

  .object {
    position: absolute;
    left: 0;
    top: 0;

    .item {
      position: absolute;
      left: 0;
      top: 0;
      width: 8px;
      height: 8px;
      background-color: #fe9300;
      transform: rotate(45deg);
    }
  }

  .line {
    position: absolute;
    left: 150px + 130px;
    top: 0;
    width: 1px;
    height: 100%;
    border-right: 2px dashed #cccccc66;
  }
}
</style>
