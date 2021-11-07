import * as THREE from 'three';

export class AnimatorHelper {
  static createRect(x: number, y: number, width: number, height: number) {
    const material = new THREE.LineBasicMaterial({ color: 0xcccccc });
    const points = [];

    points.push(new THREE.Vector3(x, y, 0));
    points.push(new THREE.Vector3(x + width, y, 0));
    points.push(new THREE.Vector3(x + width, y - height, 0));
    points.push(new THREE.Vector3(x, y - height, 0));
    points.push(new THREE.Vector3(x, y, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, material);
  }

  static createSprite(url: string) {
    /*const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array([
          -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
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

    const texture = new THREE.TextureLoader().load(url);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    return new THREE.Mesh(geometry, material);*/

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    const map = loader.load(url);
    map.magFilter = THREE.NearestFilter;

    const material = new THREE.SpriteMaterial({
      map: map,
      color: 0xffffffff,
      //transparent: true,
      // side: THREE.DoubleSide,
    });
    const planeMat = new THREE.MeshBasicMaterial({
      map: map,
      color: 0xffffffff,
      //side: THREE.DoubleSide,
    });
    const planeGeo = new THREE.PlaneGeometry(128, 128);
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    // return mesh;
    return new THREE.Sprite(material);
  }
}
