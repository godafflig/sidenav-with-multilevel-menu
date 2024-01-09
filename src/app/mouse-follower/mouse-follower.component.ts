// mouse-follower.component.ts
import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mouse-follower',
  templateUrl: './mouse-follower.component.html',
  styleUrls: ['./mouse-follower.component.scss']
})
export class MouseFollowerComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    
    const follower = this.el.nativeElement.querySelector('.follow-mouse');
    this.renderer.setStyle(follower, 'left', `${e.clientX}px`);
    this.renderer.setStyle(follower, 'top', `${e.clientY}px`);

  }
}
