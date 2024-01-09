import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model: ContactModel = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/send-email', this.model).subscribe(
      response => console.log('Email sent successfully'),
      error => console.error('There was an error!', error)
    );
  }
}

export interface ContactModel {
  name: string;
  email: string;
  message: string;
}

