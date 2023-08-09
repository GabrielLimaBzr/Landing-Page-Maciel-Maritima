import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {

  cardsData = [
    {
      title: 'Rebocadores',
      srcImg: 'assets/barco.png',
      text: 'Rebocadores são embarcações projetadas para manobrar e rebocar barcos e navios, garantindo a segurança da navegação em situações delicadas, como entrada e saída em portos e canais.'
    },
    {
      title: 'Mergulhadores',
      srcImg: 'assets/mergulho.png',
      text: 'A escafandaria é uma atividade que envolve mergulho com equipamentos especiais para realizar inspeções, reparos e manutenções em estruturas subaquáticas, como cascos de navios, plataformas de petróleo e estruturas de pontes e barragens.'
    },
    {
      title: 'Caminhão Munck',
      srcImg: 'assets/caminhao.png',
      text: 'Quase todos os itens de carga são transportados em algum momento de sua viagem ao redor do mundo, para isso contamos com uma frota de transporte terrestre igualmente tecnológica.'
    },
    {
      title: 'Segurança e Qualidade',
      srcImg: 'assets/selo.png',
      text: 'Oferecemos nossos serviços de forma segura e com a qualidade que nossos clientes merecem. Optamos por embarcações novas e revisadas, afim de prestar os melhores serviços.'
    }
  ];
}
