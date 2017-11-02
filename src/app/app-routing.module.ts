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
    path: 'text-shadow',
    loadChildren: './text-shadow/text-shadow.module#TextShadowModule'
  },
  {
    path: 'pseudo-classes',
    loadChildren: './pseudo-classes/pseudo-classes.module#PseudoClassesModule'
  },
  {
    path: 'box-shadow',
    loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
  },
  {
    path: 'binary-tree-inversion',
    loadChildren: './binary-tree-inversion/binary-tree-inversion.module#BinaryTreeInversionModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/binary-tree-inversion'
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
