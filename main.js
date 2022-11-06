import "./style.css";

import Experience from "./experience/Experience";
import SatelliteExperience from "./satelliteExperience/SatelliteExperience";
import PhoneExperience from "./phoneExperience/PhoneExperience";

const experience = new Experience(document.querySelector(".experience-canvas"));
const satelliteExperience = new SatelliteExperience(
  document.querySelector(".satellite-experience-canvas")
);
const phoneExperience = new PhoneExperience(
  document.querySelector(".phone-experience-canvas")
);
