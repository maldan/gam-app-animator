<template>
  <div :class="$style.explorer">
    <div :class="$style.item" v-for="object in $store.state.scene.objects" :key="object.id">
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
    padding: 2px;
    margin-bottom: 2px;
    color: #999999;
  }
}
</style>
