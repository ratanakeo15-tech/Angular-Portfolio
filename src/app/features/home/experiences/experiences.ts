import { Component, computed, inject } from '@angular/core';
import { Componentshare } from "../../../shared/component/component";
import { Service } from './service/service';

@Component({
  selector: 'app-experiences',
  imports: [Componentshare],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  protected dataService=inject(Service)
  protected ouputData=computed(()=>this.dataService.getQuestionair())
  protected text="Equipped with the skills to support data-driven decision-making and pursue further specialization in cloud-based data engineering.";
}
