import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { TextShadowComponent } from './text-shadow/text-shadow.component';

const routes: Routes = [
  {
    path: '',
    component: TextShadowComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [TextShadowComponent]
})
export class TextShadowModule { }
