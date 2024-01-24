import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-follower',
  templateUrl: './mouse-follower.component.html',
  styleUrls: ['./mouse-follower.component.scss']
})
export class MouseFollowerComponent implements OnInit {
  circles: { x: number, y: number, scale: number, color: string }[] = [];
  mouseCoords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  
  colors = [

    "#000000",
   
  ];

  ngOnInit() {
    const numCircles = 10; // Nombre de cercles
    console.log("Circles found:", this.circles.length); // Pour débogage
    for (let i = 0; i < numCircles; i++) {
      this.circles.push({
        x: this.mouseCoords.x,
        y: this.mouseCoords.y,
        scale: (numCircles - i) / numCircles,
        color: this.colors[i % this.colors.length]
      });
    }
    this.animateCircles();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseCoords.x = event.clientX;
    this.mouseCoords.y = event.clientY;
  }

  animateCircles() {
    const followSpeed = 0.2; // Vitesse à laquelle les cercles suivent la souris, entre 0 et 1

    for (let i = this.circles.length - 1; i > 0; i--) {
      const nextCircle = this.circles[i - 1];
      this.circles[i].x += (nextCircle.x - this.circles[i].x) * followSpeed;
      this.circles[i].y += (nextCircle.y - this.circles[i].y) * followSpeed;
    }
    
    // Le premier cercle suit directement la souris
    this.circles[0].x += (this.mouseCoords.x - this.circles[0].x) * followSpeed;
    this.circles[0].y += (this.mouseCoords.y - this.circles[0].y) * followSpeed;
    
    requestAnimationFrame(() => this.animateCircles());
  }
}
