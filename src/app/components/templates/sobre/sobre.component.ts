import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

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
      imageSrc: '../../assets/images/foto3.jpg',
      imageAlt: 'foto3'
    },
  ]

}
