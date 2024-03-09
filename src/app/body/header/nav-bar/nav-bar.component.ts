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


  test: boolean  = false;

  constructor(){
    console.log(this.showFiller);
    // this.toggleValue();
  }

  closeNavBar(){
    this.closeNavigationBar.emit(this.showFiller); 
    console.log("-----------",this.closeNavigationBar);
    
  }
}
