<template>
  <div :class="$style.main">
    <div :class="$style.block_1">
      <ui-block
        @iconClick="$root.console.log(1)"
        icon="plus"
        :class="$style.explorer"
        title="explorer"
        :scrollY="true"
      >
        <scene-explorer />
      </ui-block>
      <ui-block :class="$style.scene" title="workspace"><scene-workspace /></ui-block>
    </div>
    <ui-block :class="$style.timeline" title="timeline" :scrollY="true">
      <scene-timeline />
    </ui-block>
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
.main {
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 240px;
  height: 100%;

  .block_1 {
    display: grid;
    gap: 10px;
    grid-template-columns: 240px 1fr;
    margin-bottom: 10px;
    box-sizing: border-box;

    .explorer {
      min-height: 0;
    }

    .scene {
      box-sizing: border-box;
      height: 100%;
    }
  }

  .timeline {
    box-sizing: border-box;
    height: 100%;
  }
}
</style>
