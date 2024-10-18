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
  iconImgs = ["angular.png", "django.svg","typescript.svg", "javascript.svg", "python.png", "html.svg", "css.svg", "sass.svg","firebase.svg", "git.svg", "scrum.svg", "API.svg", "github.png", "linux.png", "postgresql.png", "postman.svg", "redis-logo.svg", "sql.png"];
  iconText = ["Angular", "Django", "TypeScript", "JavaScript", "Python","HTML", "CSS", "SASS","Firebase", "git", "Scrum", "API", "GitHub", "Linux","PostgreSQL","Postman", "Redis", "SQL"];

}
