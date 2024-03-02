import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  iconImgs = ["angular.svg", "typescript.svg", "javascript.svg", "html.svg", "css.svg", "firebase.svg", "git.svg", "scrum.svg", "API.svg"];
  iconText = ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Firebase", "git", "Scrum", "API"]

}
