import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isChecked = true;
  // bootstrapApplication(NavBarComponent, {
  //   providers: [
  //     provideAnimations(),
  //   ]
  // }); 


  showSideMenu(){
    this.isChecked = !this.isChecked;
  }
}
