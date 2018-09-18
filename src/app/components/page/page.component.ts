import { Component, Input, HostBinding, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
    @Input() id = '';
    @Input() class = '';
    @Input() setHashOnScroll = true;

    @HostBinding('class') get hostClass() { return this.class; }
    @HostBinding('id') get hostId() { return this.id; }

    constructor(
        private el: ElementRef,
        private location: Location
    ) {
        //
    }

    public scrollIntoView(): void {
        this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.location.go(this.setHashOnScroll ? this.id : '');
    }
}
