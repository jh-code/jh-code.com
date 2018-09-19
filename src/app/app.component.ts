import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { PageComponent } from './components/page/page.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { socialIcons } from './app.constants';
import { SocialIcon } from './app.interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public particlesStyle;
    public particlesParams;
    public contactForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl('')
    });

    public socialIcons: SocialIcon[] = socialIcons;

    public aboutAnimateState: string;
    public aboutTitleAnimateState = 'out';
    public homeAnimateState = 'out';

    constructor(
        private http: HttpClient,
        public el: ElementRef
    ) {
        //
    }

    public animateAbout(visible: boolean): void {
        this.aboutAnimateState = visible ? 'in' : 'out';
        console.log(visible);
    }

    public ngOnInit(): void {
        this.http.get('assets/particlesjs-config.json')
            .subscribe((config: any): void => {
                this.particlesStyle = config.style;
                this.particlesParams = config.params;
            });

        this.http.get('assets/social-icons.json')
            .subscribe((icon: SocialIcon[]): void => {
                this.socialIcons = icon;
            });
    }

    public scrollIntoView(ev, page: PageComponent): void {
        ev.preventDefault();
        page.scrollIntoView();
    }
}
