import { Component, Input, OnInit } from '@angular/core';
import { DriverStanding } from '../../../assets/F1DriverStandings';
import { DriverDetailsService } from '../../services/driver-details.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  @Input() public item: DriverStanding = {} as DriverStanding;

  constructor(){}

  ngOnInit(): void {
  }

}
