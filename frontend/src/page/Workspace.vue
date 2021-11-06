<template>
  <div :class="$style.main">
    <div :class="$style.block_1">
      <ui-block :class="$style.explorer" title="explorer" :scrollY="true">
        <workspace-explorer />
      </ui-block>
      <ui-block :class="$style.scene" title="scene">Scene</ui-block>
    </div>
    <ui-block :class="$style.timeline" title="timeline">Timeline</ui-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as THREE from 'three';

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: any,
  geometry: any,
  material: any,
  mesh: any;

export default defineComponent({
  components: {},
  async mounted() {
    return;
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 5.5;
    scene = new THREE.Scene();

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array([
          -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
          1.0,
        ]),
        3,
      ),
    );
    geometry.setAttribute(
      'uv',
      new THREE.BufferAttribute(
        new Float32Array([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0]),
        2,
      ),
    );

    const texture = new THREE.TextureLoader().load('sketch_73.png');
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(this.animation);
    (this.$refs['sas'] as any).appendChild(renderer.domElement);
  },
  methods: {
    animation(time: number) {
      // mesh.rotation.z = time / 2000;
      // mesh.rotation.y = time / 1000;

      renderer.render(scene, camera);
    },
  },
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
