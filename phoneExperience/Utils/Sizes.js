import { EventEmitter } from "events";
export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.width = window.innerWidth * 0.2;
    this.height = window.innerHeight * 0.3; // change if canvas doesn't take up 100% of window
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.frustrum = 1;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth * 0.15;
      this.height = window.innerHeight * 0.3; // change if canvas doesn't take up 100% of window
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.emit("resize");
    });
  }
}
