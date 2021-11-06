<template>
  <div ref="sas" :class="$style.component"></div>
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
  props: {},
  components: {},
  async mounted() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 2.5;
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

    const texture = new THREE.TextureLoader().load('1.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const sas = this.$refs['sas'] as HTMLElement;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sas.getBoundingClientRect().width, sas.getBoundingClientRect().height);
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
    return {
      objects: [],
    };
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
