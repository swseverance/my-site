import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';

const routes: Routes = [
  {
    path: '',
    component: BoxShadowComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [BoxShadowComponent]
})
export class BoxShadowModule {}
