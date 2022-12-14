import Experience from "../Experience.js";
import * as THREE from "three";
import GSAP from "gsap";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
  }

  resize() {}

  update() {}
}
