<template>
  <div :class="$style.window">
    <ui-input placeholder="Name..." :class="$style.field" v-model="$store.state.modal.data.name" />

    <div class="button_group">
      <ui-button @click="$store.dispatch('modal/close')" text="Cancel" />
      <ui-button
        @click="$store.dispatch('modal/ok')"
        text="Add"
        icon="plus"
        :disabled="!$store.state.modal.data.name"
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
