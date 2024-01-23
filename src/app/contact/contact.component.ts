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
    //route de back avec import 
    this.emailService.sendEmail(this.model).subscribe(
      (      response: any) => {
        console.log('Email sent successfully', response);
        // Ici, vous pouvez ajouter la logique pour informer l'utilisateur de la réussite de l'envoi
      },
      (      error: any) => {
        console.error('Error sending email', error);
        // Ici, vous gérez les erreurs, par exemple en informant l'utilisateur que l'envoi a échoué
      }
    );
  }
}
