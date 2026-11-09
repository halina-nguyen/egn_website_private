import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactForm} from '../model/contactform';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContact(contactForm: ContactForm) {
    return this.http.post<string>(`${environment.serverapi}/contact`, contactForm, {responseType: 'text' as 'json'});
  }
}
