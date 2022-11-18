import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DriverStanding } from '../../../assets/F1DriverStandings';
import { DriverStandingsService } from '../../services/driver-standings.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.css']
})
export class DriverStandingsComponent implements OnInit {

  pageTitle = "F1 Drivers Championship Standings 2022";

  driverStanding: DriverStanding[] = {} as DriverStanding[];
  dataSource = new MatTableDataSource<DriverStanding>;
  displayedColumns = ['position', 'givenName', 'permanentNumber', 'name', 'points', 'actions'];
  shouldShow = false;
  selectedDriverStanding: DriverStanding = {} as DriverStanding;

  constructor(private driverStandingService: DriverStandingsService, private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator  = {} as MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //inicio table
  initializeTable() {
    this.dataSource = new MatTableDataSource<DriverStanding>(this.driverStanding);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
    //this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {
    this.driverStandingService.getStandings().subscribe((response) => {
    this.driverStanding = response;
    this.dataSource = new MatTableDataSource<DriverStanding>(this.driverStanding);
    this.initializeTable();
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.Driver.familyName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || data.Driver.givenName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || data.Constructors.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
      };
    });
}


deleteElement(driverStanding: DriverStanding){
  let index = this.dataSource.data.indexOf(driverStanding);
  this.dataSource.data.splice(index,1);
  this.dataSource._updateChangeSubscription();
}

openDetails(item: DriverStanding){
  this.shouldShow = true;
  this.selectedDriverStanding = item;
}

GoToDetail(constructorId: string){
  this.router.navigate(['team', constructorId]);
}

}