import { Component } from '@angular/core';
 
import {NgOptimizedImage} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {DonationForm} from '../../model/donationform';
import {FormsModule} from '@angular/forms';
import {DonationService} from '../../services/donation.service';
import {DialogService} from '../../services/dialog.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-missionegnition',
  imports: [
    NgOptimizedImage,
    MatFormField,
    MatRadioButton,
    MatRadioGroup,
    MatInput,
    MatButton,
    MatLabel,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './missionegnition.component.html',
  styleUrl: './missionegnition.component.scss'
})
export class MissionegnitionComponent {

  donation : DonationForm = {
    firstName: '',
    lastName: '',
    certificate: false,
    amount: 0,
    note: '',
    address: '',
    postalCode: '',
    city: ''
  }

  constructor(
    private donationService: DonationService,
    private dialogService: DialogService) {
  }

  sendDonation() {
    this.donationService.sendDonation(this.donation).subscribe({
      next: (response) => {
        this.dialogService.openInfoDialog("Vielen Dank!", "Ihre Spende wurde erfolgreich gesendet.").toPromise().then();
        // Reset the form after successful submission
        this.donation = {
          firstName: '',
          lastName: '',
          certificate: false,
          amount: 0,
          note: '',
          address: '',
          postalCode: '',
          city: ''
        };
      },
      error: (error) => {
        this.dialogService.openInfoDialog("Fehler", "Beim Senden Ihrer Spende ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.").toPromise().then();
      }
    });
  }

}
