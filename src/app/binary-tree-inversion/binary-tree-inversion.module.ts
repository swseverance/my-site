import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BinaryTreeInversionComponent } from './binary-tree-inversion/binary-tree-inversion.component';
import { BinaryTreeInversionService } from './binary-tree-inversion.service';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';

const routes: Routes = [
  {
    path: '',
    component: BinaryTreeInversionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  providers: [
    BinaryTreeInversionService
  ],
  declarations: [
    BinaryTreeInversionComponent,
    BinaryTreeComponent
  ]
})
export class BinaryTreeInversionModule { }
