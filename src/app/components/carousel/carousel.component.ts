import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 4000; //3 segundos

  selectedIndex = 0;

  ngOnInit(): void {
   if(this.autoSlide){
    this.autoSlideImages();
   }
  }
  
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  autoSlideImages(): void{
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    } else{
      this.selectedIndex++;
    }
  }
}
