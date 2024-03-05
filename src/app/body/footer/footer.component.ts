import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons = ["gitHub.svg", "mail.svg", "linktIn.svg"];
  links = ["https://github.com/A1eksD", "#", "https://www.linkedin.com/in/aleksander-demyanovych-4490542b3/"];
}
