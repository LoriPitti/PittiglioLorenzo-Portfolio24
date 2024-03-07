import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalComponent} from "./personal/personal.component";
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:"about-me", component:PersonalComponent},
  {path:"projects", component:ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
