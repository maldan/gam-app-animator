<template>
  <div class="main">
    <div @click="$router.push('/scene/4')" v-for="x in 10" :key="x">{{ x }}</div>
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

<style lang="scss" scoped>
.main {
}
</style>
