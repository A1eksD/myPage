import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  @Input()showFiller = true;

  @Output()closeNavigationBar = new EventEmitter<boolean>();

  constructor(){
    setInterval(() => {
      console.log(this.showFiller);
    }, 2000)
  }

  closeNavBar(){
    this.closeNavigationBar.emit(this.showFiller);
    // this.closeNB();   
  }

  // closeNB(){
  //   console.log('-------');
  //   console.log(this.showFiller);
  
  //   if (!this.showFiller) {
  //     document.getElementById('menuIcon')?.classList.add('closeNavB');
  //   } else {
  //     document.getElementById('menuIcon')?.classList.remove('closeNavB');
  //   }
  // }
}
