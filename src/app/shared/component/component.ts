import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})

export class Componentshare {
  @Input() text :string | undefined;
  @Input() lines = 2;
  @Input() variant: 'title' | 'body' = 'body';

  expanded = false;
  get maxLength() {
    return this.lines * 50; // rough estimate
  }
}
