import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PseudoClassesComponent } from './pseudo-classes/pseudo-classes.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {
    path: '',
    component: PseudoClassesComponent,
    children: [
      {
        path: 'dummy',
        component: DummyComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [PseudoClassesComponent, DummyComponent]
})
export class PseudoClassesModule {}
