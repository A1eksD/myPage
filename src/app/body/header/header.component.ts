import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showFiller = false;
  
  showSideMenu() {
    this.showFiller = !this.showFiller;
    this.closeNB();
  }

  closeNB(){
    console.log('-------');
    console.log(this.showFiller);
    
    if (this.showFiller) {
      document.getElementById('menuIcon')?.classList.add('closeNavB');
    } else {
      document.getElementById('menuIcon')?.classList.remove('closeNavB');
    }
  }
}

