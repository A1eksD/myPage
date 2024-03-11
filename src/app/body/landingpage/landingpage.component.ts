import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  constructor(){
    let isFadingOut = false;
    window.addEventListener('scroll', () => {
        const element = document.querySelector('.mainContainer') as HTMLElement;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= 300 && !isFadingOut) {
            element.classList.add('fade-in-animation');
            isFadingOut = true;
        } else if (scrollPosition < 300 && isFadingOut) {
            element.classList.remove('fade-in-animation');
            isFadingOut = false;
        }
    });
  }
}
