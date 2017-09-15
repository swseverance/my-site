import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeSampleComponent } from './code-sample/code-sample.component';
import { DateComponent } from './date/date.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeSampleComponent,
    DateComponent
  ],
  exports: [
    CodeSampleComponent,
    DateComponent
  ]
})
export class SharedModule { }
