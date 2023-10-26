import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[smoothScroll]'
})
export class SmoothScrollDirective {
  @Input() targetId!: string;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();

    const targetElement = document.getElementById(this.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}