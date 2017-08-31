import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'element-stacking',
    loadChildren: './element-stacking/element-stacking.module#ElementStackingModule'
  },
  {
    path: 'line-height',
    loadChildren: './line-height/line-height.module#LineHeightModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/element-stacking'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
