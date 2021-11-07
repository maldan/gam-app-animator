<template>
  <div ref="scene" :class="$style.component"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AnimatorScene } from '../../engine/AnimatorScene';
import { AnimatorHelper } from '../../engine/AnimatorHelper';
import { IObject, ISprite } from '../../types/Types';

export default defineComponent({
  props: {},
  components: {},
  async mounted() {
    AnimatorScene.init(this.$refs['scene'] as HTMLElement, 1280, 720);

    const objects = this.$store.state.scene.objects as IObject[];
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].type === 'sprite') {
        const sprite = objects[i] as ISprite;
        const element = AnimatorHelper.createSprite(sprite.data.url);
        element.position.set(sprite.data.x, sprite.data.y, 1);
        element.scale.set(sprite.data.width, sprite.data.height, 1);
        AnimatorScene.add(element);
      }
    }
  },
  methods: {},
  data: () => {
    return {};
  },
});
</script>

<style lang="scss" module>
.component {
  position: relative;
  height: calc(100% - 27px);

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
