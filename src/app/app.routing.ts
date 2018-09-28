import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './routes/home/home.module#HomeModule',
  },
  {
    path: 'login',
    loadChildren: './routes/login/login.module#LoginModule'
  },
  {
    path: 'admin',
    loadChildren: './routes/admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: './routes/not-found/not-found.module#NotFoundModule'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
