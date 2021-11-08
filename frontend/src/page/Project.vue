<template>
  <div :class="$style.main">
    <div
      :class="$style.scene"
      class="clickable"
      @click="$router.push('/scene/4')"
      v-for="x in 10"
      :key="x"
    >
      {{ x }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  async mounted() {},
  methods: {},
  data: () => {
    return {};
  },
});
</script>

<style module lang="scss">
@import '../gam_sdk_ui/vue/style/color.scss';
@import '../gam_sdk_ui/vue/style/size.scss';

.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  padding: 15px;
  box-sizing: border-box;

  .scene {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    background-color: $gray-medium;
    border: 10px solid $gray-dark;
    color: $text-gray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
