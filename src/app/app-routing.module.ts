import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'prevencion',
    loadChildren: () => import('./pages/prevencion/prevencion.module').then( m => m.PrevencionPageModule)
  },
  {
    path: 'eis',
    loadChildren: () => import('./pages/eis/eis.module').then( m => m.EisPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
