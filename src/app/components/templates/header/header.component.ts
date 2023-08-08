import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toHome(){
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
  }

  toSobre(){
    document.getElementById("sobre").scrollIntoView({behavior: "smooth"});
  }

  toServicos(){
    document.getElementById("servicos").scrollIntoView({behavior: "smooth"});
  }

  toContato(){
    document.getElementById("contato").scrollIntoView({behavior: "smooth"});
  }

  isMenuOpen = false;
  menuIcon = 'fa fa-bars';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIcon = this.isMenuOpen ? 'fa fa-chevron-up' : 'fa fa-bars';
  }
}
