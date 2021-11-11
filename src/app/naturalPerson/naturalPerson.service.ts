import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NaturalPerson } from './naturalPerson';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NaturalPersonService {
  private apiUrl: string = environment.baseUrl + 'persons/natural';

  constructor(private http: HttpClient) {
  }

  getNaturalPersons(): Observable<NaturalPerson[]> {
    return this.http.get<NaturalPerson[]>(this.apiUrl);
  }

}