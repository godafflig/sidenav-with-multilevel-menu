// contact.component.ts
import { Component } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model: any = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private emailService: EmailService) {}

  onSubmit() {
    console.log('Form data:', this.model);

    this.emailService.sendEmail(this.model).subscribe(
      response => {
        console.log('Email sent successfully', response);
        // Ajoutez la logique pour informer l'utilisateur de la réussite
      },
      error => {
        console.error('Error sending email', error);
        // Gérez les erreurs en informant l'utilisateur
      }
    );
  }
}
