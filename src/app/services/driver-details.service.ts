import { Injectable } from '@angular/core';
import { Driver } from '../../assets/F1DriverStandings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  constructor(private httpClient: HttpClient) { }
}
