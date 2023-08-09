import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  revealPoint = 150;


  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.checkAndAdjustReveal();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkAndAdjustReveal(); // Ajuste o reveal ao redimensionar a janela
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.reveal();
  }

  reveal() {
    var rvls = this.elementRef.nativeElement.querySelectorAll('.reveal');

    for (var i = 0; i < rvls.length; i++) {
      var windowTam = window.innerHeight;
      var revealTop = rvls[i].getBoundingClientRect().top;

      if (revealTop < windowTam - this.revealPoint) {
        rvls[i].classList.add('active');
      } else {
        rvls[i].classList.remove('active');
      }
    }
  }

  checkAndAdjustReveal() {
    if (window.innerWidth <= 767) { // Defina o valor de largura apropriado para dispositivos móveis
      this.revealPoint = 50
      var elementoSobre = this.elementRef.nativeElement.querySelector('#sobre');
      if (elementoSobre) {
        elementoSobre.classList.remove('reveal');
      }
    } else {
      this.revealPoint = 150
      var elementoSobre = this.elementRef.nativeElement.querySelector('#sobre');
      if (elementoSobre) {
        elementoSobre.classList.add('reveal');
      }
    }
  }

}

