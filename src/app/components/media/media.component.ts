import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  private currentSlide = 0;
  private slides: HTMLInputElement[];

  constructor() { }

  ngOnInit(): void {
    this.slides = Array.from(document.querySelectorAll('input[name="slides"]')) as HTMLInputElement[];
    this.showSlide(this.currentSlide);
    
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private showSlide(slideIndex: number): void {
    this.slides[slideIndex].checked = true;
  }

  private nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

}
