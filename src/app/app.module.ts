import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatTooltipModule } from '@angular/material';

import { ParticlesModule } from 'angular-particle';
import { ParallaxModule } from 'ngx-parallax';

import { AppComponent } from './app.component';
import { PageModule } from './components/page/page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisibleDirective } from './directives/visible.directive';

@NgModule({
    declarations: [
        AppComponent,
        VisibleDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ParticlesModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        ParallaxModule,
        PageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    //
}
