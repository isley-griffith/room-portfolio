import { EventEmitter } from "events";
export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight; // change if canvas doesn't take up 100% of window
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.frustrum = 3.75;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight; // change if canvas doesn't take up 100% of window
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.emit("resize");
    });
  }
}
