import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CouncellingComponent } from './councelling/councelling.component';
import { CrisisComponent } from './crisis/crisis.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"crisis", component:CrisisComponent},
  {path:"conditions", component: ConditionsComponent},
  {path:"group", component:GroupComponent},
  {path:"councelling", component:CouncellingComponent},
  {path:"addnew", component:AddnewComponent},
  {path:"professional", component:ProfessionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
