import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponentModule } from './accueil-component/accueil-component.module';
import { CreateComponent } from './accueil-component/create/create.component';

const routes: Routes = [
  { path: 'accueil', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }