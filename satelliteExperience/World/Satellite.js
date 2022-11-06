import * as THREE from "three";
import SatelliteExperience from "../SatelliteExperience.js";

export default class Satellite {
  constructor() {
    this.satelliteExperience = new SatelliteExperience();
    this.scene = this.satelliteExperience.scene;
    this.resources = this.satelliteExperience.resources;
    this.satellite = this.resources.items.satellite;
    this.actualSatellite = this.satellite.scene;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
  }

  setModel() {
    this.actualSatellite.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
    });

    this.scene.add(this.actualSatellite);

    this.actualSatellite.position.set(0, 0, 0);
    this.actualSatellite.scale.set(0.11, 0.11, 0.11);
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.1;
    });
  }
  resize() {}
  update() {
    this.actualSatellite.rotation.y += 0.002;
  }
}
