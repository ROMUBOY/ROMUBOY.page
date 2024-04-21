import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [    
    {id: 1, name: "Site Pessoal", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "https://github.com/ROMUBOY/portifolio_pessoal", summary: "Site pessoal desenvolvido utilizando Angular e Typescript.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 2, name: "WebApp de Namoro", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "https://github.com/ROMUBOY/TryCatchLearn_aspnet_and_angular", summary: "Aplicativo de Namoro web Fullstack desenvolvido usando Angular e ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR ,Tag.CSHARP, Tag.ASPNET]},
    {id: 3, name: "API de Aeroporto", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "https://github.com/ROMUBOY/Aeroporto-Horizon", summary: "Web API para sistema de compra de passagens aereas Utilizando ASP.NET.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 4, name: "Spaceship For Newbies", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "https://store.steampowered.com/app/1568130/Spaceship_for_Newbies/", summary: "Jogo digital para windows e Android Desenvolvido na Unity", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.UNITY, Tag.CSHARP]}
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
