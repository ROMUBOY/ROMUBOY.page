import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [    
    {id: 1, name: "Site Pessoal", pictures: ["../../assets/site-pessoal/image1.jpg","../../assets/site-pessoal/image2.jpg","../../assets/site-pessoal/image3.jpg","../../assets/site-pessoal/image4.jpg"], projectLink: "https://github.com/ROMUBOY/portifolio_pessoal", summary: "Site pessoal desenvolvido utilizando Angular e Typescript", description: "Site criado com o intuito de ser meu site pessoal. Possui sessões de apresentação, portfolio, currículo e informações de contato.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},    
    {id: 3, name: "Site de Passagens Aereas", pictures: ["../../assets/aeroporto/image1.jpg","../../assets/aeroporto/image2.jpg","../../assets/aeroporto/image3.jpg"], projectLink: "https://github.com/ROMUBOY/Aeroporto-Horizon", summary: "Site de compra de passagens aereas desenvolvido com ASP.NET e Angular", description: "Conceito de site para compras de passagens aereas com sessão para compra das passagens, verificação de passagens por CPF e impressão de voucher e etiqueta de bagagem, que ficam disponíveis apenas 5 horas antes do voo. Programado para mostrar apenas voos com partida posterior ao horario atual e que possuam poltronas disponiveis. Possui funções a nivel de API com acesso autenticado para criação e exclusão de voos e alteração de preços de passagens.", tags: [Tag.ANGULAR ,Tag.CSHARP, Tag.ASPNET]},
    {id: 4, name: "Spaceship For Newbies", pictures: ["../../assets/spaceship-for-newbies/image1.jpg","../../assets/spaceship-for-newbies/image2.jpg","../../assets/spaceship-for-newbies/image3.jpg"], projectLink: "https://store.steampowered.com/app/1568130/Spaceship_for_Newbies/", summary: "Jogo digital para windows e Android Desenvolvido na Unity", description: "Jogo para computadores windows e dispositivos android onde controlamos uma espaçonave com apenas um botão. O jogo possui 83 fases e varias configurações de volume, tremor de tela e idioma. Além de programador fui Lead Game Designer e level designer", tags: [Tag.UNITY, Tag.CSHARP]},
    {id: 2, name: "WebApp de Namoro", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "https://github.com/ROMUBOY/TryCatchLearn_aspnet_and_angular", summary: "Aplicativo de Namoro web Fullstack desenvolvido usando Angular e ASP.NET", description: "Ainda em desenvolvimento, conceito de Aplicativo Web para encontros.", tags: [Tag.ANGULAR ,Tag.CSHARP, Tag.ASPNET]}
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(p => p.id === id);

    if(project === undefined){
      throw new TypeError('Não existe projeto com o id: ' + id);
    }

    return project;
  }
}
