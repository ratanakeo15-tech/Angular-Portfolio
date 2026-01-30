import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})

export class Componentshare {
  @Input() text = '';
  @Input() variant: 'title' | 'body' = 'body';
  @Input() lines = 2;

  expanded = false;

  get isTitle() {
    return this.variant === 'title';
  }

  get collapsedLines() {
    return this.isTitle ? 1 : this.lines;
  }

  get showToggle() {
    return this.text.length > this.collapsedLines * 2;
  }

}
