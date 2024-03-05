import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  mailText: string = '';
  mailObj: string = '';
  emailSender: string = '';
  showAlert = false;

  sendEmail() {
    const email = `mailto:${'lori.pitti.01@gmail.com'}?cc=${this.emailSender}?subject=${encodeURIComponent(this.mailObj)}&body=${encodeURIComponent(this.mailText)}`;
    window.open(email);
    this.mailObj = '';
    this.mailText = '';
    this.emailSender = '';
    this.showAlert=true;
  }

}


