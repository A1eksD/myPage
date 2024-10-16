import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  checkedIconImg = true;

  test = false;
  checkButton = false;

  isChecked = false;
  unchecked = 'check_box_outline_blank.svg';
  checked = 'check_box.svg';

  mailTest = false;

  sendedMail = false;

  checkIfAgree(){
    this.isChecked = !this.isChecked;
  }
  

  contactData = {
    name: "",
    email: "",
    message: "",
  }


  post = {
    endPoint: 'https://aleksanderdemyanovych.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //wenn was hinzufügen, dann hier
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.sendedMail = true;
            this.checkIfAgree();
            setTimeout(() => {
              this.sendedMail = false;
            }, 4000);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
