import SatelliteExperience from "../SatelliteExperience.js";
import * as THREE from "three";
export default class Environment {
  constructor() {
    this.satelliteExperience = new SatelliteExperience();
    this.scene = this.satelliteExperience.scene;
    this.resources = this.satelliteExperience.resources;

    this.setSunlight();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(1.5, 7, 3);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }
  resize() {}
  update() {}
}
