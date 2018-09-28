import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
