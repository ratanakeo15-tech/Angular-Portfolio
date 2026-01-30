import { Component, inject } from '@angular/core';
import { Team } from "./team/team";
import { Commonservice } from '../../../core/commonservice';

@Component({
  selector: 'app-about-me',
  imports: [Team],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  protected commonService=inject(Commonservice)
}
