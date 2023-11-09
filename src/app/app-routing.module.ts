import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObrigadoComponent } from './components/templates/obrigado/obrigado.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'obrigado-contato', component: ObrigadoComponent },
  { path: 'nao-localizao', component: NotfoundComponent },
  { path: '**', redirectTo: '/nao-localizao' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
