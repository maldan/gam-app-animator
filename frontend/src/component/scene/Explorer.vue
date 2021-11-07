<template>
  <div :class="$style.explorer">
    <div
      class="clickable"
      :class="[$style.item, object === $store.state.scene.selectedObject ? $style.selected : null]"
      v-for="object in $store.state.scene.objects"
      :key="object.id"
      @click="$store.state.scene.selectedObject = object"
    >
      {{ object.name }}
    </div>
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
    return {};
  },
});
</script>

<style lang="scss" module>
.explorer {
  .item {
    background-color: #252525;
    padding: 5px 10px;
    margin-bottom: 5px;
    color: #999999;
    font-size: 14px;

    &.selected {
      background-color: #d16c0e;
      color: #2a2a2a;
      font-weight: bold;
    }
  }
}
</style>
