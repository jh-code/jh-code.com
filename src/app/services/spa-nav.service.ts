import { Injectable, ElementRef } from '@angular/core';
import { PageComponent } from '../components/page/page.component';

@Injectable()
export class SPANavService {
  private navPages: PageComponent[] = [];

  constructor() {
  }

  public register(page: PageComponent): void {
    if (!this.navPages.includes(page)) {
      this.navPages.push(page);
      console.log('adding');
    }
  }

  public scrollTo(id: string): void {
    const navPage: PageComponent = this.navPages.find((page): boolean => page.id === id);

    if (navPage) {
      navPage.scrollIntoView();
    }
  }
}
