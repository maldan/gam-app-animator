<template>
  <div :class="$style.main">
    <div
      :class="$style.scene"
      class="clickable"
      @click="$router.push(`/scene/${$route.params.id}/${scene.id}`)"
      v-for="scene in $store.state.project.sceneList"
      :key="scene.id"
    >
      {{ scene.name }}
      {{ $root.moment(scene.created).fromNow() }}
    </div>
    <ui-button
      :class="$style.button"
      @click="
        $store.dispatch('modal/show', {
          name: 'add/scene',
          data: {
            name: '',
            projectId: $route.params.id,
          },
          onSuccess: () => {
            $store.dispatch('scene/add');
          },
        })
      "
      text="New Scene"
      icon="plus"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  async mounted() {
    this.$store.dispatch('project/getSceneList', this.$route.params.id);
  },
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

  .button {
    flex: none;
    height: 48px;
    margin: auto;
  }
}
</style>
