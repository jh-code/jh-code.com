import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found.component';

const notFoundRoutes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
];

export const notFoundRouting: ModuleWithProviders = RouterModule.forChild(notFoundRoutes);
