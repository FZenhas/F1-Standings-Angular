import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: DriverStandingsComponent
  },
  {
    path:'driver/:id',
    component: DriverDetailsComponent
  },
  {
    path:'team/:constructorId',
    component: TeamDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
