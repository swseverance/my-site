import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MaterialDesignButtonComponent } from './material-design-button/material-design-button.component';

const routes: Routes = [
  {
    path: '',
    component: MatButtonComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [MatButtonComponent, MaterialDesignButtonComponent]
})
export class MatButtonModule {}
