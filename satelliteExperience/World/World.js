import * as THREE from "three";
import Environment from "./Environment.js";
import Controls from "./Controls.js";
import SatelliteExperience from "../SatelliteExperience.js";
import Satellite from "./Satellite.js";
// import Floor from "./Floor.js";

export default class World {
  constructor() {
    this.satelliteExperience = new SatelliteExperience();
    this.sizes = this.satelliteExperience.sizes;
    this.scene = this.satelliteExperience.scene;
    this.canvas = this.satelliteExperience.canvas;
    this.camera = this.satelliteExperience.camera;
    this.resources = this.satelliteExperience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.satellite = new Satellite();
      this.controls = new Controls();
      // this.floor = new Floor();

      // console.log("created satellite");
    });
  }
  resize() {}
  update() {
    if (this.satellite) {
      this.satellite.update();
    }
    if (this.controls) {
      this.controls.update();
    }
  }
}
