import * as THREE from 'three';
import { AnimatorHelper } from './AnimatorHelper';

export class AnimatorScene {
  static camera: THREE.OrthographicCamera;
  static scene: THREE.Scene;
  static renderer: THREE.WebGLRenderer;

  static state = {
    isDrag: false,
    startDrag: { x: 0, y: 0, cameraX: 0, cameraY: 0 },
  };

  static objects = {};

  static init(element: HTMLElement, width: number, height: number) {
    // Init
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      2000,
    );
    this.camera.position.z = 100;

    // Add camera to scene
    this.scene.add(this.camera);

    // Init render
    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setClearColor(0x2b2b2b, 1);
    this.renderer.setSize(width, height);
    this.renderer.setAnimationLoop(this.render.bind(this));

    // Add canvas
    element.appendChild(this.renderer.domElement);

    // Create rectanle
    this.scene.add(AnimatorHelper.createRect(-width / 2, height / 2, width, height));

    // Add event
    this.renderer.domElement.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        e.preventDefault();

        if (e.deltaY > 0) {
          this.camera.zoom *= 1.05;
        } else {
          this.camera.zoom *= 0.95;
        }
      },
      { passive: false },
    );

    document.addEventListener('mousedown', (e: MouseEvent) => {
      if (e.button === 1) {
        this.state.isDrag = true;
        this.state.startDrag = {
          x: e.pageX,
          y: e.pageY,
          cameraX: this.camera.position.x,
          cameraY: this.camera.position.y,
        };
      }
    });
    document.addEventListener('mouseup', (e: MouseEvent) => {
      if (e.button === 1) {
        this.state.isDrag = false;
      }
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.state.isDrag) {
        this.camera.position.x =
          this.state.startDrag.cameraX + (this.state.startDrag.x - e.pageX) / this.camera.zoom;
        this.camera.position.y =
          this.state.startDrag.cameraY - (this.state.startDrag.y - e.pageY) / this.camera.zoom;
      }
    });
  }

  static render() {
    this.camera.left = -this.renderer.domElement.getBoundingClientRect().width / 2;
    this.camera.right = this.renderer.domElement.getBoundingClientRect().width / 2;
    this.camera.top = this.renderer.domElement.getBoundingClientRect().height / 2;
    this.camera.bottom = -this.renderer.domElement.getBoundingClientRect().height / 2;
    this.camera.updateProjectionMatrix();

    this.renderer.render(this.scene, this.camera);
  }

  static add(obj: any) {
    this.scene.add(obj);
  }
}
