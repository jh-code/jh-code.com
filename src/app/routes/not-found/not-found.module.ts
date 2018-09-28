import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { notFoundRouting } from './not-found.routing';

@NgModule({
  imports: [
    CommonModule,
    notFoundRouting
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
