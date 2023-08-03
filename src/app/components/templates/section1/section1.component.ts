import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component {

  images = [
    {
      imageSrc: '../../assets/images/foto1.jpeg',
      imageAlt: 'foto1'
    },
    {
      imageSrc: '../../assets/images/foto2.jpeg',
      imageAlt: 'foto2'
    },
    {
      imageSrc: '../../assets/images/foto3.jpeg',
      imageAlt: 'foto3'
    },
  ]

}
