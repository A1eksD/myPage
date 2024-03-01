import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, FooterComponent, HeaderComponent, LandingpageComponent, MySkillsComponent, ProjectsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
