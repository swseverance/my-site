import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MdRadioModule, MdSliderModule, MdButtonModule, MdCardModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ElementStackingComponent } from './element-stacking/element-stacking.component';

const routes: Routes = [
  {
    path: '',
    component: ElementStackingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MdRadioModule,
    MdSliderModule,
    MdButtonModule,
    MdCardModule,
    SharedModule
  ],
  declarations: [
    ElementStackingComponent
  ]
})
export class ElementStackingModule { }
