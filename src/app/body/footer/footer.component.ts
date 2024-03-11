import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons = ["gitHubSmall.svg", "mail.svg", "linktIn.svg"];
  links = ["https://github.com/A1eksD", "mailto:aleks444@gmx.de", "https://www.linkedin.com/in/aleksander-demyanovych-4490542b3/"];

}
