import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { RouterOutlet } from "@angular/router";
import { AboutMe } from "./about-me/about-me";
import { Projects } from "./projects/projects";
import { Experiences } from "./experiences/experiences";

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutMe, Projects, Experiences],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

}
