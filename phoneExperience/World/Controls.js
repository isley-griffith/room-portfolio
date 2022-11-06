import PhoneExperience from "../PhoneExperience.js";
import * as THREE from "three";
import GSAP from "gsap";

export default class Controls {
  constructor() {
    this.phoneExperience = new PhoneExperience();
    this.scene = this.phoneExperience.scene;
    this.resources = this.phoneExperience.resources;
    this.time = this.phoneExperience.time;
    this.camera = this.phoneExperience.camera;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
  }

  resize() {}

  update() {}
}
