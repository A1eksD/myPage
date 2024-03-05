import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  imgs =[ 'joinWallpaper.png', 'sharkieWallpaper2.png', 'pokedexWallpaper.png'];
  headline = ['Join', 'Sharkie', 'Pokedex'];
  usedTechnics =['HTML | CSS | Javascript', 'HTML | CSS | Javascript', 'HTML | CSS | Javascript'];
  description = ['Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
                 'Play a little jump and run by helping little shark named Sharkie on his adventure.',
                 'Dive back in childhood and watch your favorite pokmons.'];
  links = ['https://github.com/A1eksD/Join', 'https://github.com/A1eksD/Sharkie', 'https://github.com/A1eksD/my-Pokedex.git'];
  nrOfProject = [ 1, 2, 3];

  
  constructor(){
    AOS.init();
  }

}
