import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TeslaDataService } from 'src/app/services/tesla-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // istanbul ignore next
  @ViewChild('homeContent') homeContent!: ElementRef;

  constructor(private elRef: ElementRef, private router: Router, public teslaService: TeslaDataService){}

  // istanbul ignore next
  scrollToSection(sectionId: string) {
    if(this.router.url == '/home'){
      const section = this.elRef.nativeElement.nextElementSibling.nextElementSibling.querySelector(`#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else{
      this.router.navigate(['/']);
    }
  }
}
