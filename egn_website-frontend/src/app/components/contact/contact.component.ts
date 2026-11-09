import { Component } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { ContactForm } from '../../model/contactform';
import { ContactService } from '../../services/contact.service';
import { DialogService } from '../../services/dialog.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardAvatar } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [
    NgIf,
    NgOptimizedImage,
    MatFormField,
    MatLabel,
    MatError,
    FormsModule,
    MatButton,
    MatInput,
    TranslateModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact: ContactForm = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  };

  constructor(
    private contactService: ContactService,
    private dialogService: DialogService) {
  }

  sendContact(form?: NgForm) {
    if (form?.invalid) {
      return;
    }

    this.contactService.sendContact(this.contact).subscribe({
      next: () => {
        this.dialogService.openInfoDialog("Vielen Dank!", "Ihre Nachricht wurde erfolgreich gesendet.").toPromise().then();
        // Formular nach dem Absenden zurücksetzen
        form?.resetForm();
        this.contact = { name: '', email: '', subject: '', phone: '', message: '' };
      },
      error: (error) => {
        console.error("Error sending contact message:", error);
        this.dialogService.openInfoDialog("Fehler", "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.").toPromise().then();
      }
    });
  }
}