import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showFiller = false;
  changeFlag = true;

  
  showSideMenu() {
    this.showFiller = !this.showFiller;
  }

  
  private readonly availableLanguages = ['eng', 'ger'];
  private readonly translateService = inject(TranslateService);
  languageOptions: any[] = [];

  ngOnInit(): void {
    this.translateService.addLangs(this.availableLanguages);
    this.changeLanguages();
  }


  changeLanguage(language: any) {
    this.translateService.use(language.value);
  }
  

  changeLanguages(){
    if (this.changeFlag) {
      this.translateService.use('eng');
      this.changeFlag = false;
    } else {
      this.translateService.use('ger');
      this.changeFlag = true;
    }
  }

}

