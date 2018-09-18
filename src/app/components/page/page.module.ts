import { NgModule } from '@angular/core';
import { CommonModule, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { PageComponent } from './page.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    declarations: [PageComponent],
    exports: [PageComponent]
})
export class PageModule {
    //
}
