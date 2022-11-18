import { Component, OnInit } from '@angular/core';
import { DriverStanding } from '../../../assets/F1DriverStandings';
import { ActivatedRoute } from '@angular/router';
import { DriverStandingsService } from '../../services/driver-standings.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  id: string = "";
  standings: DriverStanding = {} as DriverStanding;
  list: DriverStanding[] = {} as DriverStanding[];


  constructor(private activatedRoute: ActivatedRoute, private driverStandingsService: DriverStandingsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['constructorId'];
      }
    )

    this.driverStandingsService.getStandings().subscribe( response => {
      this.list = response.filter(x => x.Constructors.constructorId == this.id);
      this.standings = response.filter(item => item.Constructors.constructorId == this.id)[0];
    })
  }


}

