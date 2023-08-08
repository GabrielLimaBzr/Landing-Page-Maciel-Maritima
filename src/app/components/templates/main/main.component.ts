import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  toContato(){
    document.getElementById("contato").scrollIntoView({behavior: "smooth"});
  }

}
