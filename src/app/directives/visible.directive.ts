import { ElementRef, Input, Directive, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { aboutAnimationIn, aboutAnimationOut } from '../app.animations';

@Directive({
    selector: '[appVisible]'
})
export class VisibleDirective implements OnChanges {
    @Input() public scrollWindow: ElementRef;

    @Output() public onVisibilityChange: EventEmitter<boolean> = new EventEmitter();

    private visible = false;
    private player: AnimationPlayer;

    constructor(
        private el: ElementRef,
        private builder: AnimationBuilder
    ) {
        //
    }

    public ngOnChanges(changes: SimpleChanges): void {
        let el = this.el.nativeElement.getBoundingClientRect();
        let win = this.scrollWindow.nativeElement.getBoundingClientRect();
        let visible = this.isVisible(el, win);

        this.visible = visible;
        this.animate();

        fromEvent(this.scrollWindow.nativeElement, 'scroll')
            .subscribe((): void => {
                el = this.el.nativeElement.getBoundingClientRect();
                win = this.scrollWindow.nativeElement.getBoundingClientRect();
                visible = this.isVisible(el, win);

                if (visible && !this.visible) {
                    this.visible = visible;
                    this.animate();
                }

                if (!visible && this.visible) {
                    this.visible = visible;
                    this.animate();
                }
            });
    }

    private animate(): void {
        const metadata = this.visible ? aboutAnimationIn : aboutAnimationOut;
        const factory = this.builder.build(metadata);

        if (this.player) {
            this.player.destroy();
        }

        this.player = factory.create(this.el.nativeElement);
        this.player.play();
    }

    private isVisible(el: DOMRect, win: DOMRect): boolean {
        return !(el.bottom - win.top - (el.height / 2) < 0 || el.top - win.top + (el.height / 2) - win.height >= 0);
    }
}
