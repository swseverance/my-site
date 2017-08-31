import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeSampleComponent } from './code-sample/code-sample.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeSampleComponent
  ],
  exports: [
    CodeSampleComponent
  ]
})
export class SharedModule { }
