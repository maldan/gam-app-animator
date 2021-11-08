<template>
  <div :class="$style.main">
    <ui-button
      :class="$style.button"
      @click="
        $store.dispatch('modal/show', {
          name: 'add/project',
          data: {
            name: '',
            path: '/home/maldan/animator',
            width: '1280',
            height: '720',
            fps: '60',
          },
          onSuccess: () => {
            $store.dispatch('project/add');
          },
        })
      "
      text="Create Project"
      icon="plus"
    />
    <ui-button
      v-for="item in $store.state.main.projectList"
      @click="$router.push(`/project/${item.id}`)"
      :key="item.id"
      :class="$style.button"
      :text="item.name"
      icon="arrow_up"
    />
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button {
    flex: none;
    width: 220px;
    margin-bottom: $gap-base;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
