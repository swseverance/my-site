import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'element-stacking',
    loadChildren: './element-stacking/element-stacking.module#ElementStackingModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'element-stacking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
