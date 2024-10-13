import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import { Project } from '../../interfaces/project';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  allPrj: boolean = true;
  backPrj: boolean = false;
  frontPrj: boolean = false;

  projects: Project[] = [
    { number: 1, img: 'videoflix.webp', headline: 'Videoflix', usedTechnics: 'Django REST | Python | Angular | TypeScript', projectKeys: 'videoflix', liveTest: 'https://videoflix.aleksanderdemyanovych.de', link: 'https://github.com/A1eksD/Videoflix_backend', type: 'backend' },
    { number: 2, img: 'daBubble.png', headline: 'DABubble', usedTechnics: 'HTML | SCSS | TypeScript | Firebase', projectKeys: 'daBubble', liveTest: 'https://dabubble.aleksanderdemyanovych.de/login', link: 'https://github.com/A1eksD/DaBubble', type: 'frontend' },
    { number: 3, img: 'joinWallpaper.png', headline: 'Join', usedTechnics: 'HTML | SCSS | TypeScript | Firebase', projectKeys: 'join', liveTest: 'https://join.aleksanderdemyanovych.de', link: 'https://github.com/A1eksD/Join-Firebase', type: 'frontend' },
    { number: 4, img: 'sharkieWallpaper2.png', headline: 'Sharkie', usedTechnics: 'HTML | CSS | JavaScript', projectKeys: 'sharkie', liveTest: 'https://aleksanderdemyanovych.de/Sharkie/index.html', link: 'https://github.com/A1eksD/Sharkie', type: 'frontend' }
  ];
  filteredProjects = this.projects;
  windowWidth: number = window.innerWidth;
  
  constructor(){
    AOS.init();
    this.updateWindowWidth();
  }


  showAllProjects() {
    this.allPrj = true;
    this.backPrj = false;
    this.frontPrj = false;
    this.filteredProjects = this.projects;
  }
  
  showBackProjects() {
    this.allPrj = false;
    this.backPrj = true;
    this.frontPrj = false;
    this.filteredProjects = this.projects.filter(project => project.type === 'backend');
  }
  
  showFrontProjects() {
    this.allPrj = false;
    this.backPrj = false;
    this.frontPrj = true;
    this.filteredProjects = this.projects.filter(project => project.type === 'frontend');
  }

  getPrjAmoiunt(){
    return this.filteredProjects.length;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

}
