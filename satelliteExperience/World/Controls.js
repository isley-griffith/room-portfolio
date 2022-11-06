import SatelliteExperience from "../SatelliteExperience.js";

export default class Controls {
  constructor() {
    this.satelliteExperience = new SatelliteExperience();
    this.scene = this.satelliteExperience.scene;
    this.resources = this.satelliteExperience.resources;
    this.time = this.satelliteExperience.time;
    this.camera = this.satelliteExperience.camera;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
  }

  resize() {}

  update() {}
}
