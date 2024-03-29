import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule ), 
    canActivate :[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate :[NologinGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate :[NologinGuard]
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./pages/reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'breastmama',
    loadChildren: () => import('./pages/breastmama/breastmama.module').then( m => m.BreastmamaPageModule)
  },
  {
    path: 'breastcervix',
    loadChildren: () => import('./pages/breastcervix/breastcervix.module').then( m => m.BreastcervixPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'tecnica-bio',
    loadChildren: () => import('./pages/tecnica-bio/tecnica-bio.module').then( m => m.TecnicaBioPageModule)
  },
 
  {
    path: 'tecnica-termo',
    loadChildren: () => import('./pages/tecnica-termo/tecnica-termo.module').then( m => m.TecnicaTermoPageModule)
  },
  {
    path: 'tecnica-fluo',
    loadChildren: () => import('./pages/tecnica-fluo/tecnica-fluo.module').then( m => m.TecnicaFluoPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },  {
    path: 'chat2',
    loadChildren: () => import('./pages/chat2/chat2.module').then( m => m.Chat2PageModule)
  },
  {
    path: 'cuidados',
    loadChildren: () => import('./pages/cuidados/cuidados.module').then( m => m.CuidadosPageModule)
  },


 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
