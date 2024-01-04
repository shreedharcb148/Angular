import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPage404Component } from './no-page-404/no-page-404.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path : 'about',
    component : AboutComponent,
    children : [
      {component : AboutCompanyComponent,path : 'company'},
      {component : AboutMeComponent,path : 'me'},
    ]
  },
  {
    path : 'user/:id',
    component : UserComponent
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : '**',
    component : NoPage404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
