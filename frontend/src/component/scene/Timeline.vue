<template>
  <div :class="$style.component">
    <div
      :class="[$style.name, object === $store.state.scene.selectedObject ? $style.selected : null]"
      v-for="object in $store.state.scene.objects"
      :key="object"
    >
      <div :class="$style.title">{{ object.name }}</div>
      <div :class="$style.strip"></div>
    </div>

    <div
      :class="$style.object"
      v-for="(object, index) in $store.state.scene.objects"
      :key="object"
      :style="{ top: 7 + index * 25 + 'px' }"
    >
      <div
        class="clickable"
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
    margin-bottom: 2px;
    font-size: 14px;
    box-sizing: border-box;
    display: flex;
    height: 24px;
    align-items: center;

    .title {
      width: 140px;
      background-color: #353535;
    }

    .strip {
      background-color: #161616;
      height: 100%;
      width: 200px;
    }

    &.selected {
      .title {
        background-color: #d16c0e;
        color: #2a2a2a;
        font-weight: bold;
      }
    }
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
