import { Component } from '@angular/core';
import { Team } from "./team/team";

@Component({
  selector: 'app-about-me',
  imports: [Team],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

}
