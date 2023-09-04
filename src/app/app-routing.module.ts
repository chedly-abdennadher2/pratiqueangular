import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponentModule } from './accueil-component/accueil-component.module';
import { CreateComponent } from './accueil-component/create/create.component';
import { ReadallComponent } from './accueil-component/readall/readall.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'accueil/create', component: CreateComponent,
},
{
  path: 'accueil/readall', component: ReadallComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }