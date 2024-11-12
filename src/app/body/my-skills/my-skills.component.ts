import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  iconImgs = ["angular.png", "django.svg","typescript.svg", "javascript.svg", "python.png", "html.svg", "sass.svg", "postman.svg","firebase.svg", "git.svg", "scrum.svg", "API.svg", "github.png", "linux.png", "postgresql.png", "css.svg", "redis-logo.svg", "sql.png"];
  iconText = ["Angular", "Django", "TypeScript", "JavaScript", "Python","HTML", "SASS", "Postman","Firebase", "git", "Scrum", "API", "GitHub", "Linux","PostgreSQL", "CSS", "Redis", "SQL"];

}
