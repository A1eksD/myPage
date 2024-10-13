import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons = ["gitHubSmall.svg", "mail.svg", "linktIn.svg"];
  links = ["https://github.com/A1eksD", "mailto:aleks444@gmx.de", "https://www.linkedin.com/in/aleksander-demyanovych-4490542b3/"];

}
