import { Injectable } from '@angular/core';
import { Constructors } from '../../assets/F1DriverStandings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {

  constructor(private httpClient: HttpClient) { }
}
