import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { MainComponent } from './components/templates/main/main.component';
import { SobreComponent } from './components/templates/sobre/sobre.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { ServicosComponent } from './components/templates/servicos/servicos.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ContatoComponent } from './components/templates/contato/contato.component';
import { FooterComponent } from './components/templates/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SobreComponent,
    ServicosComponent,
    HomeComponent,
    CardComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
