import * as THREE from "three";
import SatelliteExperience from "../SatelliteExperience.js";

export default class Floor {
  constructor() {
    this.satelliteExperience = new SatelliteExperience();
    this.scene = this.satelliteExperience.scene;

    this.setFloor();
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(100, 100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xeae0cc,
      side: THREE.BackSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.position.y = -0.3;
    this.plane.receiveShadow = true;
  }

  resize() {}
  update() {}
}
