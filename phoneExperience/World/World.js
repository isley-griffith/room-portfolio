import * as THREE from "three";
import Environment from "./Environment.js";
import Controls from "./Controls.js";
import PhoneExperience from "../PhoneExperience.js";
import Phone from "./Phone.js";
import Floor from "./Floor.js";

export default class World {
  constructor() {
    this.phoneExperience = new PhoneExperience();
    this.sizes = this.phoneExperience.sizes;
    this.scene = this.phoneExperience.scene;
    this.canvas = this.phoneExperience.canvas;
    this.camera = this.phoneExperience.camera;
    this.resources = this.phoneExperience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.phone = new Phone();
      this.controls = new Controls();
      // this.floor = new Floor();

      // console.log("created phone");
    });
  }
  resize() {}
  update() {
    if (this.phone) {
      this.phone.update();
    }
    if (this.controls) {
      this.controls.update();
    }
  }
}
