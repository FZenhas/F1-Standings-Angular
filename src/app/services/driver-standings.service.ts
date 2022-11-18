import { Injectable } from '@angular/core';
import { DriverStanding } from '../../assets/F1DriverStandings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverStandingsService {

  constructor(private httpClient: HttpClient) { }

  private requestUrl: string = '../../assets/DriverStandings.json';
  getStandings() : Observable<DriverStanding[]> {
    return this.httpClient.get<DriverStanding[]>(this.requestUrl);
  }

}
