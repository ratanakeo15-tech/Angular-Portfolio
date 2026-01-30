import { Component, inject } from '@angular/core';
import { Commonservice } from '../../core/commonservice';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
   protected commerService=inject(Commonservice)
}
