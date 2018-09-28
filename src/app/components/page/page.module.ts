import { NgModule } from '@angular/core';
import { CommonModule, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { PageComponent } from './page.component';
import { SPANavService } from '../../services/spa-nav.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        SPANavService
    ],
    declarations: [PageComponent],
    exports: [PageComponent]
})
export class PageModule {
    //
}
