import PhoneExperience from "../PhoneExperience.js";
import * as THREE from "three";
import GSAP from "gsap";
export default class Phone {
  constructor() {
    this.phoneExperience = new PhoneExperience();
    this.scene = this.phoneExperience.scene;
    this.resources = this.phoneExperience.resources;
    this.phone = this.resources.items.iphone;
    this.spin = true;
    this.actualPhone = this.phone.scene;

    // console.log(this.phone);

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
  }

  setModel() {
    this.actualPhone.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
    });

    this.scene.add(this.actualPhone);

    this.actualPhone.position.set(0, 0, 0);
    this.actualPhone.scale.set(0.8, 0.8, 0.8);
    this.actualPhone.rotation.y = -60;
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
    // console.log(this.actualPhone.rotation.y);
    if (this.spin) {
      if (this.actualPhone.rotation.y > -60) {
        this.spin = false;
      } else {
        this.actualPhone.rotation.y += 0.001;
      }
    }

    if (!this.spin) {
      if (this.actualPhone.rotation.y <= -60.5) {
        this.spin = true;
      } else {
        this.actualPhone.rotation.y -= 0.001;
      }
    }
  }
}
