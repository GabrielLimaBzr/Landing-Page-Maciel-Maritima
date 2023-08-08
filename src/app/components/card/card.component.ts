import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  rebocadores: string = 'Rebocadores são embarcações projetadas para manobrar e rebocar barcos e navios, garantingo a segurança da navegação em situações delicadas, como entrada e saida em portos e canais.';
  mergulho:  string = 'A escafandaria é uma atividade que envolve mergulho com equipamentos especiais para realizar inspeções, reparos e manutenções em estruturas subaquáticas, como cascos de navios, plataformas de petróleo e estruturas de pontes e barragens.';
  caminhao: string = 'Quase todos os itens de carga são transportados em algum momento da sua viagem ao redor do mundo, para isso contamos com uma frota de transporte terrestre igualmente tecnológica.';
  qualidade:  string = 'Oferecemos nossos serviços de forma segura e com a qualidade que nossos clientes merecem. Optamos por embarcações novas e revisadas, afim de prestar os melhores serviços.';

}
