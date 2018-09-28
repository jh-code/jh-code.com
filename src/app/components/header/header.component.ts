import { Component, OnInit } from '@angular/core';

import { SPANavService } from '../../services/spa-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private spaNavService: SPANavService
  ) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public scrollIntoView(ev: UIEvent, id: string): void {
    ev.preventDefault();
    this.spaNavService.scrollTo(id);
  }
}
