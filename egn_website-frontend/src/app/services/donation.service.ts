import { Injectable } from '@angular/core';
import {DonationForm} from '../model/donationform';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  sendDonation(donation: DonationForm) {
    return this.http.post<string>(`${environment.serverapi}/donation`, donation, {responseType: 'text' as 'json'});
  }
}
