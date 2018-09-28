import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { ParticlesModule } from 'angular-particle';
import { MatButtonModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { PageModule } from '../../components/page/page.module';
import { VisibleDirective } from '../../directives/visible.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    homeRouting,
    ParticlesModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    PageModule,
    HeaderModule
  ],
  declarations: [
    HomeComponent, 
    VisibleDirective
  ]
})
export class HomeModule { }
