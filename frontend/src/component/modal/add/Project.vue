<template>
  <div :class="$style.window">
    <ui-input placeholder="Name..." :class="$style.field" v-model="$store.state.modal.data.name" />
    <ui-input placeholder="Path..." :class="$style.field" v-model="$store.state.modal.data.path" />
    <div class="div_group">
      <ui-input
        placeholder="Width..."
        :class="$style.field"
        v-model="$store.state.modal.data.width"
      />
      <ui-input
        placeholder="Height..."
        :class="$style.field"
        v-model="$store.state.modal.data.height"
      />
    </div>
    <ui-input placeholder="Fps..." :class="$style.field" v-model="$store.state.modal.data.fps" />

    <div class="button_group">
      <ui-button @click="$store.dispatch('modal/close')" text="Cancel" />
      <ui-button
        @click="$store.dispatch('modal/ok')"
        text="Add"
        icon="plus"
        :disabled="
          !$store.state.modal.data.name ||
          !$store.state.modal.data.path ||
          !$store.state.modal.data.width ||
          !$store.state.modal.data.height ||
          !$store.state.modal.data.fps
        "
      />
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
  data() {
    return {
      image: '',
    };
  },
});
</script>

<style lang="scss" module>
.window {
  min-width: 320px;

  .field {
    margin-bottom: 10px;
  }
}
</style>
