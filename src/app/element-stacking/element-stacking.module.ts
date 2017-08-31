import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
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
    MaterialModule
  ],
  declarations: [
    ElementStackingComponent
  ]
})
export class ElementStackingModule { }
