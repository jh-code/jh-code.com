import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { SPANavService } from '../../services/spa-nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public particlesStyle;
  public particlesParams;

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  public aboutAnimateState: string;
  public aboutTitleAnimateState: string;

  public pages: string[] = ['home', 'about', 'portfolio', 'contact'];

  constructor(
    private http: HttpClient,
    private spaNavService: SPANavService,
    public el: ElementRef
  ) { }

  public ngOnInit(): void {
    this.http.get('assets/particlesjs-config.json')
      .subscribe((config: any): void => {
        this.particlesStyle = config.style;
        this.particlesParams = config.params;
      });
  }

  public animateAbout(visible: boolean): void {
    this.aboutAnimateState = visible ? 'in' : 'out';
  }

  public scrollIntoView(ev: UIEvent, id: string): void {
    ev.preventDefault();
    this.spaNavService.scrollTo(id);
  }
}
