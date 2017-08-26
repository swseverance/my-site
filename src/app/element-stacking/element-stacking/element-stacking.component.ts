import { Component, OnInit } from '@angular/core';

enum Display {
  Block,
  Inline,
  InlineBlock
}

interface Element {
  display: Display;
  width?: string;
}

@Component({
  selector: 'ss-element-stacking',
  templateUrl: './element-stacking.component.html',
  styleUrls: ['./element-stacking.component.styl']
})
export class ElementStackingComponent {
  elDisplay = Display.Block;
  elWidth: number = null;

  elements: Element[] = [];

  get Display () { return Display; }

  onValueChange (value: number) {
    this.elWidth = value;
  }

  addElement () {
    if (this.elWidth && this.elDisplay !== Display.Inline) {
      this.elements.push({
        display: this.elDisplay,
        width: `${this.elWidth}px`
      });
    } else {
      this.elements.push({
        display: this.elDisplay
      });
    }
  }
}
