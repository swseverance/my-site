import { Component, Input, ViewChild, AfterViewInit, OnChanges, ElementRef } from '@angular/core';

import * as hljs from 'highlight.js';

import { formatter } from './utils';

@Component({
  selector: 'ss-code-sample',
  templateUrl: './code-sample.component.html',
  styleUrls: ['./code-sample.component.styl']
})
export class CodeSampleComponent implements AfterViewInit {
  @Input() class: string;

  @ViewChild('needsHighlight') needsHighlight: ElementRef;

  ngAfterViewInit () {
    const codeSample = this.needsHighlight.nativeElement.textContent;

    setTimeout(() => {
      this.needsHighlight.nativeElement.textContent = formatter(codeSample);

      hljs.highlightBlock(this.needsHighlight.nativeElement);
    }, 0);
  }
}
