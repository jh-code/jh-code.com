import { Component, Input, HostBinding, ChangeDetectionStrategy, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SPANavService } from '../../services/spa-nav.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
    @Input() id = '';
    @Input() class = '';
    @Input() setHashOnScroll;

    @HostBinding('class') get hostClass() { return this.class; }
    @HostBinding('id') get hostId() { return this.id; }

    constructor(
        private el: ElementRef,
        private location: Location,
        private spaNavService: SPANavService
    ) {
        //
    }

    public ngOnInit(): void {
        this.spaNavService.register(this);
    }

    public scrollIntoView(): void {
        this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.location.go(this.setHashOnScroll ? '' : this.id);
    }
}
